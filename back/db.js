const mysql = require("mysql2/promise"); // object

const pool = mysql.createPool({
    host: "52.79.194.50",
    user: "root",
    password: "1234",
    database: "GCP_SQL",
});

module.exports = pool