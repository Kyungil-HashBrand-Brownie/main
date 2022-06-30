// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Minting.sol";
import "./Token.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract NFTStaking is BrownyNft {
  uint256 public totalStaked;

  struct Stake {
    uint256 tokenId;
    uint256 timestamp;
    address owner;
  }

  event NFTStaked(address indexed owner, uint256 indexed tokenId, uint256 indexed value);
  event NFTUnstaked(address indexed owner, uint256 indexed tokenId, uint256 indexed value);
  event Claimed(address indexed owner, uint256 indexed amount);

  mapping(uint256 => Stake) public vault; 

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
  }

  function unstake(uint256 tokenId) external {
    Stake memory staked = vault[tokenId];
    require(staked.owner == msg.sender, "not an owner");
    _approve(msg.sender, tokenId);
    totalStaked--;
    delete vault[tokenId];
    emit NFTUnstaked(msg.sender, tokenId, block.timestamp);
    transferFrom(address(this), msg.sender, tokenId);
  }
}