// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BrownieNft is ERC721, Ownable {
    using Counters for Counters.Counter;
    string public fileExtention = ".json";
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("BrownieNft", "BFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmbqhcAu5QhdE55e8UzbKY92c6pERPCSuMHMebdrA2mFs7/";
    }

    function safeMint(address to) public  {
        // require(msg.value == 1 * 10 ** 18 , "Please check minting cost");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

      function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), fileExtention)) : "";
    }

    function batchMint(address to, uint amount) public payable {
        require(msg.value == amount * 10 ** 18 , "Please check minting cost");
        for (uint i = 0; i < amount; i++) {
            safeMint(to);
        }
    }

    function withdrawKLAY(uint balance) public payable onlyOwner {
        require(address(this).balance >= balance * 10 ** 18, "insurfficient balance");
        payable(msg.sender).transfer(address(this).balance);
    }
}