const express = require("express");
const router = express.Router();
const pool = require('../db')


router.get("/whitelist", async (req, res) => {
    //db에 있는 화이트 리스트 배열로 뿌려주기
})

router.post("/whitelist", async (req, res) => {
    //화이트리스트 db에 추가(중복검사할것)
    const publicKey = req.body.data.from
    const isValid = req.body.data.status
    console.log(publicKey)
    const publicKeys = await pool.query(`SELECT * FROM users WHERE publicKey = '${publicKey}'`)
    console.log(publicKeys)
    if (publicKeys[0].length === 0) {
        console.log('Not PublicKey!')
        console.log('----------------------')
        await pool.query(`INSERT INTO users(publicKey, status)VALUES('${publicKey}', '${isValid}')`)
        res.send('Success!')
    } else {
        console.log('PublicKey is true')
        console.log('----------------------')
        res.send('failed')
    }
})

router.post("/deletelist", async (req, res) => {
    //화이트리스트 db에서 삭제
    const publicKey = req.body.data.from
    const isValid = req.body.data.status
    if (isValid === true) {
        console.log('PublicKey!')
        await pool.query(`DELETE FROM users where publicKey = '${publicKey}'`)
        res.send('Success!')
    } else {
        console.log('PublicKey is false')
        console.log('----------------------')
        res.send('failed')
    }
})

module.exports = router;