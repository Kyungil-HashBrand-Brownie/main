const express = require('express')
const router = express.Router()
const mintController = require('./mint.control')

router.get('/whitelist', mintController.whitelist)

router.post('/whitelist', mintController.whitelistPost)

module.exports = router