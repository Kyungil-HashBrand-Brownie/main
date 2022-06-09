import React, { useEffect, useState } from 'react'
import {WhiteImg} from '../img'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {Container,Row , Col , Button} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import contractAbi from "../abi.json"
import Browny from '../img/browny9.png'

const StyledMain = styled.div`
    width: 320px;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    background-color: white;
    opacity: 95%;
    border: 3px solid black;
    border-radius: 6px;
    text-align: center;
    display: flex ;
    flex-wrap: wrap;
    justify-content:center;
    background: rgb(243, 224, 224);
`;

const StyledDiv = styled.div`
    width: 220px;
    height: 220px;
    /* padding: 0.375rem 0.75rem; */
    font-size: 1rem;
    color: green;
    line-height: 1.5;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 8px;
    /* margin-top: 20px; */
    background: rgb(144, 214, 32);
  /* border: 1px solid black; */
`;


const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0.375rem 0.75rem;
    border-radius: 20rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;
    color: white;
    background-color: blue;
    margin: 0 6px ;
`;

const StyledBar = styled.div`
    margin-bottom: 20px;
    width: 200px;
    height: 20px;
    text-align: center;
`;

const WhiteSale = () => {
    const { myContract } = useSelector(state => state.nft);

    const [count, setCount] = useState(1)

    const countAdd = () => {
        // counting 
        if (count < 5) setCount(count + 1);
        else alert("최대 5개까지 민팅 가능합니다.")
    }

    const countMinus = () => {
        if (count > 0) setCount(count - 1);
    }

    const whiteMint = async () => {
        // await window.caver.klay.sendTransaction({
        //   type: 'VALUE_TRANSFER',
        //   from: window.klaytn.selectedAddress,
        //   to: '0x0000000000000000000000000000000000000000',
        //   value: window.caver.utils.toPeb('1', 'KLAY'),
        //   gas: 8000000
        // })
    
        await myContract.methods.whitelistMint(window.klaytn.selectedAddress,count).send({from:window.klaytn.selectedAddress, gas: 300000 ,value: window.caver.utils.toPeb(count, 'KLAY')})
        // alert("송금 성공")
    
    }

  return (
    <div className='whitelist'>
        <StyledMain >
            <h2 className="mint-title">WhiteSale</h2>
            <StyledDiv >
                <img src={Browny} style={{width: 220, height: 220}}/>
            </StyledDiv>
            <StyledBar >
                <ProgressBar animated now={65} />
            </StyledBar>
            <div className="mint-count-box">
                <StyledButton onClick={() => countMinus()}>  - </StyledButton>
                <span className="mint-count">Mint : {count}</span>
                <StyledButton onClick={()=> countAdd()}> +</StyledButton>
            </div>
            
            <Container className="mint-info-box">
            <Row>
                <Col>Price</Col>
                <Col>60 KLAY</Col>
            </Row>
            <Row>
                <Col>Per transaction</Col>
                <Col>최대 5 개</Col>
            </Row>
            <Row>
                <Col>Amount</Col>
                <Col>limited</Col>
            </Row>
            </Container>
            <br />
            {/* <Button className="mint-wal-connect-btn" variant="primary">지갑 연결하기 </Button>{' '} */}
            <Button 
                className="mint-wal-connect-btn" 
                variant="primary"
                onClick={whiteMint}
                >노진형 nft받기 </Button>{' '}

        </StyledMain>
    </div>
  )
}

export default WhiteSale