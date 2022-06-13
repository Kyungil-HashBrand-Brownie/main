// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BrownieToken is ERC20Burnable, Ownable {
    constructor(address conAddr) ERC20("BrownieToken", "BTK") {
        _mint(conAddr, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) private onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    function tokenTransfer(address _from, address _to, uint256 _amount) public {
        require(_from.balance >= _amount * 10 ** decimals(), "Please check your balance");
        _transfer(_from, _to, _amount * 10 ** decimals());
    }

    function rewardMintin(address to, uint256 amount) private {
        _mint(to, amount * 10 ** decimals());
    }
}