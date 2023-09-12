const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the student name"],
    },
    email: {
      type: String,
      required: [true, "Please add the student email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the student phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);