const express = require("express");
const app = express();
const router = require("./routes")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())

app.use(router)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(4000, () => {
    console.log('server start 4000')
})