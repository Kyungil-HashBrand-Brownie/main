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
            res.send(true)
        }
        else {
            console.log("DB에 이미 유저정보 존재")
            res.send(true)
        }
    }
    catch(e) {
        console.log(e);
        res.send(false)
    }
}

const view = async (req, res)=> {
    const {publicKey} = req.body;
    try {
        const [[result]] = await pool.query(`SELECT nickname FROM users where publicKey="${publicKey}"`);
        const {nickname} = result;
        res.send(nickname);
    }
    catch(e) {
        console.log(e);
        res.send(false)
    }
}

const modify = async (req, res)=> {
    const {publicKey, nickname} = req.body;
    const [result] = await pool.query(`UPDATE users SET nickname='${nickname}' WHERE publicKey="${publicKey}"`)
    console.log(result)
}

module.exports = { add, view, modify}