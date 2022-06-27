const express = require('express')
const router = express.Router()
const mintController = require('./mint.control')

router.get('/whitelist', mintController.whitelist)

router.post('/writelist', mintController.writelistPost)

module.exports = router