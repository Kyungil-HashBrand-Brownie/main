const express = require('express')
const router = express.Router();
const whiteRouter = require('./whiteRouter')
const imageRouter = require('./imageRouter')
const voteRouter = require('./voteRouter')

router.use('/white', whiteRouter)

router.use('/image', imageRouter)

router.use('/vote', voteRouter)

module.exports = router