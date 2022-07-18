CREATE TABLE voteCommunity (
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `proposals` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) DEFAULT "승인 대기 중" NOT NULL,
    `voteCounts`INT DEFAULT "" NULL
);

CREATE TABLE community (
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL
);

select * from voteCommunity;
select * from community;