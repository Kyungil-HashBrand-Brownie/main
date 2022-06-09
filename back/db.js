const mysql = require("mysql2/promise"); // object

const pool = mysql.createPool({
    host: "34.64.220.251",
    user: "root",
    password: "1234",
    database: "GCP_SQL",
});

module.exports = pool