import { contractAddr } from "configs";
const methodExcution = async (from,amount,encodedAbi) =>{
    const tx = await window.caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        from: from,
        to: contractAddr,
        gas: 300000,
        data: encodedAbi,
        value: window.caver.utils.toPeb(amount, 'KLAY')
    })
    return tx;
}

export default methodExcution;