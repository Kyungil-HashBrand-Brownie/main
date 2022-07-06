const express = require('express')
const router = express.Router()
const userController = require('./user.control')

router.post('/add', userController.add)

router.post('/modify', userController.modify)


module.exports = router