import mintingJson from "./mintingAbi"
import nftJson from "./nftAbi"
import tokenJson from "./tokenAbi"
import { tokenAddr, nftAddr, mintingAddr} from "configs";
import caver from "./caverjs"

const tokenAbi = tokenJson.output.abi
const mintingAbi = mintingJson.output.abi
const nftAbi = nftJson.output.abi

const tokenInstance = caver.kct.kip7.create(tokenAddr);
const nftInstance = new caver.klay.Contract(nftAbi ,nftAddr);
const mintingContract = new caver.klay.Contract(mintingAbi ,mintingAddr);


export { tokenInstance, nftInstance, mintingContract };