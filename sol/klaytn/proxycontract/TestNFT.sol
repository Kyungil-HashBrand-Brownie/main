//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BrownyNFT is Initializable, ERC721Upgradeable {
    string ipfs = "";
    string public fileExtention = "";
    using Strings for uint256;

    function initialize(string memory _name, string memory _symbol, string memory _ipfs) external initializer {
        __ERC721_init(_name, _symbol);
        // __Ownable_init();
        ipfs = _ipfs;
        fileExtention = ".json";
    }

    function safeMinting(address to, uint tokenId) external {
        _safeMint(to, tokenId, "Test Minting");
    }

    // _baseURI - nft 발행시 참조할 ipfs 주소 
    function _baseURI() internal view override returns (string memory) {
        return ipfs;
    }

    // 발행된 nft tokenId에 대한 ipfs주소 return 함수 
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), fileExtention)) : "";
    }
}