const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the staff name"],
    },
    email: {
      type: String,
      required: [true, "Please add the staff email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the staff phone number"],
    },
    specialty: {
        type: String,
        required: [true, "Please add the staff specialty"],
    },
    staffid: {
        type: String,
        required: [true, "Please add the staff ID"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);