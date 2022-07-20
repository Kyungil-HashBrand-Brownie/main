import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SwapBody = ({ swap, Browny1, Klaytn, bool, swapChange, checkValidation, 
    amountInput, exchange, klayBalance, btkBalance, Arrow }) => {
    return (
        <>
            <div className='swap-select'>
                <div className='swap-body'>
                    {<img
                        className={!swap ? 'browny-icon' : 'klay-icon'}
                        src={!swap ? Browny1 : Klaytn}
                        alt="이미지를 찾을 수 없습니다"
                    />}
                    {bool[!swap]}
                </div>
                <FontAwesomeIcon
                    icon={faArrowRightArrowLeft}
                    className='swap-token-icon'
                    onClick={swapChange}
                />
                <div className='swap-body'>
                    {<img
                        className={swap ? 'browny-icon' : 'klay-icon'}
                        src={!swap ? Klaytn : Browny1}
                        alt="이미지를 찾을 수 없습니다"
                    />}
                    {bool[swap]}
                </div>
            </div>
            <div className='swap-ratio-outer'>
                <div className='swap-ratio-inner'>
                    <div className='swap-ratio'>1 KLAY = 7.22 BTK</div>
                    <div className='swap-ratio'>1 BTK = 0.14 KLAY</div>
                </div>
            </div>
            <div className='swap-amount-input-box'>
                <div className='swap-amount-inner'>
                    <div className='swap-input-flex'>
                        <input
                            className='swap-amount-input'
                            placeholder='1'
                            onChange={checkValidation}
                            ref={amountInput}
                        />
                        <div className='swap-amount-token'>{bool[!swap]}</div>
                    </div>

                    <img className='swap-arrow' src={Arrow} alt="이미지를 찾을 수 없습니다" />
                    <div className='swap-input-flex'>
                        <input
                            disabled
                            className='swap-amount-input'
                            placeholder={swap ? 7.22 : 0.14}
                            value={amountInput.current.value !== '' ? exchange : swap ? 7.22 : 0.14}
                        />
                        <div className='swap-amount-token'>{bool[swap]}</div>
                    </div>
                </div>
            </div>
            {/* {(exchange !== 'exchange') &&
                <div className='swap-user-token-outer'>
                    <div className='swap-user-token-head-outer'>
                        <div className='swap-user-token-header'>거래 후 잔액</div>
                    </div>
                    <div>
                        <div>
                            KLAY: {klayBalance + ' => '}
                            {
                                !swap ? (Number(klayBalance) + Number(exchange)).toFixed(2) : (Number(klayBalance) - Number(amountInput.current.value)).toFixed(2)
                            }
                        </div>
                        <div>
                            BTK: {btkBalance + ' => '}
                            {
                                !swap ? (Number(btkBalance) - Number(amountInput.current.value)).toFixed(4) : (Number(btkBalance) + Number(exchange)).toFixed(4)
                            }
                        </div>
                    </div>
                </div>
            } */}
        </>
    )
}

export default SwapBody