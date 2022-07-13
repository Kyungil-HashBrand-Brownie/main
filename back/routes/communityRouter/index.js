const express = require('express');
const router = express.Router();
const communityController = require('./community.control');


router.get('/view',communityController.view);

router.get('/read/:type/:idx', communityController.read)

router.post('/write',communityController.writeAction);

router.post('/voteWrite',communityController.voteWriteAction);

module.exports = router;