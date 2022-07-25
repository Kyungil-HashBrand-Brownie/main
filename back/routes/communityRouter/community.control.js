const pool = require("../../db")

const view = async (req, res) => {
    const {type} = req.params;
    if(type === "vote") {
        try {
            const [result] = await pool.query("SELECT * FROM voteCommunity;")
            result.reverse()
            const data = []
            for(let i=0; i< result.length/2; i++){
                let coupledArr = result.slice(i*2, (i*2)+2)
                if (coupledArr.length == 1) {
                    coupledArr.push({title: '', content:'', nickname: '', state: ''})
                }
                data.push(coupledArr)
            }
            res.send(data);
        }
        catch(e) {
            console.log(e);
            res.send("fail")
        }
    }
}

const read = async (req, res) => {
    const {type, idx} = req.params;
    console.log(type)
    if(type === "vote") {
        try {
            const [[result]] = await pool.query(`SELECT * FROM voteCommunity WHERE idx=${idx};`);
            result.proposals = JSON.parse(result.proposals);
            res.send(result);
        }
        catch(e) {
            console.log(e);
            res.send("fail")
        }
    }
}

const voteWriteAction = async (req, res) => {
    const {title, content, proposals, nickname, myImage} = req.body;
    const data = [title, content, JSON.stringify(proposals), nickname, myImage]
    try {
        const [result] = await pool.query(`INSERT INTO voteCommunity(title, content, proposals, nickname, imgURI) VALUES (?,?,?,?,?)`,data)
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const approveAction = async (req, res) => {
    const {title, content, proposals, id, state} = req.body;
    const voteCounts = Array(proposals.length).fill(0);
    const data = [title, content, JSON.stringify(proposals), state, JSON.stringify(voteCounts), id];
    try {
        const [result] = await pool.query(`UPDATE voteCommunity SET title = (?), content = (?), proposals = (?), state = (?), voteCounts=(?) WHERE idx=(?)`, data);
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail");
    }
}

const voteAction = async (req, res) => {
    const {currentProposal, votingPower} = req.body;
    try {
        const [[result]] = await pool.query(`SELECT voteCounts FROM voteCommunity WHERE state="투표 진행 중";`);
        const countsArr = JSON.parse(result.voteCounts);
        console.log(countsArr);
        countsArr[Number(currentProposal)-1] += Number(votingPower);
        console.log("vote Count updated!",countsArr);
        const newData = JSON.stringify(countsArr);

        const [data] = await pool.query(`UPDATE voteCommunity SET voteCounts="${newData}" WHERE state="투표 진행 중"`);
        res.send(success);
    }
    catch(e) {
        console.log(e);
        res.send("fail");
    }
}

const endVote = async (req, res) => {
    try {
        const [[result]] = await pool.query(`SELECT proposals, voteCounts FROM voteCommunity WHERE state="투표 진행 중";`);
        const countsArr = JSON.parse(result.voteCounts);
        const proposalsArr = JSON.parse(result.proposals);
        const selectedProposalIdx = countsArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
        const selectedProposal = proposalsArr[selectedProposalIdx];

        await pool.query(`UPDATE voteCommunity SET state = "투표 종료", selectedProposal="${selectedProposal}" WHERE state="투표 진행 중"`)
        res.send("success");
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}


module.exports = {
    view,
    voteWriteAction,
    read,
    approveAction,
    endVote,
    voteAction
    };