// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
* author Kyungil_Team Brownie
* version 1.0
* ERC20기반 자체 토큰 
*/
contract BrownieToken is ERC20Burnable, Ownable {
    // token swap 용 token을 위해 contract addreess에 100000BTK 선발행
    constructor(address conAddr) ERC20("BrownieToken", "BTK") {
        _mint(conAddr, 100000 * 10 ** decimals());
    }

    // BTK minting function 
    function mint(address to, uint256 amount) private onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    /**
    * tokenTransfer BTK token transfer 함수 
    * token 거래 함수에 사용하기 위한 용도
    */
    // tokenTransfer BTK token transfer 함수 - token 거래 함수에 사용하기 위한 용도 -> token
    function tokenTransfer(address _from, address _to, uint256 _amount) public {
        require(_from.balance >= _amount * 10 ** decimals(), "Please check your balance");
        _transfer(_from, _to, _amount * 10 ** decimals());
    }

    // nft staking에 대한 보상용 minting function 
    function rewardMinting(address to, uint256 amount) public {
        _mint(to, amount * 10 ** decimals());
    }

    // token 수량 확인
    function checkBalance(address to) public view returns(uint256) {
        return balanceOf(to);
    }
}