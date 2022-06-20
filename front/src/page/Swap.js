import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Klaytn from '../img/swap/klaytn.png';
import Brownie from '../img/swap/brownie.png';
import Brownie1 from '../img/swap/brownie1.png';
import Arrow from '../img/swap/arrowRight.png';
import {brownieContract, contractAddr} from "configs";
import {getBtk, sellBtk} from "api/contractMethods"


const Swap = () => {
    const bool = {false: 'KLAY', true: 'BTK'}
    const dispatch = useDispatch();

    const [swap, setSwap] = useState(true);
    const [exchange, setExchange] = useState('');

    const amountInput = useRef();

    const swapChange = () => {
        setSwap(!swap)
    }

    const checkValidation = () => {
        let value = amountInput.current.value
        // let testLen = value.length - bool[!swap].length - 1;
        // value = value.slice(0,testLen);
        // console.log(testLen)
        // console.log(value.slice(0, testLen));
        // value = value.slice(0, testLen);
        let re = /[^0-9]/g;
        if (re.test(value)) {
            alert('숫자를 입력해 주세요!');
            amountInput.current.value = '';
            setExchange('');
        }
        else if (Number(value) > 1000000) {
            alert('최대 거래 수량 초과 \n ')
            amountInput.current.value = '';
            setExchange('');
        }

        else {
            if (swap) setExchange(parseInt(Number(value) / 77).toString() + ' ' + bool[swap])
            else setExchange(parseInt(Number(value) * 77).toString() + ' ' + bool[swap])
            // amountInput.current.value = ;
        }
        
    }

    const {myAddress} = useSelector(state =>state.nft);
    
    const swapToken = async () => {
        let amount = amountInput.current.value
        console.log(brownieContract);
        if(Number(amount)){
            if(swap){
                await getBtk(myAddress,amount)
            }
            else{
                await sellBtk(myAddress, amount)
            }
            console.log('test');
            alert('스왑완료');
            dispatch({type: "WALLET_REFRESH"})
        }
        else {
            alert("숫자를 입력해주세요")
            amountInput.current.value = "";
        }
        console.log("end")
    }
    return (
        <div className='swap-box'>
            <div className='select-box'>
                <p className='swap-header'>SWAP</p>
                <div className='swap-select'>
                    <div className='swap-body'>
                        {<img 
                        className={!swap ? 'brownie-icon' : 'klay-icon'} 
                        src={!swap ? Brownie1 : Klaytn}
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
                        className={swap ? 'brownie-icon' : 'klay-icon'} 
                        src={!swap ? Klaytn : Brownie1}
                        />}{bool[swap]}
                    </div>
                </div>
                <div className='swap-amount-input-box'>
                    <div className='swap-amount-inner'>
                        <input 
                        className='swap-amount-input'
                        placeholder='input amount'
                        onChange={checkValidation}
                        ref={amountInput} /> 
                        <img className='swap-arrow' src={Arrow} />
                        <input 
                        disabled
                        className='swap-amount-input'
                        placeholder='your exchange'
                        value={amountInput.current ? exchange : 'your exchange'}
                        // value={exchange}
                        /> 
                        {/* <div className='swap-exchange'>
                            4{bool[swap]}
                        </div> */}
                    </div>
                </div>
                <div className='swap-text-box'>
                    <p className='swap-text'>최대 1000000개까지 거래 가능합니다</p>
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