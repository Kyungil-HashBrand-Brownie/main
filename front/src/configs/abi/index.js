import tokenJson from "./tokenAbi"
import nftJson from "./nftAbi"
import mintingJson from "./mintingAbi"
import votingJson from "./votingAbi"

const tokenAbi = tokenJson.output.abi
const nftAbi = nftJson.output.abi
const mintingAbi = mintingJson.output.abi
const votingAbi = votingJson.output.abi

export {tokenAbi, nftAbi, mintingAbi, votingAbi}