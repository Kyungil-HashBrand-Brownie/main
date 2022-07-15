//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../Whitelist/Whitelist.sol";

contract BrownyNFT is Initializable, ERC721EnumerableUpgradeable {
    string ipfs = "";
    string public fileExtention = "";
    using Strings for uint256;
    using Counters for Counters.Counter;

    Whitelist public whitelist;

    // 민팅된 전체 nft 배열
    uint256[] private mintedNftList;

    /** 
    * _tokenIdCounter - 전체 발행된 nft 수
    * _whitelistCounter - whitelist가 발행한 nft 수
    */
    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _whitelistCounter;

    /**
    * @tokenId - staking tokenId
    * @timestamp - staking timestamp
    * @owner - staking nft owner
    */
    struct Stake {
        uint256 tokenId;
        uint256 timestamp;
        address owner;
    }
    // uint256 tokenid => struct Stake 
    mapping(uint256 => Stake) public vault; 
    // uint256 tokenid => bool staked?
    mapping(uint256 => bool) public staked;
    // address owner => uint staked nft num
    mapping(address => uint) public numOwnerStakedNFT;
    mapping(address => uint[]) public ownerStakedNFT;

    function initialize(string memory _name, string memory _symbol, string memory _ipfs, address _whitelistCon) external initializer {
        __ERC721_init(_name, _symbol);
        ipfs = _ipfs;
        fileExtention = ".json";
        whitelist = Whitelist(_whitelistCon);
    }

    function safeMinting(address to, uint tokenId) private {
        _safeMint(to, tokenId, "Test Minting");
        _beforeTokenTransfer(address(0), to, tokenId);
    }

    function tokens(address _owner) public view returns(uint256[] memory) {
        uint256 _tokenCount = balanceOf(_owner);

        uint256[] memory _tokens = new uint256[](_tokenCount);
        for (uint256 i = 0; i < _tokenCount; i++) {
            _tokens[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return _tokens;
    }

/* ============================ view func ============================*/
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

    function ownTokens() public view returns(uint256[] memory) {
        return tokens(msg.sender);
    }

    function isWhitelisted(address _address) public view returns(bool){
        return whitelist.isWhitelisted(_address);
    }

    function checkMintedNftList() public view returns(uint256[] memory){
        return mintedNftList;
    }

    function checkMintedNormalNFTNum() public view returns(uint256){
        return _tokenIdCounter.current();
    }
    function checkMintedWhitelistNFTNum() public view returns(uint256){
        return _whitelistCounter.current();
    }

    // staking한 tokenId인지 view 함수 
    function isStaked(uint256 tokenId) public view returns(bool) {
        return staked[tokenId];
    }

    // staking timestamp확인 위한 view 함수 
    function whenStaked(uint256 tokenId) public view returns(uint256) {
        require(isStaked(tokenId), "This is not staked NFT");
        return vault[tokenId].timestamp;
    }

    // staking한 유저 address view 함수 
    function ownerOfStaking(uint256 tokenId) public view returns(address) {
        require(isStaked(tokenId), "This is not staked NFT");
        return vault[tokenId].owner;
    }

    // user가 staking한 nft 목록 확인
    function checkStakedNFTs() public view returns(uint256[] memory) {
        return ownerStakedNFT[tx.origin];
    }

    // 사용자의 tier
    function userRank() public view returns(uint) {
        uint _amount = balanceOf(tx.origin) + checkStakedNFTs().length;
        if(_amount == 0) {
        return 0; // "unranked"
        } else if(_amount >= 1 && _amount < 5) {
        return 1; // "bronze"
        } else if(_amount >= 5 && _amount < 10) {
        return 2; // "silver"
        } else {
        return 3; // "gold"
        } 
    }

/* ============================ external func ============================*/
    function safeMint(address to, uint256 tokenId, uint8 status) public {
        _safeMint(to, tokenId);
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

    function stakedFunc(uint256 _tokenId, uint256 _timestamp, address _owner) external {
        if(staked[_tokenId] == false) {
            staked[_tokenId] = true;
            numOwnerStakedNFT[_owner]++;
            ownerStakedNFT[_owner].push(_tokenId);
            setStake( _tokenId, _timestamp, _owner);
        } else if(staked[_tokenId] == true) {
            staked[_tokenId] = false;
            numOwnerStakedNFT[_owner]--;
            uint256 index = indexOf(ownerStakedNFT[_owner], _tokenId);
            remove(ownerStakedNFT[_owner], index);
            deleteStake(_tokenId);
        }
    }

    // struct Stake change 함수
    function setStake(uint256 _tokenId, uint256 _timestamp, address _owner) private {
        vault[_tokenId] = Stake({
            owner: _owner,
            tokenId: _tokenId,
            timestamp: _timestamp  
        });
    }

    // struct Stake delete 함수
    function deleteStake(uint256 _tokenId) private {
        delete vault[_tokenId];
    }

    // staking timestamp 변경 위한 view 함수 
    function changeTime(uint256 tokenId, uint256 _time) external {
        require(isStaked(tokenId), "This is not staked NFT");
        vault[tokenId].timestamp = _time;
    }

    /* ============================ etc func ============================*/
    function indexOf(uint256[] memory array, uint256 searchFor) private pure returns (uint256) {
        for (uint256 i = 0; i < array.length; i++) {
            if (array[i] == searchFor) {
            return i;
            }
        }
        return (2^256)-1; // not found
    }

    function remove(uint256[] storage array, uint256 index) private {
        require(array.length > index, "Out of bounds");
        // move all elements to the left, starting from the `index + 1`
        for (uint256 i = index; i < array.length - 1; i++) {
            array[i] = array[i+1];
        }
        array.pop(); // delete the last item
    }
}