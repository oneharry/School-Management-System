const User = require('../models/userModel');


/**
 * isUserExist - Checks if a user to be registered exists.
 * @param  req - request object
 * @param {*} res - response object
 * @param {*} next - next function
 */
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