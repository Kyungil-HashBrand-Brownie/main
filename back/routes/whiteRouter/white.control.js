const { json } = require('body-parser')
const pool = require('../../db')

const whitelist = async (req, res) => {
    //db에 있는 화이트 리스트 배열로 뿌려주기
    const list = await pool.query(`SELECT * FROM whitelist`)
    res.json(list[0])
    console.log(list[0])
}

const whitelistPost = async (req, res) => {
    const publicKey = req.body.data.from

    console.log('JSON.stringify(publicKey)', publicKey)
    const publicKeys = await pool.query(`SELECT * FROM whitelist WHERE publicKey = '${publicKey}'`)
    console.log(publicKeys)
    if (publicKeys[0].length === 0) {
        console.log('Not PublicKey!')
        console.log('----------------------')
        const [result] = await pool.query(`INSERT INTO whitelist(publicKey)VALUES('${publicKey}')`)
        res.send('Success!')

    } else {
        console.log('PublicKey is true')
        console.log('----------------------')
        res.send('failed')
    }
}

const deletelist = async (req, res) => {
    //화이트리스트 db에서 삭제
    const publicKey = req.body.data.from
    const isValid = req.body.data.status
    if (isValid === true) {
        console.log('PublicKey!')
        await pool.query(`DELETE FROM whitelist where publicKey = '${publicKey}'`)
        res.send('Success!')
    } else {
        console.log('PublicKey is false')
        console.log('----------------------')
        res.send('failed')
    }
}

const deleteSelectedList = async (req, res) => {
    //화이트리스트 db에서 여러개 삭제
    const publicKeys = req.body
    publicKeys.forEach(async (publicKey)=> {
        await pool.query(`DELETE FROM whitelist where publicKey = '${publicKey}'`)
    })
    res.send('Success!')
}

module.exports = {
    whitelist,
    whitelistPost,
    deletelist,
    deleteSelectedList
}