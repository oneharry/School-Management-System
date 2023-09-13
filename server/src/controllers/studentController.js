const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const errorHandler = require('../middleware/errorHandler');


//@desc Get all students
//@route GET /api/students
//@access public
const getStudent = asyncHandler(async (req, res) => {
  const contacts = await Student.find();
  res.status(200).json(contacts);
});

//@desc Create new Student
//@route POST /api/students
//@access public
const createStudent = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone, date, grade, parent } = req.body;
  if (!name || !email || !phone || !date || !grade || !parent ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }

  const id = 1 //to be auto generated
  const contact = await Student.create({
    name,
    date,
    email,
    phone,
    id,
    grade,
    parent,
  });

  console.log("student successfully created")
  res.status(201).json(contact);
});



/**
 * @desc Get profile of student by id
 * @route GET /api/student/:id
 * @return student object as response object
 */
const getStudentProfile = async (req, res) => {
  console.log("The request body is :", req.body);
  const { id } = req.params;
  Student.findById(id, (err, student) => {
    if (err) {
      errorHandler(err);
    } else if(student) {
      res.status(200).json(student);
    }
  })
};

/**
 * @desc update students info
 * @route PUT /api/student/:id
 * @return student object as response object
 */
const updateStudent = async (req, res) => {
  console.log("The request body is :", req.body);
  const { id } = req.params;
  const updatedData = req.body;
  Student.findByIdAndUpdate(id, updatedData, (err, updatedStudent) => {
    if (err) {
      errorHandler(err);
    } else if(updatedStudent) {
      res.status(200).json(updateStudent);
    }
  })
};

/**
 * @desc delete students
 * @route DELETE /api/student/:id
 * @return student object as response object
 */
const deleteStudent = async (req, res) => {
  console.log("The request body is :", req.body);
  const { id } = req.params;
  Student.findByIdAndDelete(id, (err, student) => {
    if (err) {
      errorHandler(err);
    } else if(student) {
      res.status(200).json(updateStudent);
    }
  })
};

module.exports = {
    getStudent,
    createStudent,
    getStudentProfile,
    updateStudent,
    deleteStudent
};