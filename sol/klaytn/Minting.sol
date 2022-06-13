// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Token.sol";
import "./Whitelist.sol";

contract BrownieNft is ERC721, Whitelist {
    BrownieToken instance = new BrownieToken(address(this));

    function getBtk(uint256 _amount) public payable {
        require(msg.value >= _amount * 10 ** 18, "Please check your balance");
        instance.tokenTransfer(address(this), msg.sender, _amount);
    }

    function sellBtk(uint256 amount) public {
        instance.tokenTransfer(address(this), payable(msg.sender), amount);
        payable(msg.sender).transfer(amount * 10 ** 18);
    }

    using Counters for Counters.Counter;
    string public fileExtention = ".json";
    using Strings for uint256;
    mapping(uint256 => bool) mintinglist;

    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _whitelistCounter;

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

    function safeMint(address to) private {
        uint256 randomNum = randNum();
        _safeMint(to, randomNum);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), fileExtention)) : "";
    }

    function batchMint(uint256 amount) public {
        require(instance.balanceOf(msg.sender) >= amount * 2 * 10 ** 18 , "Please check your balance");
        for (uint256 i = 0; i < amount; i++) {
            safeMint(msg.sender);
            _tokenIdCounter.increment();
            instance.tokenTransfer(msg.sender, address(this), 2);
        }
    }

    function whitelistMint(uint256 amount) public onlyWhitelisted(msg.sender) {
        require(instance.balanceOf(msg.sender) >= amount * 10 ** 18 , "Please check your balance");
        require(_whitelistCounter.current() + amount <= 30,"Total NFT for whitelist users is only thirty");
        for (uint256 i = 0; i < amount; i++) {
            safeMint(msg.sender);
            _tokenIdCounter.increment();
            _whitelistCounter.increment();
            instance.tokenTransfer(msg.sender, address(this), 1);
        }
    }

    function withdrawKLAY(uint _balance) public onlyOwner {
        require(address(this).balance >= _balance * 10 ** 18, "insurfficient balance");
        payable(msg.sender).transfer(_balance * 10 ** 18);
    }

    function nftNum() public view returns(uint256) {
        uint256 tokenNum = _tokenIdCounter.current();
        return tokenNum;
    }
}