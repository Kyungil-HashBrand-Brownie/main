import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Klaytn from '../img/swap/klaytn.png';
import Browny1 from '../img/swap/browny1.png';
import Arrow from '../img/swap/arrowRight.png';
import { addBTK, getBtk, sellBtk, useAlert } from "api"
import AlertModal from 'components/AlertModal';
import SwapHeader from 'components/swap/SwapHeader';
import SwapBody from 'components/swap/SwapBody';
import SwapFooter from 'components/swap/SwapFooter';

const Swap = () => {
    const bool = { false: 'KLAY', true: 'BTK' }
    const dispatch = useDispatch();

    const [swap, setSwap] = useState(true);
    const [exchange, setExchange] = useState('exchange');

    const customAlert = useAlert();

    const amountInput = useRef('');

    const swapChange = () => {
        setSwap(!swap);
        amountInput.current.value = '';
    }

    const checkValidation = () => {
        let value = amountInput.current.value;
        let re = /[^0-9]/g;
        if (re.test(value)) {
            customAlert.open('숫자를 입력해 주세요!');
            amountInput.current.value = '';
            setExchange('exchange');
        }
        else if (Number(value) > 10000) {
            customAlert.open('최대 거래 수량 초과 \n ')
            amountInput.current.value = '';
            setExchange('exchange');
        }

        else {
            if (value !== '') {
                if (swap) setExchange(parseInt(Number(value) * 7.22))
                else setExchange(parseInt(Number(value) / 7.22))
            }
            else setExchange('exchange')
        }
    }

    const { myAddress, klayBalance, btkBalance } = useSelector(state => state.nft);

    const swapToken = async () => {
        let amount = amountInput.current.value
        let status;
        if (Number(amount)) {
            if (swap) {
                const result = await getBtk(myAddress, amount)
                status = result.status
            }
            else {
                const result = await sellBtk(myAddress, amount)
                status = result.status
            }
            if (status) {
                customAlert.open('스왑완료');
                dispatch({ type: "WALLET_REFRESH" })
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
                <SwapHeader 
                    addBTK={addBTK} 
                    Browny1={Browny1}
                    myAddress={myAddress}
                    klayBalance={klayBalance}
                    btkBalance={btkBalance}
                />

                <SwapBody 
                    swap={swap}
                    Browny1={Browny1}
                    Klaytn={Klaytn}
                    Arrow={Arrow}
                    bool={bool}
                    swapChange={swapChange}
                    checkValidation={checkValidation}
                    amountInput={amountInput}
                    exchange={exchange}
                    myAddress={myAddress}
                    klayBalance={klayBalance}
                    btkBalance={btkBalance}
                />
                
                <SwapFooter swapToken={swapToken} />
            </div>
        </div>
    )
}

export default Swap