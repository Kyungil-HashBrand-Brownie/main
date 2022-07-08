CREATE TABLE preProposals (  
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `proposalTitle` VARCHAR(255) NOT NULL,
    `proposalContent` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL
);