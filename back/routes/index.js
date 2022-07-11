const express = require('express');
const router = express.Router();
const whiteRouter = require('./whiteRouter');
const imageRouter = require('./imageRouter');
const voteRouter = require('./voteRouter');
const userRouter = require('./userRouter');
const communityRouter = require('./communityRouter');

router.use('/white', whiteRouter);

router.use('/image', imageRouter);

router.use('/vote', voteRouter);

router.use('/user', userRouter);

router.use('/community', communityRouter);

module.exports = router;