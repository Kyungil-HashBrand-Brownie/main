const express = require('express');
const router = express.Router();
const communityController = require('./community.control');


router.get('/view',communityController.view);

router.post('/write',communityController.writeAction);

router.post('/voteWrite',communityController.voteWriteAction);

router.post('/upload',communityController.uploadAction)

module.exports = router;