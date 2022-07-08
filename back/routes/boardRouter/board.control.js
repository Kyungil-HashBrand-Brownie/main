const pool = require("../../db")

const view = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM preProposals;")
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const writeAction = () => {
    const data = Object.values(req.body); // [...req.body]가 안먹혀서 [proposalTitle, proposalContent, nickname]로 바꾸기 위해
    try {
        const [result] = await pool.query(`INSERT INTO preProposals(proposalTitle, proposalContent, nickname) VALUES (?,?,?)`,data)
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

module.exports = {view, writeAction};