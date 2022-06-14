/* 유저 정보 및 자산정보를 관리할 경우 DAO */
const dbConn = require("./dbconn");
//userKey = userid

/**
 * 유저 레벨: 확인, 계정추가(level: 1), 레벨업(level:지정레벨), 레벨다운(level:1, 코멘트)
 * methods: findAccount, addAccount, levelUp, levelDown
 */

/**
 * 스냅샷 이벤트용 (특정시간에 NFT를 보유하고있는 소유자address )를 특정시간에 DB에 저장
 * NFT를 최종 보유하고있는 소유자추적하는 로직 필요
 * 
 */
module.exports = {
    Dao: {

        /**
         * 전체 계정 불러오기
         * @returns 모든 계정
         */
        findAllAccount : async () => {
            return new Promise(  (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `SELECT id FROM user`; 
                        let sQuery = `Select * form user`;
                        conn.query(sQuery, (err, result, field) => { 
                            // console.log(err);
                            if(result[0]==undefined) return resolve("---Selected ID : none");
                            resolve(result[0]["id"]);
                            
                        }); 
                        conn.release();
                    } catch (err) { reject(console.error(err)); }
                })
            })
        },
        /**
         * @brief DB에서 계정을 조회하는 메소드
         * @param {*} address 계정 지갑키
         * @returns 
         */
        findAccount : async (address) => {
            return new Promise(  (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `SELECT id FROM users WHERE id='${userid}'`; 
                        let sQuery = `Select * form user where kaikas=${address}`;
                        conn.query(sQuery, (err, result, field) => { 
                            // console.log(err);
                            console.log("DAO-> query userid chk result  : ", JSON.stringify(result));
                            // console.log("DAO-> query userid chk result  : ", result[0]["count(*)"]);
                            if(result[0]==undefined) return resolve("---Selected ID : none");
                            resolve(result[0]["id"]);
                            
                        }); 
                        conn.release();
                    } catch (err) { reject(console.error(err)); }
                })
            })
        },

        /**
         * 계정찾기 (id, pw 사용)
         * @param {*} id 계정id
         * @param {*} pw 계정pw
         * @returns 
         */
        findAccount : async (id, pw) => {
            return new Promise(  (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `SELECT id FROM users WHERE id='${userid}'`; 
                        let sQuery = `Select * form user where kaikas=${address}`;
                        conn.query(sQuery, (err, result, field) => { 
                            
                            // console.log("DAO-> query userid chk result  : ", result[0]["count(*)"]);
                            if(result[0]==undefined) return resolve("---Selected ID : none");
                            resolve(result[0]["id"]);
                            
                        }); 
                        conn.release();
                    } catch (err) { reject(console.error(err)); }
                })
            })
        },
    
        addAccount: async (address)=> {
            return new Promise( (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `INSERT INTO user (kaikas, id, pw, level) VALUES ( '${userid}', "${hashpwd}", "${email}");`;
                        let sQuery = `Insert into user(${kaikas}, level) values ("${address}", 1)`;
                        conn.query(sQuery, (err, result, field) => {  resolve(result, field); 
                            console.log("adduser result:", result, field)
                        });
                        conn.release();
                    } catch (err) { console.error(err); }
                })
            })   
        }, 

        addAccount: async (id, pw)=> {
            return new Promise( (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `INSERT INTO user (kaikas, id, pw, level) VALUES ( '${userid}', "${hashpwd}", "${email}");`;
                        let sQuery = `Insert into user(${kaikas}, level) values ("${address}", 1)`;
                        conn.query(sQuery, (err, result, field) => {  resolve(result, field); 
                            console.log("adduser result:", result, field)
                        });
                        conn.release();
                    } catch (err) { console.error(err); }
                })
            })   
        }, 
        /**
         * @brief 계정의 레벨을 올리는 메소드
         * @param {*} address 
         * @param {*} level 
         * @returns 
         */
        levelUp: async (address, level)=> {
            return new Promise( (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `UPDATE user SET level = ${level} where kaikas=${address}`;
                        let sQuery = `UPDATE user SET level = ${level} where kaikas=${address}`;
                        conn.query(sQuery, (err, result, field) => {  resolve(result, field); 
                            console.log("Update User Level =>:", result)
                        });
                        conn.release();
                    } catch (err) { console.error(err); }
                })
            })   
        }, 

        /**
         * @brief 계정 권한을 회수하는 메소드
         * @param {*} address kaikas 주소
         * @param {*} comment 권한회수 이유
         * @returns 
         */
        levelDown: async (address,  comment)=> {
            return new Promise( (resolve, reject) => {
                getConn((conn) => {
                    try {
                        // let sQuery = `UPDATE user SET level = ${level} where kaikas=${address}`;
                        let sQuery = `UPDATE user SET level = 1 where kaikas=${address}`;
                        conn.query(sQuery, (err, result, field) => {  resolve(result, field); 
                            console.log("Update User Level =>:", result)
                        });
                        conn.release();
                    } catch (err) { console.error(err); }
                })
            })   
        }, 
    
        
    },
}