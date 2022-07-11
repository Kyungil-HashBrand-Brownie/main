CREATE TABLE voteCommunity (  
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `proposals` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL
);