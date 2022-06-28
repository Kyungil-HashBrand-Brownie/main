const express = require('express')
const router = express.Router();
const whiteRouter = require('./whiteRouter')
const imageRouter = require('./imageRouter')

router.use('/white', whiteRouter)

router.use('/image', imageRouter)

module.exports = router