const pool = require("../../db")

const list = async (req, res) => {
    try{const tQuery = `SELECT voteIdx, selectedProposal, date_format(startDate, '%Y-%m-%d %H:%i') startDate, date_format(endDate, '%Y-%m-%d %H:%i') endDate FROM votes`
        const [result] = await pool.query(tQuery);
        if(!result.length) {
            await pool.query("INSERT INTO votes VALUES ()")
            const [data] = await pool.query(tQuery);
            return res.send(data)
        }
        res.send(result);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
    
}

const current = async (req, res) => {
    try {
        const [[result]] = await pool.query("SELECT * FROM votes ORDER BY voteIdx DESC LIMIT 1;");
        const {voteIdx} = result
        const [proposals] = await pool.query(`SELECT * FROM proposals WHERE voteIdx=${voteIdx}`)
        res.json({voteIdx, proposals})
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
}

const addAction = async (req,res) => {
    try {
        // object에서 value만 array로 
        const data = Object.values(req.body)
        console.log(data) // [proposalId value, proposalTitle value, proposalContent value ,voteIdx value]
        const result = await pool.query(`INSERT INTO proposals(proposalId, proposalTitle, proposalContent ,voteIdx, voteCount) VALUES (?, ?, ?, ?, 0)`, data);
        res.send(result)
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
}

const endAction = async (req, res) => {
    try {
        const {voteIdx, selectedProposalId} = req.body;
        console.log(voteIdx, selectedProposalId)
        const [[data]] = await pool.query(`SELECT proposalContent FROM proposals WHERE voteIdx="${voteIdx}"and proposalId="${selectedProposalId}" `)
        console.log(data)
        const selectedProposal = data.proposalContent
        console.log(selectedProposal)
        await pool.query(`UPDATE votes SET selectedProposal='${selectedProposal}', endDate=now() WHERE voteIdx="${voteIdx}"`)
        res.send(selectedProposal)
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
    
}


const resetAction = async (req, res) => {
    try {
        const [result] =  await pool.query("INSERT INTO votes VALUES ()");
        res.send(result.insertId.toString())
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports = {
    list,
    current,
    addAction,
    endAction,
    resetAction
}