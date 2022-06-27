// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BrownyToken is ERC20Burnable, Ownable {
    constructor(address conAddr) ERC20("BrownyToken", "BTK") {
        _mint(conAddr, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) private onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    function getBtk(address _tokenAddr, address _user, uint256 _amount, uint256 _value) public payable {
        require(_value >= _amount * 10 ** decimals(), "Please check your balance");
        _transfer(_tokenAddr, _user, _amount * 10 ** decimals());
    }

    function sellBtk(address _tokenAddr, address _user, uint256 _amount) public {
        require(_tokenAddr.balance >= _amount * 10 ** decimals(), "Please check your balance");
        _transfer(_user, _tokenAddr, _amount * 10 ** decimals());
    }

    function tokenTransfer(address _from, address _to, uint256 _amount) public {
        require(_from.balance >= _amount * 10 ** decimals(), "Please check your balance");
        _transfer(_from, _to, _amount * 10 ** decimals());
    }

    function viewThis() public view returns(address) {
        return address(this);
    }

    function balan() public view returns(uint256) {
        return address(this).balance;
    }
}