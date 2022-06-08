const express = require("express");
const router = express.Router();
const mintRouter  = require("./mint")

router.use("/mint",mintRouter)

module.exports = router;