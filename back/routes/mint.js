const express = require("express");
const router = express.Router();

const mintController = require("../controllers/mint.controller")

router.get("/whitelist",mintController.getWhitelist)
router.post("/whitelist",mintController.addWhitelist)

module.exports = router;