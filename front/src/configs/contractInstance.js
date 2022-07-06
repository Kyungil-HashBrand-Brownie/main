import {tokenAbi, nftAbi, mintingAbi, votingAbi, whitelistAbi} from "./abi"
import {tokenAddr, whitelistAddr, nftAddr, mintingAddr, votingAddr} from "./contractAddress";
import caver from "./caverjs"


const tokenInstance = caver.kct.kip7.create(tokenAddr);
const whitelistInstance = new caver.klay.Contract(whitelistAbi ,whitelistAddr);
const nftInstance = new caver.klay.Contract(nftAbi ,nftAddr);
const mintingContract = new caver.klay.Contract(mintingAbi ,mintingAddr);
const votingContract = new caver.klay.Contract(votingAbi ,votingAddr);


export { tokenInstance, nftInstance, mintingContract, votingContract, whitelistInstance };