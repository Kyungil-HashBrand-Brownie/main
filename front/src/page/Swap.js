import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';

const Swap = () => {
    const [swap, setSwap] = useState('BTK');

    const amountInput = useRef();

    const swapChange = (e) => {
        if (e.target.value === 'KLAY') setSwap('BTK')
        else setSwap('KLAY')
    }

    const {myContract} = useSelector(state =>state.nft);
    
    const swapToken = async () => {
        let amount = amountInput.current.value
        if(Number(amount)){
            if(swap === "BTK"){
                await myContract.methods.instanceGetBtk(amount)
                .send({
                    from:window.klaytn.selectedAddress, 
                    gas: 300000,
                    value: window.caver.utils.toPeb(amount, 'KLAY')})
            }
            // payable이 아닌 함수에는 value를 주면 안된다
            else if (swap === "KLAY"){
                await myContract.methods.instanceSellBtk(amount)
                .send({
                    from:window.klaytn.selectedAddress, 
                    gas: 300000})
            }
        }
        else {
            alert("숫자를 입력해주세요")
            amountInput.current.value = ""
        }
    }
    return (
        <div className='swap-box'>
            <div className='select-box'>
                <h2>SWAP</h2>
                <div className='swap-select'>
                    <select
                    onChange={swapChange} 
                    className='swapL-select'
                    >
                        <option value='KLAY'>KLAY</option>
                        <option value='BTK'>BTK</option>
                    </select>
                    to 
                    {swap}
                </div>
                <div className='swap-amount-input'>
                    금액: <input ref={amountInput} /> 
                </div>
                <div className='swap-submit'>
                    <button 
                    // className='swap-submit'
                    onClick={swapToken}
                    type='button'>확인</button>
                </div>
            </div>
        </div>
  )
}

export default Swap