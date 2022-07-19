const pool = require('../../db')
const fs = require('fs')

const { getFileStream } = require('./s3')

const imagesKey = (req, res) => {
    // console.log('images')
    // console.log(req.params)
    const key = req.params.Key
    const readStream = getFileStream(key)

    readStream.pipe(res)
}

const images = async (req, res) => {
    let { myBrownyNFTs, stakedNFTs } = req.body
    let data = stakedNFTs !== undefined ? myBrownyNFTs.concat(stakedNFTs) : myBrownyNFTs;
    //더미데이터 컨트렉트 재구성시 다시 설정해야함
    const result = await pool.query('select * from BrownyTable')
    data = data.map((item) => result[0].find( id => id.edition == parseInt(item) + 1))
                .map((item) => {
                    return {
                        id: item.edition-1, 
                        addr: item.addr}
                })
    res.send(data);
}

const allImages = async (req, res) => {
    const result = await pool.query('select * from BrownyTable')
    const data = result[0];
    res.send(data)
}

const getImage = async (req, res) => {
    console.log(req.query);
    console.log('params: ', req.params);
    const { edi } = req.params;
    const result = await pool.query(`select * from BrownyTable where edition=${edi}`)
    const data = result[0];
    console.log('data: ', data);
    res.send(data)

}

module.exports = {
    imagesKey,
    images,
    allImages,
    getImage,
}
