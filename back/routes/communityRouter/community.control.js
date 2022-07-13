const pool = require("../../db");
const multer = require("multer");
const path = require('path');

const view = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM voteCommunity;")
        const data = []
        for(let i=0; i< result.length/2; i++){
            let coupledArr = result.slice(i*2, (i*2)+2)
            if (coupledArr.length == 1) {
                coupledArr.push({title: '', content:'', nickname: '', state: ''})
            }
            data.push(coupledArr)
        }
        console.log(data)
        res.send(data);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const writeAction = async (req, res) => {
    const data = Object.values(req.body);
    console.log(data)
    try {
        const [result] = await pool.query(`INSERT INTO community(title, content, nickname) VALUES (?,?,?)`,data)
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const voteWriteAction = async (req, res) => {
    const {title, content, proposals, nickname} = req.body;
    const data = [title, content, JSON.stringify(proposals), nickname]
    console.log(data)
    try {
        const [result] = await pool.query(`INSERT INTO voteCommunity(title, content, proposals, nickname) VALUES (?,?,?,?)`,data)
        res.send(result);
    }
    catch(e) {
        console.log(e);
        res.send("fail")
    }
}

const uploadAction = async () => {
    const storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './public/images/')     // './public/images/' directory name where save the file
        },
        filename: (req, file, callBack) => {
            callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })

    const upload = multer({
        storage:storage
    });
}

app.post("/upload", upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
        var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }
});



module.exports = {
    view,
     writeAction,
     voteWriteAction,
     uploadAction
    };