import {tokenAbi, nftAbi, mintingAbi, votingAbi} from "./abi"
import {tokenAddr, nftAddr, mintingAddr, votingAddr} from "./contractAddress";
import caver from "./caverjs"


const tokenInstance = caver.kct.kip7.create(tokenAddr);
const nftInstance = new caver.klay.Contract(nftAbi ,nftAddr);
const mintingContract = new caver.klay.Contract(mintingAbi ,mintingAddr);
const votingContract = new caver.klay.Contract(votingAbi ,votingAddr);


export { tokenInstance, nftInstance, mintingContract, votingContract };