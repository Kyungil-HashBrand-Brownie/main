import { mintingContract,mintingAddr } from "configs";

// value가 들지 않는 method의 경우 amount = 0 이 default라서 안 넣어줘도 됨
const methodExecution = async (from,encodedAbi,amount=0) =>{
    const result = await window.caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        //보통 myAddress
        from: from, 
        // 현재는 contract로만 보낸다
        to: mintingAddr, 
        gas: 3000000,
        data: encodedAbi,
        value: window.caver.utils.toPeb(amount, 'KLAY')
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

// from 주소와 언스테이킹 상태의 nft tokenId를 인자로 필요로한다
const stakeNFTs = async (myAddress,stakeIdArr)=> {
    try {
        const encodedAbi = await mintingContract.methods.stakeNFTs(stakeIdArr).encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const unstakeNFTs = async (myAddress,unstakedIdArr)=> {
    try {
        const encodedAbi = await mintingContract.methods.unstakeNFTs(unstakedIdArr).encodeABI()
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


export {methodExecution, getBtk, sellBtk, stakeNFTs, unstakeNFTs, batchMint, whitelistMint};