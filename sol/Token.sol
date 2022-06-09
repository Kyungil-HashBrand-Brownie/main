// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BrownieToken is ERC20Burnable, Pausable, Ownable {
    // ERC20 erc20;

    constructor() ERC20("BrownieToken", "BTK") {
        _mint(address(this), 100000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal whenNotPaused override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    // from address to msg.sender amount token양
    function getBtk(uint256 amount) public payable {
        require(msg.value >= amount * 10 ** decimals(), "Please check msg.value");
        _transfer(address(this), msg.sender, amount * 10 ** decimals());
    }

    function sellBtk(uint256 amount) public {
        require(address(this).balance >= amount * 10 ** decimals(), "Please check msg.value");
        _transfer(msg.sender, address(this), amount * 10 ** decimals());
        payable(msg.sender).transfer(address(this).balance);
    }

    function viewThis() public view returns(address) {
        return address(this);
    }

    function balan() public view returns(uint256) {
        return address(this).balance;
    }
}