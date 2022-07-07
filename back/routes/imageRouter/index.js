const express = require('express')
const router = express.Router()
const imagesController = require('./images.control')

router.get('/images/:Key', imagesController.imagesKey)

router.post('/images', imagesController.images)

router.get('/images', imagesController.allImages)

router.get('/api/image/:edi', imagesController.getImage)

module.exports = router