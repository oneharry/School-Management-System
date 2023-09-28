const User = require('../models/userModel');

const isUserExist = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
        next();
    } else {
        res.status(401).json({"msg": `${email} is not a registered user`});
    }
}

module.exports = { isUserExist };