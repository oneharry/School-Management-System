const express = require("express");
const router = express.Router();
const { getStudent, createStudent } = require("../controllers/studentController");
const { getStaff, createStaff } = require("../controllers/staffController");
const { getParent, createParent } = require("../controllers/parentController");



router.get('/students', getStudent);
router.post('/student', createStudent);

module.exports = router;