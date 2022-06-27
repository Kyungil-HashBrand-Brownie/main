// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Token.sol";
import "./NFT.sol";

// rental service
contract NFTTrading {
    // nft 매매 function 
    // 1. 매매할 nft 매매권한 contract에 부여 (approve)
    // 2. contract에서 구매자에게 nft 소유권 양도
    BrownieToken public brownieToken;
    BrownieNFT public brownieNFT;

    constructor(address _brownieToken, address _brownieNFT) {
        brownieToken = BrownieToken(_brownieToken);
        brownieNFT = BrownieNFT(_brownieNFT);
    }
}