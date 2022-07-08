const express = require("express");
const app = express();
const router = require("./routes")
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api",router)

app.listen(4000, () => {
    console.log('server start 4000')
})

