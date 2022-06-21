import {abiJson, contractAddr, tokenAddr} from "configs";

const contractAbi = abiJson.output.abi;
const brownyContract = new window.caver.klay.Contract(contractAbi ,contractAddr);
const btkInstance = window.caver.kct.kip7.create(tokenAddr)

export {brownyContract, btkInstance};