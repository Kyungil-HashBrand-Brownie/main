const mysql = require("mysql2/promise"); // object

const pool = mysql.createPool({
    host: "3.39.193.150",
    user: "root",
    password: "1234",
    database: "GCP_SQL",
});

module.exports = pool