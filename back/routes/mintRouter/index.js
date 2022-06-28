const express = require('express')
const router = express.Router()
const mintController = require('./mint.control')

router.get('/whitelist', mintController.whitelist)

router.post('/whitelist', mintController.whitelistPost)

router.post('/deletelist', mintController.deletelist)

router.post('/deletelists', mintController.deleteSelectedList)

module.exports = router