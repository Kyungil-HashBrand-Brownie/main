<<<<<<< HEAD
import React, { useState } from 'react'

const Swap = () => {
    const [swap, setSwap] = useState('BTK');
    const swapChange = (e) => {
        if (e.target.value == 'KLAY') setSwap('BTK')
        else setSwap('KLAY')
=======
import React from 'react'
import { useSelector } from 'react-redux'

const Swap = () => {
    const {myContract} = useSelector(state =>state.nft);
    
    const swapToken = async () => {
        // await myContract.methods.instanceGetBtk(1).send({from:window.klaytn.selectedAddress, gas: 300000 ,value: window.caver.utils.toPeb(1, 'KLAY')})
>>>>>>> f120c2bd0e53cafd8d08b686debcc32d82f61202
    }
    return (
        <div className='swap-box'>
            <div className='select-box'>
                <h2>SWAP</h2>
                <div className='swap-select'>
<<<<<<< HEAD
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
                    금액: <input /> 
                </div>
                <div className='swap-submit'>
                    <button 
                    // className='swap-submit'
                    type='button'>확인</button>
                </div>
            </div>
        </div>
  )
=======
                    <select className='swapL-select'>
                        <option>선택</option>
                        <option>BTK</option>
                        <option>KLAY</option>
                    </select>
                    to
                    <select className='swapR-select'>
                        <option>선택</option>
                        <option>BTK</option>
                        <option>KLAY</option>
                    </select>
                </div>
                <div className='swap-amount-input'>
                    금액: <input />
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
>>>>>>> f120c2bd0e53cafd8d08b686debcc32d82f61202
}

export default Swap