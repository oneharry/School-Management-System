const mongoose = require("mongoose");

const parentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the parent name"],
    },
    email: {
      type: String,
      required: [true, "Please add the parent email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the parent phone number"],
    },
    parentid: {
        type: String,
        required: [true, "Please add the parent ID"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Parent", parentSchema);