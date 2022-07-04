const pool = require("../../db")

const list = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM votes`);
    if(!result.length) {
        await pool.query("INSERT INTO votes VALUES ()")
        const [data] = await pool.query(`SELECT * FROM votes`);
        res.send(data)
    }
    res.send(result);
}

const current = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM votes ORDER BY voteIdx DESC LIMIT 1;");
    const {voteIdx} = result
    const [proposals] = await pool.query(`SELECT * FROM proposals WHERE voteIdx=${voteIdx}`)
    res.json({voteIdx, proposals})
}

const addAction = async (req,res) => {
    const data = [...req.body];
    console.log(data)
    await pool.query(`INSERT INTO proposals(proposalId, proposalContent ,voteIdx, voteCount) VALUES (?, ?, ?, 0)`,data)
}

const resetAction = async (req, res) => {
    const [result] =  await pool.query("INSERT INTO votes VALUES ()");
    res.send(result.insertId)
}

module.exports = {
    list,
    current,
    addAction,
    resetAction
}