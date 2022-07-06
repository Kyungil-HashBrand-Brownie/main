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
            res.send(false)
        }
    }
    catch(e) {
        console.log(e);
        return e;
    }
}

const modify = async (req, res)=> {
    const {publicKey, nickName} = req.body;
    const [result] = await pool.query(`UPDATE users SET nickName='${nickName}' WHERE publicKey="${publicKey}"`)
    console.log(result)
}

module.exports = { add, modify}