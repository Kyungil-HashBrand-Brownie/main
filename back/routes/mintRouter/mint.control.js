const pool = require('../../db')

const whitelist = async (req, res) => {

}

const whitelistPost = async (req, res) => {
    const publicKey = req.body.data
    console.log(publicKey)
    const publicKeys = await pool.query(`SELECT * FROM users WHERE publicKey = '${publicKey}'`)
    console.log(publicKeys)
    if (publicKeys[0].length === 0) {
        console.log('Not PublicKey!')
        console.log('----------------------')
        const [result] = await pool.query(`INSERT INTO users(publicKey)VALUES('${publicKey}')`)
        res.send('Success!')

    } else {
        console.log('PublicKey is true')
        console.log('----------------------')
        res.send('failed')
    }
}

module.exports = {
    whitelist,
    whitelistPost
}