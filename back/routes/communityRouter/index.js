const express = require('express');
const router = express.Router();
const communityController = require('./community.control');


router.get('/view/:type',communityController.view);

router.get('/read/:type/:idx', communityController.read)

router.post('/write',communityController.writeAction);

router.post('/voteWrite',communityController.voteWriteAction);

router.post('/approve',communityController.approveAction);

router.get('/endVote', communityController.endVote)

router.post('/vote', communityController.voteAction)

module.exports = router;