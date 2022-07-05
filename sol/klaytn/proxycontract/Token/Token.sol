//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BrownyToken is Initializable, ERC20Upgradeable {
    function initialize(string memory _name, string memory _symbol) external initializer {
        __ERC20_init(_name, _symbol);
        _mint(address(this), 1000000 * 10 ** 18);
    }

    function mint(address to, uint amount) private {
        _mint(to, amount);
    }

    /**
    * tokenTransfer BTK token transfer 함수 
    * token 거래 함수에 사용하기 위한 용도
    */
    // tokenTransfer BTK token transfer 함수 - token 거래 함수에 사용하기 위한 용도
    function tokenTransfer(address _from, address _to, uint256 _amount, uint256 _rate) external {
        require(balanceOf(_from) >= _amount * _rate, "Please check your Token");
        _transfer(_from, _to, _amount * _rate);
    }

    // token 수량 확인
    function checkBalance(address to) external view returns(uint256) {
        return balanceOf(to);
    }
}