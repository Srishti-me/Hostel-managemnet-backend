const express = require("express");
const {
  createStudent,
  getStudents,
  allotRoom,
  getAllAllocations,
  updateFee,
  viewStaff,
  createStaff,
  markExit,
  markEntry,
  getAllFees,
  viewEntryExitRecords,
} = require("./controllers/controller.js");

const router = express.Router();

// POST request to create a student
router.post("/students", createStudent);
router.get("/students", getStudents);
router.post("/allotment", allotRoom);
router.get("/allotment", getAllAllocations);
router.post("/update_fee", updateFee);
router.get("/get_fee", getAllFees);
router.get("/staff", viewStaff);
router.get("/logs", viewEntryExitRecords);
router.post("/staff", createStaff);
router.post("/mark_entry", markEntry);
router.post("/mark_exit", markExit);

module.exports = router;
