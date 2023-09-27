const Parent = require("../models/parentModel");

/**
 * @desc Get all parents
 * @route GET /api/parents
 * @return array of parents as response object
 */
const getParent = async (req, res) => {
  const parent = await Parent.find();
  res.status(200).json({"data": parent});
};

/**
 * @desc Create a new parent
 * @route POST /api/parent
 * @return array of parent as response object
 */
const createParent = async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
  
    const parent = await Parent.create({
      name,
      email,
      phone,
      id,
    });
  
    res.status(201).json(parent);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};


module.exports = {
    getParent,
    createParent,
  };