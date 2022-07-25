const express = require('express');
const router = express.Router();
const whiteController = require('./white.control');

router.get('/whitelist', whiteController.getWhitelist);

router.post('/whitelist', whiteController.addWhitelist);

router.post('/deletelists', whiteController.deleteSelectedList);

module.exports = router