import { caver, tokenInstance } from "configs";

const pebToFixed = (peb,fixId) => {
    const toKlay = caver.utils.convertFromPeb(peb);
    const fixed = parseFloat(toKlay).toFixed(fixId);
    return fixed;
}

const getTokenBalance = async (address) => {
    const pebKLAYBalance = await caver.klay.getBalance(address)
    const fixedKLAYBalance = pebToFixed(pebKLAYBalance,2)

    const pebBTKBalance = await tokenInstance.balanceOf(address) //BigNumber 객체
    const fixedBTKBalance = pebToFixed(pebBTKBalance,4)

    return {
        KLAY : fixedKLAYBalance,
        BTK : fixedBTKBalance
    }
}


export {
    pebToFixed,
    getTokenBalance,
}