const Parent = require("../models/parentModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


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

  const designation = "parent";
  const { name, email, phone, parentid } = req.body;
  try {
    if (!name || !email || !phone || !parentid) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    const parent = await Parent.create({
      name,
      email,
      phone,
      parentid,
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
      designation
    });

    console.log(`User created ${user}`);
  
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