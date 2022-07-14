use Browny;

CREATE TABLE votes(  
    `voteIdx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `voteSubject` VARCHAR(255) DEFAULT "" NULL, -- 투표 주제 ex) 화이트리스트 수 변경에 대한 투표
    `voteContent` VARCHAR(255) NOT NULL, 
    `selectedProposal` VARCHAR(255) DEFAULT "" NULL, -- 투표 종료 후 최종 선택 된 안건
    `startDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `endDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `totalCount`INT DEFAULT 0 NULL -- 투표에 행사된 총 투표권 수
);

CREATE TABLE proposals(  
    `idx` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `proposalId` INT NOT NULL, -- 해당 투표에서 가지는 안건의 기호번호 (1번부터 시작)
    `proposalLabel` VARCHAR(255) NOT NULL, -- 각 안건 ex) 화이트리스트 50으로 증가
    `voteIdx` INT NOT NULL, -- 안건이 발의된 투표의 idx
    `voteCount` INT DEFAULT 0 NOT NULL, -- 안건에 투표한 수
    FOREIGN KEY (`voteIdx`) REFERENCES votes(voteIdx)
);

drop table proposals;
drop table votes;

select * from votes;
select * from proposals;

SELECT * FROM votes ORDER BY voteIdx DESC LIMIT 1;


-- voting 페이지 렌더링할 때 현재 진행중인 voteIdx와 해당 voteIdx의 proposal 불러오기

-- addProposal하면 컨트랙트 상에 proposal 추가하고 성공하면 proposals db에도 추가(voteIdx foreign key로 참조)

-- 투표시작하면 votes에 시작 날짜변경, 투표종료하면 뽑힌 proposal과 endDate수정

-- 투표리셋하면 votes에 새로운 row 추가하고 voteIdx는 새로운것 참조해야함 => proposals는 비운다