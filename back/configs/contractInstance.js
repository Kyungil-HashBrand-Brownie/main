const {contractAddr,tokenAddr} = require("./contractAddr")
const abiJson = require("./contractAbi")
const Caver = require("caver-js")
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

const contractAbi = abiJson.output.abi;
const brownieContract = new caver.klay.Contract(contractAbi ,contractAddr);
const btkInstance = caver.kct.kip7.create(tokenAddr)

module.exports =  {brownieContract, btkInstance};