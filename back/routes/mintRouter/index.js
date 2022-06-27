const express = require('express')
const router = express.Router()
const boardController = require('./board.control')
router.get('/list', boardController.list)

router.get('/view', boardController.view)

router.get('/update', boardController.update)

router.get('/write', boardController.write)

router.post('/write', boardController.writeAction)

module.exports = router