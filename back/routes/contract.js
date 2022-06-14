const express = require("express");
const router = express.Router();

/**
* URL을 통한 contract method 콜 
* ps: 별도의 비지니스로직 필요
*/
const capi = require("./utils/apiContract/api.js");


router.get("/api/isWhitelisted", (req, res)=>{
    let useraddr; //유저 지갑주소 받아오기
    let result = capi.isWhitelisted(useraddr)
    
    res.json("ok");
})


router.get("/api/batchMint", async (req, res)=>{
    let amount; // 발행받을 갯수 받아오기
    let result = await capi.batchMint(amount)
    
    res.json("ok");
})


router.get("/api/mintforWhitelist", async (req, res)=>{
    let amount; // 발행받을 갯수 받아오기
    let result = await capi.whitelistMint(amount);
    
    res.json({result:"ok"})
})

router.get("/api/addWhiltlist", async (req, res)=>{
    let address; //등록할 유저 지갑주소 받아오기
    let result = await add(address);
    
    res.json({result:"ok"})    
})

router.get("/api/removeWhitelistUser", async (req, res)=>{
    let address; //등록할 유저 지갑주소 받아오기
    let result = await remove(address);
    
    res.json({result:"ok"})    
})

router.get("/api/exitInvest", (req, res)=>{
    if("auth"=="ok"){
        let balance; //출금할 금액 
        let result = await widthdraw(balance);

        res.json({result:"ok"})   
    }
})

router.get("/api/getBtk", (req, res)=>{
        let amount; //출금할 금액 
        let result = await capi.getBtk(amount);

        res.json({result:"ok"})   
})

router.get("/api/stake", (req, res)=>{
        let tokenId; //
        let result = await capi.getBtk(tokenId);

        res.json({result:"ok"})   
})

router.get("/api/unstake", (req, res)=>{
        let tokenId; //토큰 
        let result = await capi.unstake(tokenId);

        res.json({result:"ok"})   
})

module.exports = router;