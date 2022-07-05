// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "./WhitelistBeacon.sol";
import "./Whitelist.sol";

contract WhitelistFactory {
    WhitelistBeacon immutable beacon;
    mapping(uint32 => address) private whitelists;
    
    constructor(address _initBlueprint) {
        beacon = new WhitelistBeacon(_initBlueprint);
    }

    function buildWhitelist(uint32 _version) external returns(address){
        BeaconProxy whitelist = new BeaconProxy(address(beacon), abi.encodeWithSelector(Whitelist(address(0)).initialize.selector));
        whitelists[_version] = address(whitelist);
        return address(whitelist);
    }

    function getWhitelistAddress(uint32 _version) public view returns(address) {
        return whitelists[_version];
    }
    function getBeacon() public view returns(address) {
        return address(beacon);
    }
    function getImplementation() public view returns(address) {
        return beacon.implementation();
    }
}