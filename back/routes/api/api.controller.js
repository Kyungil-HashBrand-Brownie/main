const {brownieContract} = require("../../configs")
const {contractAddr} = require("../../configs/contractAddr")
const Caver = require("caver-js")
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

const getBtk = async (req,res)=> {
    const {amount} = req.body
    try {
        const encodedAbi = await brownieContract.methods.getBtk(amount).encodeABI()
        res.send(encodedAbi)
        
    } catch (error) {
        console.log(error)
    }
}

const sellBtk = async (req,res)=> {
    const {amount} = req.body
    try {
        const encodedAbi = await brownieContract.methods.sellBtk(amount).encodeABI()
        res.send(encodedAbi)
    } catch (error) {
        console.log(error)
    }
}

// from 주소와 언스테이킹 상태의 nft tokenId를 인자로 필요로한다

const stakeNFTs = async (req,res)=> {
    try {
        // const encodedAbi = await brownieContract.methods.stakeNFTs(stakeIdArr).encodeABI()
        // res.send(await caver.rpc.klay.getBalance("0xAc45689e82aE9F93ED325b9254fe42BB77bA7849"))
        const test = await caver.rpc.klay.getBalance("0xAc45689e82aE9F93ED325b9254fe42BB77bA7849")
        const test2 = caver.utils.hexToNumberString(test)
        console.log(test2)
        // res.send(encodedAbi)
    } catch (error) {
        console.log(error)
    }
}

const unstakeNFTs = async (myAddress,unstakedIdArr)=> {
    try {
        const encodedAbi = await brownieContract.methods.unstakeNFTs(unstakedIdArr).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
    }
}



module.exports = { getBtk, sellBtk, stakeNFTs, unstakeNFTs }