// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract NormalListTokenId {
    uint256[175] numberArr;
    function setArray(uint256 _startNumber) public {
        for(uint256 i = 0; i < numberArr.length; i++) {
            numberArr[i] = (_startNumber + i);
        }
    }
    function shuffle() public {
        for (uint256 i = 0; i < numberArr.length; i++) {
            uint256 n = i + uint256(keccak256(abi.encodePacked(block.timestamp))) % (numberArr.length - i);
            uint256 temp = numberArr[n];
            numberArr[n] = numberArr[i];
            numberArr[i] = temp;
        }
    }
    function show() public view returns(uint256[175] memory) {
        return numberArr;
    }
    function showId(uint256 _index) public view returns(uint256) {
        return numberArr[_index];
    }
}