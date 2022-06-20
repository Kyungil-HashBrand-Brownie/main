import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Klaytn from '../img/swap/klaytn.png';
import Brownie from '../img/swap/brownie.png';
import Brownie1 from '../img/swap/brownie1.png';
import {brownieContract, contractAddr} from "configs";

const Swap = () => {
    const bool = {false: 'KLAY', true: 'BTK'}
    const dispatch = useDispatch();

    const [swap, setSwap] = useState(true);

    const amountInput = useRef();

    const swapChange = () => {
        setSwap(!swap)
    }

    const { myAddress } = useSelector(state =>state.nft);
    
    const swapToken = async () => {
        let amount = amountInput.current.value
        console.log(brownieContract);
        if(Number(amount)){
            if(swap === "BTK"){
                try {
                    const conData = await brownieContract.methods.getBtk(amount).encodeABI()
                    const con = await window.caver.klay.sendTransaction({
                        type: 'SMART_CONTRACT_EXECUTION',
                        from: myAddress,
                        to: contractAddr,
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
                        to:contractAddr,
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
            dispatch({type: "WALLET_REFRESH"})
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