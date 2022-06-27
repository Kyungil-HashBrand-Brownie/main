const pool = require('../../db')
const fs = require('fs')

const { getFileStream } = require('./s3')

const imagesKey = (req, res) => {
    console.log('images')
    console.log(req.params)
    const key = req.params.Key
    const readStream = getFileStream(key)

    readStream.pipe(res)
}

const images = async (req, res) => {
    let { myBrownyNFTs, stakedNFTs } = req.body
    console.log(req.body)

    const result = await pool.query('select * from BrownyImg')
    console.log(result)
    let resd = myBrownyNFTs.map((item) => result[0].find((id) => id.imgNum == item))
    console.log('resd : ', resd)
    let ress = stakedNFTs.map((item) => result[0].find((id) => id.imgNum == item))
    let data = {};
    let data1 = {};
    resd.forEach((item) => {
        data[item.imgNum] = item.images
    })
    ress.forEach((item) => {
        data1[item.imgNum] = item.images
    })
    // console.log('data: ', data);
    res.send({ data, data1 })
}

module.exports = {
    imagesKey,
    images
}
