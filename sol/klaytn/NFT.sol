// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Whitelist.sol";

/**
* author Kyungil_Team Browny
* version 1.0
* ERC721기반 대체 불가능 토큰 자체 nft
*/
contract BrownyNFT is ERC721, Whitelist {
    /*-
    * 자체 nft 생성
    * @name BrownyNFT
    * @symbol BFT
    */
    constructor() ERC721("BrownyNFT", "BFT") {}

    string public fileExtention = ".json";
    using Strings for uint256;
    mapping(uint256 => bool) public mintinglist;
    mapping(address => uint256[]) public ownNFTs;
    uint256[] mintedNftList;

    // _baseURI - nft 발행시 참조할 ipfs 주소 
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmaAYEhbXsrDn7TGgnz9EhZzrrrB8vuHDuzXioPFzjRQBt/";
    }

    function checkMinting(uint _tokenId) public view returns(bool) {
        return mintinglist[_tokenId];
    }

    function minted(uint _tokenId) public {
        mintinglist[_tokenId] = true;
    }

    // 내가 보유한 nft tokenId들
    function myNFTs() public view returns(uint256[] memory) {
        return ownNFTs[msg.sender];
    }

    /** 
    * _tokenIdCounter - 전체 발행된 nft 수
    * _whitelistCounter - whitelist가 발행한 nft 수
    */
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _whitelistCounter;

    // 현재 발행된 일반 nft 수 확인 
    function nftNum() public view returns(uint256) {
        uint256 tokenNum = _tokenIdCounter.current();
        return tokenNum;
    }

    // 현재 whitelist가 minting한 nft 수 확인 
    function whitelistNftNum() public view returns(uint256) {
        uint256 tokenNum = _whitelistCounter.current();
        return tokenNum;
    }
    
    function safeMint(address to, uint256 tokenId, uint8 status) external {
        _safeMint(to, tokenId);
        ownNFTs[to].push(tokenId);
        mintedNftList.push(tokenId);
        if(status == 0) {
            _tokenIdCounter.increment();
        } else if(status == 1) {
            _whitelistCounter.increment();
        }
    }

    function mintedNFT() public view returns(uint256[] memory) {
        return mintedNftList;
    }

    // 현재 staking 된 nft 수
    uint256 public totalStaked;

    /**
    * @tokenId - staking token
    * @timestamp - staking timestamp
    * @owner - staking nft owner
    */
    struct Stake {
        uint256 tokenId;
        uint256 timestamp;
        address owner;
    }

    // uint256 tokenid => struct Stake 
    mapping(uint256 => Stake) public vault; 
    // uint256 tokenid => bool staked?
    mapping(uint256 => bool) public staked;
    // address owner => uint staked nft num
    mapping(address => uint) public numOwnerStakedNFT;

    function approveNFT(address _address, uint _tokenId) external {
        _approve(_address, _tokenId);
    }
    function approveAllNFT(address _address, uint[] memory _tokenId) external {
        require(_tokenId.length <= 5, "Too many loop");
        for(uint8 i = 0; i < _tokenId.length; i++) {
            _approve(_address, _tokenId[i]);
        }
    }
    // owner는 nft 소유자, operator는 권한 줄 contract address
    // function approveAllNFT(address _owner, address _operator, bool _approved) external {
    //     _setApprovalForAll(_owner, _operator, _approved);
    // }
    // stake시 
    function stakedFunc(uint256 _tokenId, address _owner) external {
        if(staked[_tokenId] == false) {
            staked[_tokenId] = true;
            numOwnerStakedNFT[_owner]++;
            totalStaked++;
        } else if(staked[_tokenId] == true) {
            staked[_tokenId] = false;
            numOwnerStakedNFT[_owner]--;
            totalStaked--;
        }
    }

    // struct Stake change 함수
    function setStake(uint256 _tokenId, uint256 _timestamp, address _owner) external {
        vault[_tokenId] = Stake({
            owner: _owner,
            tokenId: _tokenId,
            timestamp: _timestamp  
        });
    }

    // struct Stake delete 함수
    function deleteStake(uint256 _tokenId) external {
        delete vault[_tokenId];
    }

    // total staking nft num view 함수 
    function totalStakedNum() public view returns(uint256) {
        return totalStaked;
    }

    // staking한 tokenId인지 view 함수 
    function isStaked(uint256 tokenId) public view returns(bool) {
        return staked[tokenId];
    }

    // staking timestamp확인 위한 view 함수 
    function whenStaked(uint256 tokenId) public view returns(uint256) {
        require(isStaked(tokenId), "This is not staked NFT");
        return vault[tokenId].timestamp;
    }

    // staking timestamp 변경 위한 view 함수 
    function changeTime(uint256 tokenId, uint256 _time) external {
        require(isStaked(tokenId), "This is not staked NFT");
        vault[tokenId].timestamp = _time;
    }

    // staking한 유저 address view 함수 
    function ownerOfStaking(uint256 tokenId) public view returns(address) {
        require(isStaked(tokenId), "This is not staked NFT");
        return vault[tokenId].owner;
    }

    // user가 staking한 nft 목록 확인
    function checkStakedNFTs() public view returns(uint[] memory) {
        uint[] memory stakingList = new uint[](numOwnerStakedNFT[msg.sender]);
        uint index = 0;
        for(uint i = 0; i < ownNFTs[msg.sender].length; i++) {
        if(staked[ownNFTs[msg.sender][i]] == true) {
            stakingList[index] = ownNFTs[msg.sender][i];
            index++;
        } 
        }
        return stakingList;
    }
    function checkUserStakedNFTs(address _user) external view returns(uint[] memory) {
        uint[] memory stakingList = new uint[](numOwnerStakedNFT[_user]);
        uint index = 0;
        for(uint i = 0; i < ownNFTs[_user].length; i++) {
        if(staked[ownNFTs[_user][i]] == true) {
            stakingList[index] = ownNFTs[_user][i];
            index++;
        } 
        }
        return stakingList;
    }

    // 사용자의 tier
    function userRank() public view returns(uint) {
        uint _amount = balanceOf(msg.sender) + checkStakedNFTs().length;
        if(_amount == 0) {
        return 0; // "unranked"
        } else if(_amount >= 1 && _amount < 5) {
        return 1; // "bronze"
        } else if(_amount >= 5 && _amount < 10) {
        return 2; // "silver"
        } else {
        return 3; // "gold"
        } 
    }
}   