const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const User = require('../models/userModel');
const bcrypt = require("bcrypt");
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
    const designation = "student";
    const { name, email, phone, date, grade, parent, studentid, password } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !date ||
      !grade ||
      !parent ||
      !studentid ||
      !password
    ) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    const student = await Student.create({
      name,
      date,
      email,
      phone,
      studentid,
      grade,
      parent
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
      designation
    });

    console.log(`User created ${user}`);
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
    const student = await Student.findOne({ _id: id });
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
    const student = await Student.findOneAndUpdate({ _id: id }, updatedData, {new: true});
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
    const student = await Student.findOneAndDelete({ _id: id });
    const email = student.email;
    const user = await User.findOneAndDelete({ email });
    if (student) {
      console.log(`${email} deleted from user`);
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
  console.log("result", req.params)

  try {
    const updateObject = {
      $set: {},
    };

    for (const course in result) {
      const courseResult = result[course];
      updateObject.$set[`courses.0.${grade}.${course}`] = courseResult;
    }

    const updatedStudent = await Student.findOneAndUpdate({ studentid: id },
      updateObject,
      { new: true }
    );

    if (!updateStudent) {
      throw new Error(`student with id ${id} is not found`)
    }
    res.status(201).json(updatedStudent);
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