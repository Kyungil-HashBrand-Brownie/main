import { votingAddr, caver, votingContract } from "configs";
import { getContractOwner } from "./viewMethods";

const methodExecution = async (from,encodedAbi,amount=0) =>{
    const result = await caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        //보통 myAddress
        from: from, 
        // 현재는 contract로만 보낸다
        to: votingAddr, 
        gas: 3000000,
        data: encodedAbi,
        value: caver.utils.toPeb(amount, 'KLAY')
    })
    return result;
}

const newProposal = async (myAddress)=> {
    try {
        const encodedAbi = await votingContract.methods.newProposal().encodeABI()
        const result = await methodExecution(myAddress,encodedAbi)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const startVote = async ()=> {
    try {
        const contractOwner = await getContractOwner()
        const encodedAbi = await votingContract.methods.endProposal().encodeABI()
        const result = await methodExecution(contractOwner,encodedAbi)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const endVote = async ()=> {
    try {
        const contractOwner = await getContractOwner()
        const encodedAbi = await votingContract.methods.endVote().encodeABI()
        const result = await methodExecution(contractOwner,encodedAbi)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const resetVote = async ()=> {
    try {
        const contractOwner = await getContractOwner()
        const encodedAbi = await votingContract.methods.restartVote().encodeABI()
        const result = await methodExecution(contractOwner,encodedAbi)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

const submitVote = async (myAddress, proposalId) => {
    try {
        const encodedAbi = await votingContract.methods.voting(Number(proposalId)).encodeABI() // radio의 value가 string이라 변환
        const result = await methodExecution(myAddress,encodedAbi)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    newProposal,
    startVote,
    endVote,
    resetVote,
    submitVote,
}