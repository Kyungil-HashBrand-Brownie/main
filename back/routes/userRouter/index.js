const express = require('express')
const router = express.Router()
const userController = require('./user.control')

router.post('/add', userController.add)

router.post('/view', userController.view)

router.post('/modify', userController.modify)

module.exports = router