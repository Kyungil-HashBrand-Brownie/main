const mysql = require('mysql');

require('dotenv').config({ path: __dirname + '/.env' });

const dbConf = {
    host: "34.64.220.251"//process.env.HOST
    ,port: "3306"//process.env.PORT
    ,user: "root"//process.env.USERS
    ,password: "1234"//process.env.PASSWORD
    ,database: "GCP_SQL"//process.env.DB
    
    ,commitLimit: 100//process.env.COMMITLIMIT
}

const con = mysql.createPool(dbConf);
console.log("Connect Info Check.. ")
console.log("dotenv check -> __dirname :", __dirname);
console.log("HOST", process.env.HOST);
console.log("PORT", process.env.PORT);
console.log("USERS", process.env.USERS);
console.log("PASSWORD", process.env.PASSWORD);
console.log("DATABASE", process.env.DB);
console.log("");
if(process.env.HOST == undefined 
    || process.env.PORT == undefined 
    || process.env.USERS == undefined 
    || process.env.PASSWORD == undefined 
    || process.env.DB == undefined ) {setTimeout(()=>{console.log("!!!!!!!!!! --------->>>>>>>> Check dotenv Please <<<<<<<<<<--------- !!!!!!!!!!!\n")},15000 )}

const getConn = function(callback) {
    con.getConnection((err, connection) => {
        if(err) {console.error(err)}
        if(!err){
            // console.log("\n\nConnection Success..\n\n");
            callback(connection);
        }
    });
};

getConn;

module.exports = getConn;