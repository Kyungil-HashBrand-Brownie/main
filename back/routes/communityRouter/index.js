const express = require('express');
const router = express.Router();
const communityController = require('./community.control');


router.get('/view',communityController.view);

router.post('/write',communityController.writeAction);

module.exports = router;