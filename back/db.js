const mysql = require("mysql2/promise"); // object

const pool = mysql.createPool({
    host: "northern-window-351900:asia-northeast3:mysqls",
    user: "root",
    password: "1234",
    database: "GCP_SQL",
});

module.exports = pool