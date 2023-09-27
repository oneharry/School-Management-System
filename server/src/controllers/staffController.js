const Staff = require("../models/staffModel");

/**
 * @desc Get all staff
 * @route GET /api/staff
 * @return array of staff as response object
 */
const getStaff = async (req, res) => {
  const staff = await Staff.find();
  res.status(200).json(staff);
};

/**
 * @desc Create a new staff
 * @route POST /api/staff
 * @return array of staff as response object
 */
const createStaff = async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone, id, specialty } = req.body;
  if (!name || !email || !phone || !specialty || !id) {
    return res.status(400).json({"status": "failure", "msg": "All fields are mandatory !"});
  }

  const staff = await Staff.create({
    name,
    email,
    phone,
    specialty,
    id,
  });
  res.status(201).json(staff);
};


module.exports = {
    getStaff,
    createStaff,
  };