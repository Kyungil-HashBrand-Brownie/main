// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "./TokenBeacon.sol";
import "./Token.sol";

contract TokenFactory {
    TokenBeacon immutable beacon;
    mapping(uint32 => address) private tokens;
    
    constructor(address _initBlueprint) {
        beacon = new TokenBeacon(_initBlueprint);
    }

    function buildToken(string memory _name, string memory _symbol, uint32 _version) external returns(address){
        BeaconProxy Token = new BeaconProxy(address(beacon), abi.encodeWithSelector(BrownyToken(address(0)).initialize.selector, _name, _symbol));
        tokens[_version] = address(Token);
        return address(Token);
    }

    function getTokenAddress(uint32 _version) public view returns(address) {
        return tokens[_version];
    }
    function getBeacon() public view returns(address) {
        return address(beacon);
    }
    function getImplementation() public view returns(address) {
        return beacon.implementation();
    }
}