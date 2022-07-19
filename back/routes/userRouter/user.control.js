const pool = require("../../db");

const add = async (req, res)=> {
    const {publicKey} = req.body;
    try{
        const [result] = await pool.query(`
            INSERT INTO users (publicKey) 
                SELECT "${publicKey}" FROM DUAL
            WHERE NOT EXISTS 
                (SELECT publicKey FROM users WHERE publicKey="${publicKey}");
        `)
        if(result.affectedRows) {
            console.log("DB에 유저정보 추가")
            res.send("success")
        }
        else {
            console.log("DB에 이미 유저정보 존재")
            res.send("exits")
        }
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const view = async (req, res)=> {
    const {publicKey} = req.body;
    try {
        const [[result]] = await pool.query(`SELECT nickname FROM users where publicKey="${publicKey}"`);
        if(result) {
            const {nickname} = result;
            res.send(nickname);
        }
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}


const modify = async (req, res)=> {
    const {publicKey, nickname} = req.body;
    try{
        const [[check]] = await pool.query(`SELECT nickname FROM users where nickname="${nickname}"`);
        if(check) return res.send("nickname already exists")
        else {
            const [result] = await pool.query(`UPDATE users SET nickname='${nickname}' WHERE publicKey="${publicKey}"`)
            console.log(result)
            res.send("success")
        }
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

module.exports = { add, view, modify}