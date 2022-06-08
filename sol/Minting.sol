// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BrownieNft is ERC721, Ownable {
    mapping(address => bool) whitelist;
    event AddedToWhitelist(address indexed account);
    event RemovedFromWhitelist(address indexed account);

    modifier onlyWhitelisted(address to) {
        require(isWhitelisted(to));
        _;
    }

    function add(address _address) public onlyOwner {
        whitelist[_address] = true;
        emit AddedToWhitelist(_address);
    }

    function remove(address _address) public onlyOwner {
        whitelist[_address] = false;
        emit RemovedFromWhitelist(_address);
    }

    function isWhitelisted(address _address) public view returns(bool) {
        return whitelist[_address];
    }

    using Counters for Counters.Counter;
    string public fileExtention = ".json";
    using Strings for uint256;
    mapping(uint256 => bool) mintinglist;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("BrownieNft", "BFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmbqhcAu5QhdE55e8UzbKY92c6pERPCSuMHMebdrA2mFs7/";
    }

    function randNum() public returns(uint256) {
        uint256 randNonce = 0;
        uint256 randomNum;
        while(true) {
            randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNonce))) % 1000;
            if(mintinglist[randomNum] == false) {
                mintinglist[randomNum] = true;
                break;
            }
            randNonce++;
        }
        return randomNum;
    }

    function safeMint(address to) public  {
        // require(msg.value == 1 * 10 ** 18 , "Please check minting cost");
        // uint256 tokenId = _tokenIdCounter.current();
        // _tokenIdCounter.increment();
        uint256 randomNum = randNum();
        _safeMint(to, randomNum);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), fileExtention)) : "";
    }

    function batchMint(address to, uint amount) public payable {
        require(msg.value == amount * 2 * 10 ** 18 , "Please check your balance");
        for (uint i = 0; i < amount; i++) {
            safeMint(to);
        }
    }

    function whitelistMint(address to, uint amount) public payable onlyWhitelisted(to) {
        uint256 tokenId = _tokenIdCounter.current();
        require(msg.value == amount * 10 ** 18 , "Please check your balance");
        require(tokenId + amount <= 30,"Total NFT for whitelist users is only thirty");
        for (uint i = 0; i < amount; i++) {
            safeMint(to);
            _tokenIdCounter.increment();
        }
    }

    function withdrawKLAY(uint _balance) public payable onlyOwner {
        require(address(this).balance >= _balance * 10 ** 18, "insurfficient balance");
        payable(msg.sender).transfer(_balance * 10 ** 18);
    }
}