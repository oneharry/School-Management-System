const express = require('express')
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({message: "get all students"})
})

router.route('/').post((req, res) => {
    res.status(200).json({message: "Add student to db"})
})


module.exports = router