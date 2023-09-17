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
  const { name, email, phone, date, grade, parent, id } = req.body;
  if (!name || !email || !phone || !date || !grade || !parent || !id ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }


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
  const { id } = req.params;
  try {
    const student = await Student.findOne({id});
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({"err": `student with id ${id} not found`});
    }
  } catch (error) {
    throw new Error('Error finding student');
  }

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
  try {
    const student = await Student.findOneAndUpdate({id}, updatedData, {new: true});
    if (student) {
      res.status(201).json(student);
    } else {
      res.status(404).json({"err": `student with id ${id} not found`});

    }
  } catch (error) {
    throw new Error('Error updating student');
  }
};

/**
 * @desc delete students
 * @route DELETE /api/student/:id
 * @return student object as response object
 */
const deleteStudent = async (req, res) => {
  console.log("The request body is :", req.body);
  const { id } = req.params;
  try {
    const student = await Student.findOneAndDelete({id});
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({"err": `student with id ${id} not found`});
    }
  } catch (error) {
    throw new Error('Error deleting student');
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
        return res.status(404).json({ error: `Student with id ${id} not found` });
      }
    }
    res.status(201).json({msg: "Result added successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'error scoring student' });
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