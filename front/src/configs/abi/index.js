import tokenJson from "./tokenAbi"
import nftJson from "./nftAbi"
import mintingJson from "./mintingAbi"
import votingJson from "./votingAbi"
import whitelistJson from "./whitelistAbi"

const tokenAbi = tokenJson.output.abi
const nftAbi = nftJson.output.abi
const mintingAbi = mintingJson.output.abi
const votingAbi = votingJson.output.abi
const whitelistAbi = whitelistJson.output.abi

export {tokenAbi, nftAbi, mintingAbi, votingAbi, whitelistAbi}