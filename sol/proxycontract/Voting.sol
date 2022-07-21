// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./NFT/NFT.sol";

/*
투표 
nft 홀더만 투표 가능
보유량  - 등급
1      - 브론즈  
5      - 실버   
10     - 골드  
*/
contract VoteContract {
    address private owner;  // 주인
    // 투표상태
    enum VoteStatus {
        beforeVote, // 안건 발의 중, 투표 전
        nowVote    // 투표 중
        // afterVote   // 투표 끝
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

    // 투표했나 확인
    function checkVote() public view returns(bool) {
        if(voters[msg.sender].hasVotes != forHasVotes) {
            return false;
        } else {
            return true;
        }
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
    // modifier isAfterVote {
    //     require(voteStatus == VoteStatus.afterVote, "Voting not finished");
    //     _;
    // }

    // 발의 함수
    function newProposal() private isBeforeVote permissionProposal { 
        proposals[proposalCounts] = Proposal(proposalCounts + 1, 0);
        proposalCounts++;
    }
    function newProposals(uint _n) public isBeforeVote permissionProposal { 
        for(uint i = 0; i < _n; i++) {
            newProposal();
        }
    }

    // 발의 끝 동시에 투표 시작 함수
    function endProposal() public isBeforeVote onlyOwner {
        require(proposalCounts > 0, "No proposal");
        voteStatus = VoteStatus.nowVote;
    }
    function viewVotePower() public view returns(uint256) {
        return (brownyNFT.balanceOf(tx.origin) + brownyNFT.checkStakedNFTs().length);
    }
    // 투표 함수
    function voting(uint _proposalId) public alreadyVote isNowVote onlyHolder {
        uint index = _proposalId - 1;
        uint _votePower = (brownyNFT.balanceOf(tx.origin) + brownyNFT.checkStakedNFTs().length);
        voters[msg.sender].votedProposalId = _proposalId;
        voters[msg.sender].hasVotes = forHasVotes;
        voters[msg.sender].votePower = _votePower; 
        voteCounts += _votePower;
        proposals[index].votedCounts += _votePower;
        voterCounts++;
        emit Voting(msg.sender, _proposalId);
    }
    // 현재 총 투표수
    function viewVoteCount() public view returns(uint) {
        return voteCounts;
    }
    
    // 현재 총 투표 참여자 수
    function viewVoterCount() public view returns(uint) {
        return voterCounts;
    }

    // 각 안건 득표수 확인 함수
    // 1번에 투표하면 0을 조회해야 득표수 알 수 있음
    function numberOfVotes(uint _index) public view returns(uint256) {
        return proposals[_index].votedCounts;
    }

    // 투표 누구에게 했나 확인 함수 
    function checkVoteWhich() public view returns(uint256) {
        return voters[msg.sender].votedProposalId;
    }

    // 투표 끝 & 초기화
    function endVote() public onlyOwner isNowVote {
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