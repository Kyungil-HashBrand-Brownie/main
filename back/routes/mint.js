const express = require("express");
const router = express.Router();
const pool = require('../db')


router.get("/whitelist", (req, res) => {
    //db에 있는 화이트 리스트 배열로 뿌려주기
})

router.post("/whitelist", (req, res) => {
    //화이트리스트 db에 추가(중복검사할것)
})

module.exports = router;