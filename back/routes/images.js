const express = require("express");
const router = express.Router();
const pool = require('../db')
const fs = require('fs')

const { getFileStream } = require('./s3')

router.get('/images/:Key', (req, res) => {
    console.log(req.params)
    const key = req.params.Key
    const readStream = getFileStream(key)

    readStream.pipe(res)
})

router.post('/images', async (req, res) => {
    let bq = req.body
    console.log(bq)

    const result = await pool.query('select * from BrownyImg')
    console.log(result)
    let resd = bq.map((item) => result[0].find((id) => id.imgNum == item))
    console.log('resd : ', resd)
    let data = {};
    resd.forEach((item) => {
        data[item.imgNum] = item.images
    })
    console.log('data: ', data);
    res.send(data)
})

module.exports = router;