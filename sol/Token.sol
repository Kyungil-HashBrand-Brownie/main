// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BrownieToken is ERC20Burnable, Ownable {
    constructor() ERC20("BrownieToken", "BTK") {
        _mint(address(this), 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) private onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    function getBtk(address _tokenAddr, address _user, uint256 _amount, uint256 _value) public payable {
        require(_value >= _amount * 10 ** decimals(), "Please check msg.value");
        _transfer(_tokenAddr, _user, _amount * 10 ** decimals());
    }

    function sellBtk(address _tokenAddr, address _user, uint256 _amount, uint256 _value) public {
        require(_tokenAddr.balance >= _amount * 10 ** decimals(), "Please check msg.value");
        _transfer(_user, _tokenAddr, _amount * 10 ** decimals());
        payable(_user).transfer(_value);
    }

    function viewThis() public view returns(address) {
        return address(this);
    }

    function balan() public view returns(uint256) {
        return address(this).balance;
    }
}