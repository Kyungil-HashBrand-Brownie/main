import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Klaytn from '../img/swap/klaytn.png';
import Browny1 from '../img/swap/browny1.png';
import Arrow from '../img/swap/arrowRight.png';
import {getBtk, sellBtk, useAlert} from "api"
import AlertModal from 'components/AlertModal';


const Swap = () => {
    const bool = {false: 'KLAY', true: 'BTK'}
    const dispatch = useDispatch();

    const [swap, setSwap] = useState(true);
    const [exchange, setExchange] = useState('');

    const customAlert = useAlert();

    const amountInput = useRef('');

    const swapChange = () => {
        // let changeAmount = exchange;
        setSwap(!swap);
        amountInput.current.value = '';
        // setSwap(!swap)
        // setExchange(amountInput.current.value);
        // amountInput.current.value = changeAmount;
    }

    const checkValidation = () => {
        let value = amountInput.current.value
        let re = /[^0-9]/g;
        if (re.test(value)) {
            customAlert.open('숫자를 입력해 주세요!');
            amountInput.current.value = '';
            setExchange('');
        }
        else if (Number(value) > 10000) {
            customAlert.open('최대 거래 수량 초과 \n ')
            amountInput.current.value = '';
            setExchange('');
        }

        else {
            if (value != '') {
                // if (swap) setExchange((Number(value) * 7.22).toFixed(2).toString() + ' ' + bool[swap])
                if (swap) setExchange(parseInt(Number(value) * 7.22))
                else setExchange(parseInt(Number(value) / 7.22))
                // else setExchange((Number(value) / 7.22).toFixed(2).toString() + ' ' + bool[swap])
            }
            else setExchange('your exchange')
            // amountInput.current.value = ;
        }
        
    }

    const {myAddress} = useSelector(state =>state.nft);
    
    const swapToken = async () => {
        let amount = amountInput.current.value
        let status;
        if(Number(amount)){
            if(swap){
                const result = await getBtk(myAddress, amount)
                status = result.status
            }
            else{
                const result = await sellBtk(myAddress, amount)
                status = result.status
            }
            if(status){
                customAlert.open('스왑완료');
                dispatch({type: "WALLET_REFRESH"})
            }
            else customAlert.open("오류 발생")
        }
        else {
            customAlert.open("숫자를 입력해주세요")
        }
    }
    return (
        <div className='swap-box'>
            <AlertModal {...customAlert} />
            <div className='select-box'>
                <p className='swap-header'>SWAP</p>
                <div className='swap-select'>
                    <div className='swap-body'>
                        {<img 
                        className={!swap ? 'browny-icon' : 'klay-icon'} 
                        src={!swap ? Browny1 : Klaytn}
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
                        />}{bool[swap]}
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
                        <input 
                        className='swap-amount-input'
                        placeholder='input amount'
                        onChange={checkValidation}
                        // value={bool[!swap]}
                        ref={amountInput} />
                        
                        <img className='swap-arrow' src={Arrow} />
                        <input 
                        disabled
                        className='swap-amount-input'
                        placeholder='your exchange'
                        value={amountInput.current.value != '' ?  exchange : 'your exchange'}
                        /> 
                        {/* <div className='swap-exchange'>
                            4{bool[swap]}
                        </div> */}
                    </div>
                </div>
                <div className='swap-text-box'>
                    <p className='swap-text'>최대 10000(일만)개 거래 가능합니다</p>
                </div>
                <div className='swap-submit'>
                    <button 
                    className='swap-button'
                    onClick={swapToken}
                    type='button'>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default Swap