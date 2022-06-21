const express = require("express");
const router = express.Router();
const apiController = require("./api.controller.js")

router.post("/getBtk",apiController.getBtk)
router.post("/sellBtk",apiController.sellBtk)
router.post("/stakeNFTs",apiController.stakeNFTs)
router.post("/unstakeNFTs",apiController.unstakeNFTs)

router.post("/sendGetBtk",apiController.sendGetBtk)

module.exports = router