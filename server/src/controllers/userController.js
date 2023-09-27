const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register/
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, designation } = req.body;
 
  if (!username || !email || !password || !designation) {
    return res.status(400).json({ "message": "All fields are mandatory!"});
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return res.status(400).json({ "message": "User already registered!"});
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    designation
  });

  console.log(`User created ${user}`);
  if (user) {
    return res.status(201).json({ _id: user.id, email: user.email });
  } else {
    return res.status(400).json({ "message": "User data is not valid"});
  }
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ "messsage":"All fields are mandatory!" });
  }
  const user = await User.findOne({ email });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(201).json({ accessToken, user });
  } else {
    return res.status(401).json({ "message": "email or password is not valid"});
  }
});


//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser};