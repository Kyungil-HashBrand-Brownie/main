// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
* author Kyungil_Team Browny
* version 1.0
* nft - whitelist 
*/
contract Whitelist is OwnableUpgradeable {
    mapping(address => bool) whitelist;
    event AddedToWhitelist(address indexed account);
    event RemovedFromWhitelist(address indexed account);

    function initialize() external initializer {
        __Ownable_init();
        transferOwnership(tx.origin);
    }

    // _address를 whitelist로 추가하는 함수
    function add(address _address) public onlyOwner {
        require(whitelist[_address] == false, "Already whitelist");
        whitelist[_address] = true;
        emit AddedToWhitelist(_address);
    }

    // _address를 whitelist에서 제거하는 함수
    function remove(address _address) public onlyOwner {
        whitelist[_address] = false;
        emit RemovedFromWhitelist(_address);
    }

    // 여러 _address를 whitelist에서 제거하는 함수
    function removeMany(address[] memory _address) public onlyOwner {
        for(uint i = 0; i < _address.length; i++) {
            whitelist[_address[i]] = false;
            emit RemovedFromWhitelist(_address[i]);
        }
    }

    // _address가 whitelist인지 확인하는 함수 return bool로 확인
    function isWhitelisted(address _address) public view returns(bool) {
        return whitelist[_address];
    }
}