const db = require("../db");

async function createStudent(req, res) {
  try {
    const {
      name,
      gender,
      date_of_birth,
      email,
      phone_number,
      emergency_contact,
    } = req.body;

    if (
      !name ||
      !gender ||
      !date_of_birth ||
      !email ||
      !phone_number ||
      !emergency_contact
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const query = `
      INSERT INTO Students (name, gender, date_of_birth, email, phone_number, emergency_contact)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await db.query(query, [
      name,
      gender,
      date_of_birth,
      email,
      phone_number,
      emergency_contact,
    ]);

    return res.status(201).json({ message: "Student created successfully" });
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function getStudents(req, res) {
  try {
    const [students] = await db.query("SELECT * FROM Students");
    return res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function allotRoom(req, res) {
  try {
    const { student_id, room_number, allocation_date, release_date } = req.body;

    if (!student_id || !room_number || !allocation_date || !release_date) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const [student] = await db.query(
      "SELECT * FROM Students WHERE student_id = ?",
      [student_id]
    );

    if (!student.length) {
      return res.status(404).json({ error: "Student not found" });
    }
    const [room] = await db.query(
      'SELECT * FROM Rooms WHERE room_number = ? AND availability = "Available"',
      [room_number]
    );
    if (!room.length) {
      console.log("check");
      return res.status(404).json({ error: "Room not found or unavailable" });
    }

    const query = `
    INSERT INTO HostelAllocations (student_id, room_number, allocation_date, release_date)
    VALUES (?, ?, ?, ?)
  `;
    await db.query(query, [
      student_id,
      room_number,
      allocation_date,
      release_date,
    ]);

    // Update room availability to "Occupied"
    await db.query(
      'UPDATE Rooms SET availability = "Occupied" WHERE room_number = ?',
      [room_number]
    );

    // Return success response
    res.status(200).json({ message: "Room allotted successfully" });
  } catch (error) {
    console.error("Error allotting room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getAllAllocations(req, res) {
  try {
    const [allocations] = await db.query("SELECT * FROM HostelAllocations");
    return res.status(200).json(allocations);
  } catch (error) {
    console.error("Error fetching allocations:", error);
    return [];
  }
}

async function updateFee(req, res) {
  try {
    const { student_id, fee_amount, fee_date } = req.body;

    // Validate input

    if (!fee_amount || isNaN(fee_amount)) {
      return res.status(400).json({ error: "Invalid fee amount" });
    }

    // Update fee in the database
    const query = `
      INSERT INTO HostelFees (student_id, fee_amount, fee_date)
      VALUES (?, ?, ?)
      `;
    await db.query(query, [student_id, fee_amount, fee_date]);

    res.status(200).json({ message: "Fee updated successfully" });
  } catch (error) {
    console.error("Error updating fee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
async function getAllFees(req, res) {
  try {
    const [fees] = await db.query("SELECT * FROM HostelFees");
    return res.status(200).json(fees);
  } catch (error) {
    console.error("Error fetching fees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createStaff(req, res) {
  try {
    const { name, role, email, phone_number } = req.body;

    // Validate input
    if (!name || !role || !email || !phone_number) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create staff member in the database
    const query = `
      INSERT INTO Staff (name, role, email, phone_number)
      VALUES (?, ?, ?, ?)
    `;
    await db.query(query, [name, role, email, phone_number]);

    res.status(200).json({ message: "Staff member created successfully" });
  } catch (error) {
    console.error("Error creating staff member:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function viewStaff(req, res) {
  try {
    const query = `
      SELECT * FROM Staff
    `;
    const [staffMembers] = await db.query(query);
    console.log(staffMembers);

    res.status(200).json(staffMembers);
  } catch (error) {
    console.error("Error fetching staff members:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
async function viewEntryExitRecords(req, res) {
  try {
    // Fetch all entry/exit records from the database including student name
    const query = `
      SELECT e.*, s.name AS student_name
      FROM DailyEntryExit e
      LEFT JOIN Students s ON e.student_id = s.student_id
    `;
    const [entryExitRecords] = await db.query(query);

    res.status(200).json(entryExitRecords);
  } catch (error) {
    console.error("Error fetching entry/exit records:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Function to mark the entry of the student
async function markEntry(req, res) {
  try {
    const { student_id } = req.body;

    // Check if the student is already inside
    const isInsideQuery = `
      SELECT is_inside_hostel FROM Students WHERE student_id = ?
    `;
    const [[{ is_inside_hostel }]] = await db.query(isInsideQuery, [
      student_id,
    ]);

    // If the student is already inside, return an error
    if (is_inside_hostel) {
      return res.status(400).json({
        error: "Wrong request",
        message: "Student is already inside the hostel",
      });
    }

    // Update the is_inside_hostel field to true
    const updateStudentQuery = `
      UPDATE Students SET is_inside_hostel = TRUE WHERE student_id = ?
    `;
    await db.query(updateStudentQuery, [student_id]);

    // Update the latest entry record where entry time is null
    const updateEntryQuery = `
      UPDATE DailyEntryExit SET entry_time = CURRENT_TIMESTAMP
      WHERE student_id = ? AND entry_time IS NULL
      ORDER BY date DESC
      LIMIT 1
    `;
    await db.query(updateEntryQuery, [student_id]);

    res.status(200).json({ message: "Entry marked successfully" });
  } catch (error) {
    console.error("Error marking entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Function to mark the exit of the student
async function markExit(req, res) {
  try {
    const { student_id } = req.body;

    // Check if the student is already outside
    const isOutsideQuery = `
      SELECT is_inside_hostel FROM Students WHERE student_id = ?
    `;
    const [[{ is_inside_hostel }]] = await db.query(isOutsideQuery, [
      student_id,
    ]);
    console.log(is_inside_hostel);
    if (!is_inside_hostel) {
      return res.status(400).json({
        error: "Wrong request",
        message: "Student is already outside the hostel",
      });
    }

    // Update is_inside_hostel to false
    const updateStudentQuery = `
      UPDATE Students
      SET is_inside_hostel = FALSE
      WHERE student_id = ?
    `;
    await db.query(updateStudentQuery, [student_id]);

    // Insert a new entry for exit
    const insertQuery = `
      INSERT INTO DailyEntryExit (student_id, exit_time, date)
      VALUES (?, CURRENT_TIMESTAMP, CURRENT_DATE)
    `;
    await db.query(insertQuery, [student_id]);

    res.status(200).json({ message: "Exit marked successfully" });
  } catch (error) {
    console.error("Error marking exit:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createStudent,
  getStudents,
  allotRoom,
  getAllAllocations,
  updateFee,
  createStaff,
  viewStaff,
  markExit,
  markEntry,
  getAllFees,
  viewEntryExitRecords,
};
