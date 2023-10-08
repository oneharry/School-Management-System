const Student = require('../models/studentModel');
const Staff = require('../models/staffModel');
const Parent = require('../models/parentModel');
const { currentUser } = require('../controllers/userController');



/**
 * @desc Middleware gives write access to personalized resources to staff
 *  only staff has access to write actions: POST, PUT, DELETE
 * @return Passes action to next function
 */
const writeAccess = async (req, res, next) => {
    const { email } = req.user;

    const staff = await Staff.findOne({ email });
    if (staff) {
        next();
    } else {
        res.status(401).json({"msg": "You don't have write access"});
    }
}


/**
 * @desc Middleware gives read access to personalized resources to users: staff, students and parents
 *  checks the category of users
 *  all staff has access to the resources
 *  students have read access to their personal resources by their id
 *  parents only have access to resources of their child(student)
 * @return Passes action to next function
 */
const readAccess = async (req, res, next) => {
    const { email } = req.user;
    const { studentid } = req.params;

    const staff = await Staff.findOne({ email });
    const student = await Student.findOne({ email });
    const parent = await Parent.findOne({ email });

    let parentChild;

    if (parent) {
        parentChild = await Student.findOne({ parent: parent.name, id });
    }

    if (staff || (student && (studentid == student.studentid)) || parentChild) {
        next();
    } else {
        res.status(401).json({"msg": "You don't have read access to this resources"});
    }
}



module.exports = {
    writeAccess,
    readAccess
}