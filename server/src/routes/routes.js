const express = require("express");
const router = express.Router();
const { getStudent, createStudent, getStudentProfile, updateStudent, deleteStudent } = require("../controllers/studentController");
const { getStaff, createStaff } = require("../controllers/staffController");
const { getParent, createParent } = require("../controllers/parentController");



router.get('/student/:id', getStudentProfile);
router.get('/students', getStudent);
router.post('/student', createStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent)

router.get('/staff', getStaff);
router.post('/staff', createStaff);

router.get('/parent', getParent);
router.post('/parent', createParent);

module.exports = router;