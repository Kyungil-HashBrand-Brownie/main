// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenBeacon is Ownable {
    UpgradeableBeacon immutable beacon;
    address public blueprint;
    constructor(address _initBlueprint) {
        beacon = new UpgradeableBeacon(_initBlueprint);
        blueprint = _initBlueprint;
        transferOwnership(tx.origin);
    }

    function upgrade(address _newBlueprint) public onlyOwner {
        beacon.upgradeTo(_newBlueprint);
        blueprint = _newBlueprint;
    }
    function implementation() public view returns(address) {
        return beacon.implementation();
    }
}