const pool = require("../../db")

const view = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM voteCommunity;")
        const data = []
        for(let i=0; i< result.length/2; i++){
            let coupledArr = result.slice(i*2, (i*2)+2)
            data.push(coupledArr)
        }
        console.log(data)
        res.send(data);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const writeAction = async (req, res) => {
    const data = Object.values(req.body);
    console.log(data)
    try {
        const [result] = await pool.query(`INSERT INTO community(title, content, nickname) VALUES (?,?,?)`,data)
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const voteWriteAction = async (req, res) => {
    const {title, content, proposals, nickname} = req.body;
    const data = [title, content, JSON.stringify(proposals), nickname]
    console.log(data)
    try {
        const [result] = await pool.query(`INSERT INTO voteCommunity(title, content, proposals, nickname) VALUES (?,?,?,?)`,data)
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}



module.exports = {
    view,
     writeAction,
     voteWriteAction
    };