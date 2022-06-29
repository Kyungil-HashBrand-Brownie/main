// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./NFT.sol";

/*
투표 
nft 보유량에 따른 등급제로 투표가중치
보유량 - 등급 - 투표가중치
1 - 브론즈  - 1
5 - 실버    - 2
10 - 골드   - 3
*/
contract VoteContract {
    address private owner;  // 주인
    // 투표상태
    enum VoteStatus {
        beforeVote, // 안건 발의 중
        nowVote,    // 투표 중
        afterVote   // 투표 끝
    }  

    VoteStatus public voteStatus;
    BrownyNFT public brownyNFT;

    constructor(address _brownyNFT) {
        owner = msg.sender;
        voteStatus = VoteStatus.beforeVote;
        brownyNFT = BrownyNFT(_brownyNFT);
    }
    // owner check
    modifier onlyOwner () { 
        require(owner == msg.sender, "You are not owner");
        _;
    }

    event Voting(address indexed _voter, uint indexed _proposalId); // 투표 이벤트 발생

    // 안건 struct 
    struct Proposal {
        uint proposalId; // 안건 번호
        uint256 votedCounts; // 득표수
    }
    mapping(uint => Proposal) proposals;
    
    // 투표자 struct 
    struct Voter {
        uint votedProposalId; // 투표한 안건
        uint8 hasVotes; // 중복투표방지용 
        uint votePower; // 투표 가중치
    }
    mapping(address => Voter) voters;

    uint256 voteCounts = 0; // 총 표수
    uint256 voterCounts = 0; // 투표 참여자 수
    uint256 proposalCounts = 0; // 안건 수
    uint8 forHasVotes = 1; // 중복 방지 검사용 수

    // 투표 권한 확인
    modifier onlyHolder() { 
        require(brownyNFT.userRank() > 0, "You are not holder");
        _;
    }

    // 이미 투표했는지 확인
    modifier alreadyVote { 
        require(voters[msg.sender].hasVotes != forHasVotes, "You already vote");
        _;
    }

    // 발의 권한 확인
    modifier permissionProposal() { 
        require(brownyNFT.userRank() > 2 || msg.sender == owner, "You do not have permission");
        _;
    }

    // 발의 중 이야?
    modifier isBeforeVote {
        require(voteStatus == VoteStatus.beforeVote, "This is not an offer period");
        _;
    }
    // 투표 중 이야?
    modifier isNowVote {
        require(voteStatus == VoteStatus.nowVote, "This is not an vote period");
        _;
    }
    // 투표 끝 이야?
    modifier isAfterVote {
        require(voteStatus == VoteStatus.afterVote, "Voting not finished");
        _;
    }

    // 발의 함수
    function newProposal() public isBeforeVote permissionProposal() { 
        proposals[proposalCounts] = Proposal(proposalCounts + 1, 0);
        proposalCounts++;
    }

    // 발의 끝 동시에 투표 시작 함수
    function endProposal() public isBeforeVote onlyOwner {
        voteStatus = VoteStatus.nowVote;
    }

    // 투표 함수
    function voting(uint _proposalId) public alreadyVote isNowVote onlyHolder() {
        uint index = _proposalId - 1;
        voters[msg.sender].votedProposalId = _proposalId;
        voters[msg.sender].hasVotes = forHasVotes;
        voters[msg.sender].votePower = brownyNFT.myNFTs().length; 
        voteCounts += brownyNFT.myNFTs().length;
        proposals[index].votedCounts += brownyNFT.myNFTs().length;
        voterCounts++;
        emit Voting(msg.sender, _proposalId);
    }

    // 각 안건 득표수 확인 함수
    function numberOfVotes(uint _index) public view returns(uint256) {
        return proposals[_index].votedCounts;
    }

    // 투표 끝 함수 
    function endVote() public onlyOwner isNowVote {
        voteStatus = VoteStatus.afterVote;
    }

    // 투표 재시작
    function restartVote() public onlyOwner isAfterVote {
        for(uint i = 0; i < proposalCounts; i++){
            delete proposals[i];
        }
        forHasVotes = (forHasVotes + 1) % 10;
        voteStatus = VoteStatus.beforeVote;
        voteCounts = 0;
        voterCounts = 0;
        proposalCounts = 0;
    }
}