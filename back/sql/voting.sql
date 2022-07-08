use Browny;

CREATE TABLE votes(  
    `voteIdx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `selectedProposal` VARCHAR(255) DEFAULT "" NULL,
    `startDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `endDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE proposals(  
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `proposalId` INT NOT NULL,
    `proposalTitle` VARCHAR(255) NOT NULL,
    `proposalContent` VARCHAR(255) NOT NULL,
    `voteIdx` INT NOT NULL,
    `voteCount` INT DEFAULT 0 NOT NULL,
    FOREIGN KEY (`voteIdx`) REFERENCES votes(voteIdx)
);

drop table proposals;
drop table votes;

select * from votes;
select * from proposals;

SELECT * FROM votes ORDER BY voteIdx DESC LIMIT 1;


-- voting 페이지 렌더링할 때 현재 진행중인 voteIdx와 해당 voteIdx의 proposal 불러오기

-- 기본적으로 voteIdx 1 데이터 넣어야함(초기 렌더링할때 votes에 아무것도 없으면 넣기)

-- addProposal하면 컨트랙트 상에 proposal 추가하고 성공하면 proposals db에도 추가(voteIdx foreign key로 참조)

-- 투표시작하면 votes에 시작 날짜변경, 투표종료하면 뽑힌 proposal과 endDate수정

-- 투표리셋하면 votes에 새로운 row 추가하고 voteIdx는 새로운것 참조해야함 => proposals는 비운다