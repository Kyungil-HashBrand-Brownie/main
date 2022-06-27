const express = require('express')
const router = express.Router();
const mintRouter = require('./mintRouter')
const imageRouter = require('./imageRouter')

router.use('/white', mintRouter)

router.use('/image', imageRouter)

module.exports = router