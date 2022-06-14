// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Token.sol";
import "./Whitelist.sol";

/**
 * author Kyungil_Team Brownie
 * version 1.0
 * ERC721기반 대체 불가능 토큰 자체 nft
 */
contract BrownieNft is ERC721, Whitelist {
    // nft 거래 및 staking reward를 위한 BTK instance
    BrownieToken instance = new BrownieToken(address(this));
    event NFTMinting(address indexed account, uint256 indexed amount);

    // token swap - from klaytn to BTK
    function getBtk(uint256 _amount) public payable {
        require(msg.value >= _amount * 10**18, "Please check your balance");
        instance.tokenTransfer(address(this), msg.sender, _amount);
    }

    // token swap - from BTK to klaytn
    function sellBtk(uint256 amount) public {
        instance.tokenTransfer(address(this), payable(msg.sender), amount);
        payable(msg.sender).transfer(amount * 10**18);
    }

    // instance address 확인용
    function viewIns() public view returns (address) {
        return address(instance);
    }

    using Counters for Counters.Counter;
    string public fileExtention = ".json";
    using Strings for uint256;
    mapping(uint256 => bool) mintinglist;
    uint256[] mintedTokenIds;

    /**
     * _tokenIdCounter - 전체 발행된 nft 수
     * _whitelistCounter - whitelist가 발행한 nft 수
     */
    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _whitelistCounter;

    /*-
     * 자체 nft 생성
     * @name BrownieNft
     * @symbol BFT
     */
    constructor() ERC721("BrownieNft", "BFT") {}

    // _baseURI - nft 발행시 참조할 ipfs 주소
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmbqhcAu5QhdE55e8UzbKY92c6pERPCSuMHMebdrA2mFs7/";
    }

    // nft random 발행을 위한 난수 생성 함수
    function randNum() public returns (uint256) {
        uint256 randNonce = 0;
        uint256 randomNum;
        while (true) {
            randomNum =
                uint256(
                    keccak256(
                        abi.encodePacked(block.timestamp, msg.sender, randNonce)
                    )
                ) %
                1000;
            if (mintinglist[randomNum] == false) {
                mintinglist[randomNum] = true;
                break;
            }
            randNonce++;
        }
        return randomNum;
    }

    /**
     * safeMint - nft 발행 함수
     * nft 발행시 이 함수 사용해서 발행
     */
    function safeMint(address to, uint256 cost) private {
        uint256 randomNum = randNum();
        _safeMint(to, randomNum);
        mintedTokenIds.push(randomNum);
        _tokenIdCounter.increment();
        instance.tokenTransfer(msg.sender, address(this), cost);
    }

    // 발행된 nft tokenId에 대한 ipfs주소 return 함수
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(baseURI, tokenId.toString(), fileExtention)
                )
                : "";
    }

    // 일반 minting
    function batchMint(uint256 amount) public {
        require(
            instance.balanceOf(msg.sender) >= amount * 2 * 10**18,
            "Please check your balance"
        );
        for (uint256 i = 0; i < amount; i++) {
            safeMint(msg.sender, 2);
        }
        emit NFTMinting(msg.sender, amount);
    }

    // whitelist 전용 minting
    function whitelistMint(uint256 amount) public onlyWhitelisted(msg.sender) {
        require(
            instance.balanceOf(msg.sender) >= amount * 10**18,
            "Please check your balance"
        );
        require(
            _whitelistCounter.current() + amount <= 30,
            "Total NFT for whitelist users is only thirty"
        );
        for (uint256 i = 0; i < amount; i++) {
            safeMint(msg.sender, 1);
            _whitelistCounter.increment();
        }
        emit NFTMinting(msg.sender, amount);
    }

    // contract에 있는 klaytn 출금용
    function withdrawKLAY(uint256 _balance) public onlyOwner {
        require(
            address(this).balance >= _balance * 10**18,
            "insurfficient balance"
        );
        payable(msg.sender).transfer(_balance * 10**18);
    }

    // 현재 발행된 nft 수 확인
    function nftNum() public view returns (uint256) {
        uint256 tokenNum = _tokenIdCounter.current();
        return tokenNum;
    }

    // 내가 보유한 nft tokenId들
    function myNFTs() public view returns (uint256[] memory) {
        uint256[] memory nfts;
        for (uint256 i = 0; i < mintedTokenIds.length; i++) {
            if (ownerOf(mintedTokenIds[i]) == msg.sender) {
                nfts[i] = mintedTokenIds[i];
            }
        }
        return nfts;
    }
}
