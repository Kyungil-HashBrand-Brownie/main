//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BrownyNFT is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    // constructor() ERC20("BrownyNFT", "BFT") {
    // }

    function initialize() external initializer {
        __ERC721_init("BrownyNFT", "BFT");
        __Ownable_init();
    }

    function setOwner(address _owner) external {
        _transferOwnership(_owner);
    } 

    function mint(address to, uint tokenId) external onlyOwner {
        _mint(to, tokenId);
    }

    string public fileExtention = ".json";
    using Strings for uint256;

    // _baseURI - nft 발행시 참조할 ipfs 주소 
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://Qmcta8PfoECTVgtmHxVBMcDToKk6Nes5RHZnTnNxJuZ2yi/";
    }

    // 발행된 nft tokenId에 대한 ipfs주소 return 함수 
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), fileExtention)) : "";
    }
}