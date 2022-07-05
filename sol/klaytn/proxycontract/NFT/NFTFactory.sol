// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "./NFTBeacon.sol";
import "./NFT.sol";

contract NFTFactory {
    NFTBeacon immutable beacon;
    mapping(uint32 => address) private NFTs;
    
    constructor(address _initBlueprint) {
        beacon = new NFTBeacon(_initBlueprint);
    }

    function buildNFT(string memory _name, string memory _symbol, string memory _ipfs, address _whitelistCon, uint32 _version) external returns(address){
        BeaconProxy NFT = new BeaconProxy(address(beacon), abi.encodeWithSelector(BrownyNFT(address(0)).initialize.selector, _name, _symbol, _ipfs, _whitelistCon));
        NFTs[_version] = address(NFT);
        return address(NFT);
    }

    function getNFTAddress(uint32 _version) public view returns(address) {
        return NFTs[_version];
    }
    function getBeacon() public view returns(address) {
        return address(beacon);
    }
    function getImplementation() public view returns(address) {
        return beacon.implementation();
    }
}