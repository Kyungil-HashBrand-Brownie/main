const mysql = require("mysql2/promise"); // object
require('dotenv').config();

const user = process.env.AWS_USER
const host = process.env.AWS_HOST
const password = process.env.AWS_PASSWORD
const database = process.env.AWS_DATABASE
const pool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
});

module.exports = pool