const express = require("express");
const router = express.Router();
const { getStudent, createStudent, getStudentProfile, updateStudent, deleteStudent, addScore } = require("../controllers/studentController");
const { getStaff, createStaff } = require("../controllers/staffController");
const { getParent, createParent } = require("../controllers/parentController");
const validateToken = require("../middleware/validateTokenHandler");
const { readAccess, writeAccess } = require('../middleware/accessRightHandler');
const { isUserExist } = require('../middleware/canCreateHandler');



router.get('/student/:id', validateToken, readAccess, getStudentProfile);
router.get('/students', getStudent);
router.post('/student', validateToken, isUserExist, writeAccess, createStudent);
router.put('/student/:id', validateToken, writeAccess, updateStudent);
router.delete('/student/:id', validateToken, writeAccess, deleteStudent);

router.put('/student/:grade/:id', validateToken, writeAccess, addScore);

router.get('/staff', getStaff);
router.post('/staff', validateToken, isUserExist, writeAccess, createStaff);

router.get('/parent', getParent);
router.post('/parent', validateToken, isUserExist, writeAccess, createParent);

module.exports = router;