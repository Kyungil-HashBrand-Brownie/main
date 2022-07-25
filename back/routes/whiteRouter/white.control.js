const pool = require('../../db')

const getWhitelist = async (req, res) => {
    
    const list = await pool.query(`SELECT * FROM whitelist`);
    res.json(list[0]);
    console.log(list[0]);
}

const addWhitelist = async (req, res) => {
    const publicKey = req.body.data.from;

    const [data] = await pool.query(`SELECT * FROM whitelist WHERE publicKey = '${publicKey}'`);
    if (data.length === 0) {
        console.log('Not PublicKey!')
        console.log('----------------------')
        const [result] = await pool.query(`INSERT INTO whitelist(publicKey)VALUES('${publicKey}')`)
        res.send('success');

    } else {
        console.log('PublicKey is true')
        console.log('----------------------')
        res.send('fail');
    }
}


const deleteSelectedList = async (req, res) => {
    //화이트리스트 db에서 여러개 삭제
    const publicKeys = req.body;
    publicKeys.forEach(async (publicKey)=> {
        await pool.query(`DELETE FROM whitelist where publicKey = '${publicKey}'`);
    })
    res.send('success');
}

module.exports = {
    getWhitelist,
    addWhitelist,
    deleteSelectedList
}