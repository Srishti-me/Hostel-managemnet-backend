const db = require("./db");

async function createTables() {
  try {
    // SQL query to create Students table
    await db.query(`
        CREATE TABLE IF NOT EXISTS Students (
          student_id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          gender ENUM('Male', 'Female'),
          date_of_birth DATE,
          email VARCHAR(100),
          phone_number VARCHAR(15),
          emergency_contact VARCHAR(15),
          is_inside_hostel BOOLEAN DEFAULT TRUE
        )
      `);

    // SQL query to create Rooms table
    await db.query(`
    CREATE TABLE IF NOT EXISTS Rooms (
      room_number INT,
      capacity INT,
      floor INT,
      hostel_block VARCHAR(10),
      availability ENUM('Available', 'Occupied'),
      PRIMARY KEY (room_number, hostel_block)
    );
      `);

    // SQL query to create Staff table
    await db.query(`
        CREATE TABLE IF NOT EXISTS Staff (
          staff_id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          role VARCHAR(100),
          email VARCHAR(100),
          phone_number VARCHAR(15)
        )
      `);

    // SQL query to create HostelAllocations table
    await db.query(`
        CREATE TABLE IF NOT EXISTS HostelAllocations (
          allocation_id INT AUTO_INCREMENT PRIMARY KEY,
          student_id INT,
          room_number INT,
          allocation_date DATE,
          release_date DATE,
          FOREIGN KEY (student_id) REFERENCES Students(student_id),
          FOREIGN KEY (room_number) REFERENCES Rooms(room_number)
        )
      `);

    // SQL query to create HostelFees table
    await db.query(`
        CREATE TABLE IF NOT EXISTS HostelFees (
          fee_id INT AUTO_INCREMENT PRIMARY KEY,
          student_id INT,
          fee_amount DECIMAL(10, 2),
          fee_date DATE,
          FOREIGN KEY (student_id) REFERENCES Students(student_id)
        )
      `);

    // SQL query to create DailyEntryExit table
    await db.query(`
        CREATE TABLE IF NOT EXISTS DailyEntryExit (
          entry_exit_id INT AUTO_INCREMENT PRIMARY KEY,
          student_id INT,
          entry_time DATETIME NULL,
          exit_time DATETIME NULL,
          date DATE,
          FOREIGN KEY (student_id) REFERENCES Students(student_id)
        )
      `);

    console.log("Tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    // pool.end();
  }
}

createTables();

async function seedData() {
  try {
    // Insert dummy data into Students table
    await db.query(`
        INSERT INTO Students (name, gender, date_of_birth, email, phone_number, emergency_contact)
        VALUES
          ('John Doe', 'Male', '1995-07-15', 'john.doe@example.com', '1234567890', '0987654321'),
          ('Jane Smith', 'Female', '1998-05-20', 'jane.smith@example.com', '9876543210', '0123456789');
      `);

    // Insert dummy data into Rooms table
    await db.query(`
        INSERT INTO Rooms (room_number, capacity, floor, hostel_block, availability)
        VALUES
          (101, 4, 1, 'A', 'Available'),
          (102, 2, 1, 'A', 'Occupied');
      `);

    // Insert dummy data into Staff table
    await db.query(`
        INSERT INTO Staff ( name, role, email, phone_number)
        VALUES
          ('Michael Johnson', 'Warden', 'michael.johnson@example.com', '9876543210'),
          ('Emily Wilson', 'Security', 'emily.wilson@example.com', '1234567890');
      `);

    // Insert dummy data into HostelAllocations table
    await db.query(`
        INSERT INTO HostelAllocations (student_id, room_number, allocation_date, release_date)
        VALUES
          ( 1, 101, '2022-01-15', NULL),
          ( 2, 102, '2022-02-20', '2022-05-30');
      `);

    // Insert dummy data into HostelFees table
    await db.query(`
        INSERT INTO HostelFees (student_id, fee_amount, fee_date)
        VALUES
          ( 1, 500.00, '2022-01-01'),
          ( 2, 600.00, '2022-02-01');
      `);

    // Insert dummy data into DailyEntryExit table
    await db.query(`
        INSERT INTO DailyEntryExit ( student_id, entry_time, exit_time, date)
        VALUES
          ( 1, '2022-01-15 09:00:00', '2022-01-15 18:00:00', '2022-01-15'),
          ( 2, '2022-02-20 10:00:00', '2022-02-20 19:00:00', '2022-02-20');
      `);

    console.log("Dummy data seeded successfully");
  } catch (error) {
    console.error("Error seeding dummy data:", error);
  }
}

seedData();
