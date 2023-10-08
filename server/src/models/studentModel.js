const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the student name"],
    },
    date: {
      type: String,
      required: [true, "Please add the student date of birth"],
    },
    email: {
      type: String,
      required: [true, "Please add the student email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the student phone number"],
    },
    studentid: {
      type: String,
      required: [true, "Please add the student ID"],
    },
    grade: {
      type: String,
      required: [true, "Please add the student class"],
    },
    parent: {
      type: String,
      required: [true, "Please add the student's parent name"],
    },
    courses: []
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);