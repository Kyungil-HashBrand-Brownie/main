// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "./MintingBeacon.sol";
import "./Minting.sol";

contract MintingFactory {
    MintingBeacon immutable beacon;
    mapping(uint32 => address) private mintings;
    
    constructor(address _initBlueprint) {
        beacon = new WhitelistBeacon(_initBlueprint);
    }

    function buildWhitelist(uint32 _version) external returns(address){
        BeaconProxy minting = new BeaconProxy(address(beacon), abi.encodeWithSelector(Minting(address(0)).initialize.selector));
        mintings[_version] = address(minting);
        return address(minting);
    }

    function getMintingAddress(uint32 _version) public view returns(address) {
        return mintings[_version];
    }
    function getBeacon() public view returns(address) {
        return address(beacon);
    }
    function getImplementation() public view returns(address) {
        return beacon.implementation();
    }
}