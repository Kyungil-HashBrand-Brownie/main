import React, { useState } from 'react'

const Swap = () => {
    const [swap, setSwap] = useState('BTK');
    const swapChange = (e) => {
        if (e.target.value == 'KLAY') setSwap('BTK')
        else setSwap('KLAY')
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
}

export default Swap