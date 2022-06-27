import mintingJson from "./mintingAbi"
import nftJson from "./nftAbi"
import tokenJson from "./tokenAbi"
import { tokenAddr, nftAddr, mintingAddr} from "configs";

const tokenAbi = tokenJson.output.abi
const mintingAbi = mintingJson.output.abi
const nftAbi = nftJson.output.abi

const tokenInstance = window.caver.kct.kip7.create(tokenAddr);
const nftInstance = new window.caver.klay.Contract(nftAbi ,nftAddr);
const mintingContract = new window.caver.klay.Contract(mintingAbi ,mintingAddr);


export { tokenInstance, nftInstance, mintingContract };