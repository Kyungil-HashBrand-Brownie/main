const express = require('express');
const router = express.Router();
const boardController = require('./board.control');


router.get('/view',boardController.view);

router.post('/write',boardController.writeAction);