// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
* author Kyungil_Team Brownie
* version 1.0
* ERC20기반 자체 토큰 
*/
contract BrownieToken is ERC20, Ownable {
    // token swap 용 token을 위해 contract addreess에 100000BTK 선발행
    // constructor(address conAddr) ERC20("BrownieToken", "BTK") {
    //     _mint(conAddr, 1000000 * 10 ** 18);
    // }
    constructor() ERC20("BrownieToken", "BTK") {
        _mint(address(this), 1000000 * 10 ** 18);
    }

    // BTK minting function 
    function mint(address to, uint256 amount) private {
        _mint(to, amount * 10 ** 18);
    }

    /**
    * tokenTransfer BTK token transfer 함수 
    * token 거래 함수에 사용하기 위한 용도
    */
    // tokenTransfer BTK token transfer 함수 - token 거래 함수에 사용하기 위한 용도
    function tokenTransfer(address _from, address _to, uint256 _amount) external {
        require(balanceOf(_from) >= _amount * 10 ** 18, "Please check your Token");
        _transfer(_from, _to, _amount * 10 ** 18);
    }

    // token 수량 확인
    function checkBalance(address to) external view returns(uint256) {
        return balanceOf(to);
    }
}