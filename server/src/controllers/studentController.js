const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const User = require('../models/userModel')
const errorHandler = require('../middleware/errorHandler');


//@desc Get all students
//@route GET /api/students
//@access public
const getStudent = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json({"data": students});
});

//@desc Create new Student
//@route POST /api/students
//@access public
const createStudent = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);

  try {
    const { name, email, phone, date, grade, parent, id } = req.body;
    if (!name || !email || !phone || !date || !grade || !parent || !id ) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
  
    const student = await Student.create({
      name,
      date,
      email,
      phone,
      id,
      grade,
      parent,
    });
  
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});



/**
 * @desc Get profile of student by id
 * @route GET /api/student/:id
 * @return student object as response object
 */


const getStudentProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findOne({id});
    if (student) {
      res.status(200).json({"data": student});
    } else {
      res.status(404);
      throw new Error(`student with id ${id} not found`);
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

/**
 * @desc update students info
 * @route PUT /api/student/:id
 * @return student object as response object
 */
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const student = await Student.findOneAndUpdate({id}, updatedData, {new: true});
    if (student) {
      res.status(201).json(student);
    } else {
      res.status(404);
      throw new Error(`student with id ${id} not found`);

    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

/**
 * @desc delete students
 * @route DELETE /api/student/:id
 * @return student object as response object
 */
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findOneAndDelete({id});
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404);
      throw new Error(`student with id ${id} not found`);
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};


/**
 * @desc add scores for a student
 * @route  /api/student/:grade/:id
 * @return student object as response object
 */
const addScore = async (req, res) => {
  const { id, grade } = req.params;
  const result = req.body;

  try {

    for (const course in result) {
      const student = await Student.findOneAndUpdate({ id },
        { $set: { [`courses.0.${grade}.${course}`]: result[course] } },
        { new: true }
      );
      if (!student) {
        res.status(404);
        throw new Error(`student with id ${id} not found`);
      }
    }
    res.status(201).json(student);
  } catch (error) {
    return res.json(error);
  }
}

module.exports = {
    getStudent,
    createStudent,
    getStudentProfile,
    updateStudent,
    deleteStudent,
    addScore
};