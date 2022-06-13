// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Minting.sol";

/**
* author Kyungil_Team Brownie
* version 1.0
* 자체 nft staking 구현
*/
contract NFTStaking is BrownieNft {
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

  // staking, unstaking, claim에 대한 event
  event NFTStaked(address indexed owner, uint256 indexed tokenId, uint256 indexed value);
  event NFTUnstaked(address indexed owner, uint256 indexed tokenId, uint256 indexed value);
  event Claimed(address indexed owner, uint256 indexed amount, uint256 indexed timestamp);

  // uint256 tokenid => struct Stake 
  mapping(uint256 => Stake) public vault; 
  // uint256 tokenid => bool staked?
  mapping(uint256 => bool) staked;
  // address owner => uint256 number of staked nft
  mapping(address => uint256) numStaked;

  modifier isStaked(uint256 tokenId) {
    require(staked[tokenId], "not staked tokenId");
    _;
  }

  // stake function 
  function stake(uint256 tokenId) external {
    require(ownerOf(tokenId) == msg.sender, "not your token");
    require(vault[tokenId].tokenId == 0, "already staked");
    totalStaked++;
    transferFrom(msg.sender, address(this), tokenId);
    _approve(address(this), tokenId);
    emit NFTStaked(msg.sender, tokenId, block.timestamp);
    vault[tokenId] = Stake({
        owner: msg.sender,
        tokenId: tokenId,
        timestamp: uint256(block.timestamp)
    });
    staked[tokenId] = true;
    numStaked[msg.sender]++;
  }

  // unstake function
  function unstake(uint256 tokenId) external isStaked(tokenId) {
    require(vault[tokenId].owner == msg.sender, "not an owner");
    _approve(msg.sender, tokenId);
    totalStaked--;
    delete vault[tokenId];
    emit NFTUnstaked(msg.sender, tokenId, block.timestamp);
    transferFrom(address(this), msg.sender, tokenId);
    numStaked[msg.sender]--;
    claimed(tokenId);
  }

  // reward claim function
  // 1. timestamp와 현재 시간 확인하여 보상부여
  // 2. 보상부여 tx block의 timestamp로 struct Stake timestamp 최신화?
  function claimed(uint256 tokenId) private isStaked(tokenId) {
    require(vault[tokenId].owner == msg.sender, "not an owner");
    uint256 reward = (((block.timestamp - vault[tokenId].timestamp) / 1 days) / totalStaked) * 10;
    instance.rewardMinting(msg.sender, reward);
    vault[tokenId].timestamp = block.timestamp;
    emit Claimed(msg.sender, reward, block.timestamp);
  }

  // staking timestamp확인 위한 view 함수 
  function whenStaked(uint256 tokenId) public view isStaked(tokenId) returns(uint256){
    return vault[tokenId].timestamp;
  }
}