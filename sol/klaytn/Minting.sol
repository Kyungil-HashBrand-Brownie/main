// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Token.sol";
import "./NFT.sol";
import "./WhiteListTokenId.sol";
import "./NormalListTokenId.sol";

/**
* author Kyungil_Team Browny
* version 1.0
* nft 발행 contract
*/
contract Minting {
    BrownyToken public brownyToken;
    BrownyNFT public brownyNFT;
    WhiteListTokenId public whiteListTokenId;
    NormalListTokenId public normalListTokenId;

    constructor(address _brownyToken, address _brownyNFT, address _whiteListTokenId, address _normalListTokenId) {
        brownyToken = BrownyToken(_brownyToken);
        brownyNFT = BrownyNFT(_brownyNFT);
        whiteListTokenId = WhiteListTokenId(_whiteListTokenId);
        normalListTokenId = NormalListTokenId(_normalListTokenId);
    }

    // nft 거래 및 staking reward를 위한 BTK instance
    // BrownyToken instance = new BrownyToken(address(this));
    event NFTMinting(address indexed account, uint indexed amount);

    // token swap - from klaytn to BTK
    function getBtk(uint256 _amount) public payable {
        require(msg.value == _amount * 10 ** 18, "Please check your balance");
        brownyToken.tokenTransfer(address(brownyToken), msg.sender, _amount, 722 * 10 ** 16);
    }

    // token swap - from BTK to klaytn
    function sellBtk(uint256 amount) public {
        require(brownyToken.checkBalance(msg.sender) >= amount * 10 ** 18, "Please check your balance");
        brownyToken.tokenTransfer(msg.sender, address(brownyToken), amount, 10 ** 18);
        payable(msg.sender).transfer(amount * (14 * 10 ** 16));
    }

    /**
    * safeMint - nft 발행 함수 
    * nft 발행시 이 함수 사용해서 발행 
    */
    modifier isStatus(uint8 _status) {
        require(_status == 0 || _status == 1, "Wrong Minting Way");
        _;
    }
    function safeMint(uint256 cost, uint8 _status) private isStatus(_status){
        uint256 nftNum;
        uint256 randomNum;
        if(_status == 0) {
            nftNum = brownyNFT.nftNum();
            randomNum = normalListTokenId.showId(nftNum);
        } else if(_status == 1) {
            nftNum = brownyNFT.whitelistNftNum();
            randomNum = whiteListTokenId.showId(nftNum);
        }
        brownyNFT.safeMint(msg.sender, randomNum, _status);
        brownyToken.tokenTransfer(msg.sender, address(this), cost, 10 ** 18);
    }

    // 일반 minting
    function batchMint(uint256 amount) public {
        require(brownyToken.balanceOf(msg.sender) >= amount * 50 * 10 ** 18 , "Please check your balance");
        for (uint256 i = 0; i < amount; i++) {
            safeMint(50, 0);
        }
        emit NFTMinting(msg.sender, amount);
    }

    // whitelist 전용 minting
    function whitelistMint(uint256 amount) public {
        require(brownyNFT.isWhitelisted(msg.sender), "Yor are not whitelist member");
        require(brownyToken.balanceOf(msg.sender) >= amount * 25 * 10 ** 18 , "Please check your balance");
        require(brownyNFT.whitelistNftNum() + amount <= 30,"Total NFT for whitelist users is only thirty");
        for (uint256 i = 0; i < amount; i++) {
            safeMint(25, 1);
        }
        emit NFTMinting(msg.sender, amount);
    }

    modifier isStaked(uint256 tokenId) {
        require(brownyNFT.isStaked(tokenId), "not staked tokenId");
        _;
    }

    // stake function 
    function stake(uint256 tokenId) private {
        require(brownyNFT.ownerOf(tokenId) == msg.sender, "not your token");
        require(brownyNFT.isStaked(tokenId) == false, "already staked");
        brownyNFT.transferFrom(msg.sender, address(brownyNFT), tokenId);
        brownyNFT.setStake(tokenId, uint256(block.timestamp), msg.sender);
        brownyNFT.stakedFunc(tokenId, msg.sender);
    }
    function stakeNFTs(uint256[] memory tokenId) external {
        for(uint i = 0; i < tokenId.length; i++) {
          stake(tokenId[i]);
        }
    }

    // unstake function
    function unstake(uint256 tokenId) private isStaked(tokenId) {
        require(brownyNFT.ownerOfStaking(tokenId) == msg.sender, "not an owner");
        claimed(tokenId);
        brownyNFT.transferFrom(address(brownyNFT), msg.sender, tokenId);
        brownyNFT.deleteStake(tokenId);
        brownyNFT.stakedFunc(tokenId, msg.sender);
    }
    function unstakeNFTs(uint256[] memory tokenId) external {
        for(uint i = 0; i < tokenId.length; i++) {
          unstake(tokenId[i]);
        }
    }

    // reward claim function
    // 1. timestamp와 현재 시간 확인하여 보상부여
    // 2. 보상부여 tx block의 timestamp로 struct Stake timestamp 최신화?
    function claimed(uint256 tokenId) private isStaked(tokenId) {
        require(brownyNFT.ownerOfStaking(tokenId) == msg.sender, "not an owner");
        uint256 reward = (block.timestamp - brownyNFT.whenStaked(tokenId));
        brownyToken.tokenTransfer(address(brownyToken), msg.sender, reward, 10 ** 14);
        brownyNFT.changeTime(tokenId, block.timestamp);
    }
    function callClaim() public {
        uint256[] memory tokenId = brownyNFT.myNFTs();
        for(uint8 i = 0; i < tokenId.length; i++) {
            claimed(tokenId[i]);
        }
    }

    function checkClaimed(uint256 tokenId) public view isStaked(tokenId) returns(uint256) {
        // require(brownyNFT.ownerOfStaking(tokenId) == msg.sender, "not an owner");
        // uint256 reward = ((block.timestamp - brownyNFT.whenStaked(tokenId) / 1 hours) / brownyNFT.totalStakedNum()) * 10;
        uint256 reward = (block.timestamp - brownyNFT.whenStaked(tokenId));
        return reward;
    }
}