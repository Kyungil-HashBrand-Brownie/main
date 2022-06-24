// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Token.sol";
import "./NFT.sol";
import "./Whitelist.sol";

/**
* author Kyungil_Team Brownie
* version 1.0
* nft 발행 contract
*/
contract Minting {
    BrownieToken public brownieToken;
    BrownieNFT public brownieNFT;

    constructor(address _brownieToken, address _brownieNFT) {
        brownieToken = BrownieToken(_brownieToken);
        brownieNFT = BrownieNFT(_brownieNFT);
    }

    // nft 거래 및 staking reward를 위한 BTK instance
    // BrownieToken instance = new BrownieToken(address(this));
    event NFTMinting(address indexed account, uint indexed amount);

    // token swap - from klaytn to BTK
    function getBtk(uint256 _amount) public payable {
        require(msg.value == _amount * 10 ** 18, "Please check your balance");
        brownieToken.tokenTransfer(address(brownieToken), msg.sender, _amount * 10);
    }

    // token swap - from BTK to klaytn
    function sellBtk(uint256 amount) public {
        require(brownieToken.checkBalance(msg.sender) >= amount * 10 ** 18, "Please check your balance");
        brownieToken.tokenTransfer(msg.sender, address(brownieToken), amount);
        payable(msg.sender).transfer(amount * 10 ** 17);
    }

    // nft random 발행을 위한 난수 생성 함수
    function randNum() public returns(uint256) {
        uint256 randNonce = 0;
        uint256 randomNum;
        while(true) {
            randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, randNonce, msg.sender))) % 150 + 1;
            if(brownieNFT.checkMinting(randomNum) == false) {
                brownieNFT.minted(randomNum);
                break;
            }
            randNonce++;
        }
        return randomNum;
    }

    /**
    * safeMint - nft 발행 함수 
    * nft 발행시 이 함수 사용해서 발행 
    */
    function safeMint(address to, uint256 cost, uint8 _status) private {
        uint256 randomNum = randNum();
        brownieNFT.safeMint(to, msg.sender, randomNum, _status);
        brownieToken.tokenTransfer(msg.sender, address(this), cost);
    }

    // 일반 minting
    function batchMint(uint256 amount) public {
        require(brownieToken.balanceOf(msg.sender) >= amount * 50 * 10 ** 18 , "Please check your balance");
        for (uint256 i = 0; i < amount; i++) {
            safeMint(msg.sender, 50, 0);
        }
        emit NFTMinting(msg.sender, amount);
    }

    // whitelist 전용 minting
    function whitelistMint(uint256 amount) public {
        require(brownieNFT.isWhitelisted(msg.sender), "Yor are not whitelist member");
        require(brownieToken.balanceOf(msg.sender) >= amount * 25 * 10 ** 18 , "Please check your balance");
        require(brownieNFT.whitelistNftNum() + amount <= 30,"Total NFT for whitelist users is only thirty");
        for (uint256 i = 0; i < amount; i++) {
            safeMint(msg.sender, 25, 1);
        }
        emit NFTMinting(msg.sender, amount);
    }

        modifier isStaked(uint256 tokenId) {
        require(brownieNFT.isStaked(tokenId), "not staked tokenId");
        _;
    }

    // function approveNFT() private {
    //     brownieNFT.approve(address(brownieNFT));
    // }
    // stake function 
    function stake(uint256 tokenId) private {
        require(brownieNFT.ownerOf(tokenId) == msg.sender, "not your token");
        require(brownieNFT.isStaked(tokenId) == false, "already staked");
        // brownieNFT.approve(address(this), tokenId);
        brownieNFT.transferFrom(msg.sender, address(brownieNFT), tokenId);
        brownieNFT.setStake(tokenId, uint256(block.timestamp), msg.sender);
        brownieNFT.stakedFunc(tokenId, msg.sender);
    }
    function stakeNFTs(uint256[] memory tokenId) external {
        for(uint i = 0; i < tokenId.length; i++) {
          stake(tokenId[i]);
        }
    }

    // unstake function
    function unstake(uint256 tokenId) private isStaked(tokenId) {
        require(brownieNFT.ownerOfStaking(tokenId) == msg.sender, "not an owner");
        // brownieNFT.approve(msg.sender, tokenId);
        claimed(tokenId);
        brownieNFT.deleteStake(tokenId);
        brownieNFT.transferFrom(address(brownieToken), msg.sender, tokenId);
        brownieNFT.stakedFunc(tokenId, msg.sender);
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
        require(brownieNFT.ownerOfStaking(tokenId) == msg.sender, "not an owner");
        uint256 reward = ((block.timestamp - brownieNFT.whenStaked(tokenId) / 1 hours) / brownieNFT.totalStakedNum()) * 10;
        brownieToken.tokenTransfer(address(brownieToken), msg.sender, reward);
        brownieNFT.changeTime(tokenId, block.timestamp);
    }
}