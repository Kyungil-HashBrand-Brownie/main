import { mintingContract, mintingAddr, nftInstance, whitelistInstance, caver } from "configs";
import { getContractOwner } from "./viewMethods";


// value가 들지 않는 method의 경우 amount = 0 이 default라서 안 넣어줘도 됨
const methodExecution = async (from,encodedAbi,amount=0) =>{
    const result = await caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        //보통 myAddress
        from: from, 
        // 현재는 contract로만 보낸다
        to: mintingAddr, 
        gas: 3000000,
        data: encodedAbi,
        value: caver.utils.toPeb(amount, 'KLAY')
    })
    return result;
}


const getBtk = async (myAddress,amount)=> {
    try {
        const encodedAbi = await mintingContract.methods.getBtk(amount).encodeABI()
        const result = await methodExecution(myAddress,encodedAbi,amount)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const sellBtk = async (myAddress,amount)=> {
    try {
        const encodedAbi = await mintingContract.methods.sellBtk(amount).encodeABI()
        // btk를 transfer하는 함수이므로 value= 기본값0 이 되어야해서 amount 인자로 주면 안됨
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}


const stakeNFTs = async (myAddress,stakeIdArr)=> {
    try {
        // appove for nft transfer
        await nftInstance.methods.approveAllNFT(mintingAddr, stakeIdArr).send({ from: myAddress, gas: 300000, value: 0 })
        const encodedAbi = await mintingContract.methods.stakeNFTs(stakeIdArr).encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const unstakeNFTs = async (myAddress,unstakeIdArr)=> {
    try {
        await nftInstance.methods.approveAllNFT(mintingAddr, unstakeIdArr).send({ from: myAddress, gas: 300000, value: 0 })
        const encodedAbi = await mintingContract.methods.unstakeNFTs(unstakeIdArr).encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const claimReward = async (myAddress) => {
    try {
        const encodedAbi = await mintingContract.methods.callClaim().encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const batchMint = async (myAddress,count)=> {
    try {
        const encodedAbi = await mintingContract.methods.batchMint(count).encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const whitelistMint = async (myAddress,count)=> {
    try {
        const encodedAbi = await mintingContract.methods.whitelistMint(count).encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const addWhite = async (address) => {
    try{
        const contractOwner =await getContractOwner()
        const result = await whitelistInstance.methods.add(address).send({ from: contractOwner, gas: 300000, value: 0 })
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}
const removeWhite = async (address) => {
    try{
        const contractOwner =await getContractOwner()
        const result = await whitelistInstance.methods.remove(address).send({ from: contractOwner, gas: 300000, value: 0 })
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const removeSelectedWhites = async (addressArr) => {
    try{
        const contractOwner =await getContractOwner()
        const result = await whitelistInstance.methods.removeMany(addressArr).send({ from: contractOwner, gas: 300000, value: 0 })
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    methodExecution,
    getBtk,
    sellBtk,
    stakeNFTs,
    unstakeNFTs,
    claimReward,
    batchMint,
    whitelistMint,
    addWhite,
    removeWhite,
    removeSelectedWhites,
};