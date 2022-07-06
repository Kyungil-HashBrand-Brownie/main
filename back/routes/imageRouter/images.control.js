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
    console.log(req.body);
    // console.log(req.body)
    //더미데이터 컨트렉트 재구성시 다시 설정해야함
    const result = await pool.query('select * from BrownyData')
    // console.log(result)
    let resd = myBrownyNFTs.map((item) => result[0].find((id) => id.edition == parseInt(item)+1))
    // console.log('resd : ', resd)
    let ress = stakedNFTs.map((item) => result[0].find((id) => id.edition == parseInt(item)+1))
    let data = {};
    let data1 = {};
    // console.log('resd: ', resd);
    // console.log('ress: ', ress);
    resd.forEach((item) => {
        data[item.edition-1] = item.addr
    })
    ress.forEach((item) => {
        data1[item.edition-1] = item.addr
    })
    // console.log(data);
    // console.log(data1);
    // console.log('data: ', data);
    res.send({ data, data1 })
}

const allImages = async (req, res) => {
    const result = await pool.query('select * from BrownyData')
    const data = result[0];
    res.send(data)
}

const getImage = async (req, res) => {
    console.log(req.query);
    console.log('params: ', req.params);
    const { edi } = req.params;
    const result = await pool.query(`select * from BrownyData where edition=${edi}`)
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
