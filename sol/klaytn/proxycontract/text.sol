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
    function minted(uint _tokenId) public {
        mintinglist[_tokenId] = true;
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

    function approveNFT(address _address, uint _tokenId) external {
        _approve(_address, _tokenId);
    }
    function approveAllNFT(address _address, uint[] memory _tokenId) external {
        require(_tokenId.length <= 5, "Too many loop");
        for(uint8 i = 0; i < _tokenId.length; i++) {
            _approve(_address, _tokenId[i]);
        }
    }

    function stakedFunc(uint256 _tokenId, address _owner) external {
        if(staked[_tokenId] == false) {
            staked[_tokenId] = true;
            numOwnerStakedNFT[_owner]++;
        } else if(staked[_tokenId] == true) {
            staked[_tokenId] = false;
            numOwnerStakedNFT[_owner]--;
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

    // staking timestamp 변경 위한 view 함수 
    function changeTime(uint256 tokenId, uint256 _time) external {
        require(isStaked(tokenId), "This is not staked NFT");
        vault[tokenId].timestamp = _time;
    }
}   