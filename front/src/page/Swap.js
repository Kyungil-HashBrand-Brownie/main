import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';

const Swap = () => {
    const [swap, setSwap] = useState('BTK');

    const amountInput = useRef();

    const swapChange = (e) => {
        if (e.target.value === 'KLAY') setSwap('BTK')
        else setSwap('KLAY')
    }

    const {brownieContract, myAddress} = useSelector(state =>state.nft);
    
    const swapToken = async () => {
        let amount = amountInput.current.value
        if(Number(amount)){
            if(swap === "BTK"){
                try {
                    const conData = await brownieContract.methods.getBtk(amount).encodeABI()
                    const con = await window.caver.klay.sendTransaction({
                        type: 'SMART_CONTRACT_EXECUTION',
                        from: myAddress,
                        to: '0xB965D7Ba9814BaF32EE004c165288365BA65eCb5',
                        gas: 300000,
                        data:conData,
                        value: window.caver.utils.toPeb(amount, 'KLAY')
                    })
                    console.log(con)
                } catch (error) {
                    console.log(error)
                }
            }
            else if (swap === "KLAY"){
                try {
                    const conData = await brownieContract.methods.sellBtk(amount).encodeABI()
                    const test = await window.caver.klay.sendTransaction({
                        type: 'SMART_CONTRACT_EXECUTION',
                        from: myAddress, 
                        to:'0xB965D7Ba9814BaF32EE004c165288365BA65eCb5',
                        data:conData,
                        gas: 300000
                    })
                    console.log(test)
                } catch (error) {
                    console.log(error)
                }       
            }
            console.log('test');
            alert('스왑완료');  
        }
        else {
            alert("숫자를 입력해주세요")
            amountInput.current.value = ""
        }
        console.log("end")
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