const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
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
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Student.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});


module.exports = {
    getStudent,
    createStudent,
  };