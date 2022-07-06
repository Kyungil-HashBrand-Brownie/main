CREATE TABLE users(  
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `publicKey` VARCHAR(255) NOT NULL,
    `nickName` VARCHAR(255) DEFAULT "nickname" NOT NULL
);

select * from users;

INSERT IGNORE INTO users(publicKey) VALUES ("key");

INSERT INTO users (publicKey) 
	SELECT "${publicKey}" FROM DUAL -- 넣을 값
WHERE NOT EXISTS 
	(SELECT publicKey FROM users WHERE publicKey="${publicKey}"); -- 들어있는지 확인하는 값

drop table users;