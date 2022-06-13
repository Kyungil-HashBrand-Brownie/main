import React from 'react'

const Swap = () => {
  return (
    <div className='swap-box'>
        <div className='select-box'>
            <h2>SWAP</h2>
            <div className='swap-select'>
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
                type='button'>확인</button>
            </div>
        </div>
    </div>
  )
}

export default Swap