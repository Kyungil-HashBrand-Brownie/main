const express = require('express')
const router = express.Router()
const voteController = require('./vote.control')

router.get('/list', voteController.list);

router.get('/current', voteController.current);

router.post('/add', voteController.addAction);

router.post('/end', voteController.endAction);

router.post('/reset', voteController.resetAction);

router.put('/subject', voteController.modifyAction);

module.exports = router