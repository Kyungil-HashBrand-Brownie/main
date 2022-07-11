import React from 'react'

const SwapFooter = ({ swapToken }) => {
    return (
        <>
            <div className='swap-text-box'>
                <div className='swap-text'>수수료: 0.023 KLAY</div>
                <div className='swap-text'>최대 10000(일만)개 거래 가능합니다</div>
            </div>
            <div className='swap-submit'>
                <button
                    className='swap-button'
                    onClick={swapToken}
                    type='button'>Submit</button>
            </div>
        </>
    )
}

export default SwapFooter