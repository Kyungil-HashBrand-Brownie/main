import { brownyContract,contractAddr } from "configs";

// value가 들지 않는 method의 경우 amount = 0 이 default라서 안 넣어줘도 됨
const methodExcution = async (from,encodedAbi,amount=0) =>{
    const result = await window.caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        //보통 myAddress
        from: from, 
        // 현재는 contract로만 보낸다
        to: contractAddr, 
        gas: 3000000,
        data: encodedAbi,
        value: window.caver.utils.toPeb(amount, 'KLAY')
    })
    return result;
}


const getBtk = async (myAddress,amount)=> {
    try {
        const encodedAbi = await brownyContract.methods.getBtk(amount).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi,amount)
        return result
    } catch (error) {
        console.log(error)
    }
}

const sellBtk = async (myAddress,amount)=> {
    try {
        const encodedAbi = await brownyContract.methods.sellBtk(amount).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi,amount)
        return result
    } catch (error) {
        console.log(error)
    }
}

// from 주소와 언스테이킹 상태의 nft tokenId를 인자로 필요로한다
const stakeNFTs = async (myAddress,stakeIdArr)=> {
    try {
        const encodedAbi = await brownyContract.methods.stakeNFTs(stakeIdArr).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
    }
}

const unstakeNFTs = async (myAddress,unstakedIdArr)=> {
    try {
        const encodedAbi = await brownyContract.methods.unstakeNFTs(unstakedIdArr).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
    }
}

const batchMint = async (myAddress,count)=> {
    try {
        const encodedAbi = await brownyContract.methods.batchMint(count).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
    }
}

const whitelistMint = async (myAddress,count)=> {
    try {
        const encodedAbi = await brownyContract.methods.whitelistMint(count).encodeABI()
        const result = await methodExcution(myAddress,encodedAbi)
        return result
    } catch (error) {
        console.log(error)
    }
}


export {methodExcution, getBtk, sellBtk, stakeNFTs, unstakeNFTs, batchMint, whitelistMint};