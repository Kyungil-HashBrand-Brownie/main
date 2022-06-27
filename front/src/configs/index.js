import mintingJson from "./mintingAbi"
import nftJson from "./nftAbi"
import tokenJson from "./tokenAbi"

const tokenAbi = tokenJson.output.abi
const mintingAbi = mintingJson.output.abi
const nftAbi = nftJson.output.abi

export {mintingAbi, nftAbi, tokenAbi}
export {tokenAddr, nftAddr, mintingAddr} from "./contractAddress"
export { tokenInstance, nftInstance, mintingContract } from "./contractInstance"