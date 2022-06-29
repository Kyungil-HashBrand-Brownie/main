const express = require('express')
const router = express.Router()
const whiteController = require('./white.control')

router.get('/whitelist', whiteController.whitelist)

router.post('/whitelist', whiteController.whitelistPost)

router.post('/deletelist', whiteController.deletelist)

router.post('/deletelists', whiteController.deleteSelectedList)

module.exports = router