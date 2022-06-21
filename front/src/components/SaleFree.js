import React, { useEffect, useState } from 'react'
import { FreeImg } from '../img'
import styled from "styled-components";
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Browny from '../img/browny8.png';
import {brownieContract, contractAddr} from "configs";


// 리팩터링 - 코드를 단순화하는 작업 불필요한 중복요소들을 제거
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
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    color: green;
    line-height: 1.5;
    background-color: rgb(144, 214, 32);
    /* margin-top: 20px; */
    margin-bottom: 30px;
    margin-left: 20px;
    border-radius: 8px;
    
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
    margin: 0 6px;
`;

const StyledBar = styled.div`
    margin-bottom: 20px;
    width: 200px;
    height: 20px;
    text-align: center;
`;

const FreeSale = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { myAddress } = useSelector(state => state.nft);

    
    const preMint = async () => {
        if(!myAddress){
            return alert("지갑을 먼저 연결해주세요")
        }
        try{
            const conData = await brownieContract.methods.batchMint(count).encodeABI()
            const result = await window.caver.klay.sendTransaction({
                type: 'SMART_CONTRACT_EXECUTION',
                from:myAddress, 
                to:contractAddr,
                data:conData,
                gas: 3000000
            })
            if(result.status){
                dispatch({type: "WALLET_REFRESH"})
                alert("해당 지갑 주소로 민팅되었습니다!");
                // navigate('/');
            }
            else alert("transaction fail")
        }
        catch(e){
            alert("카이카스 서명 거부됨")
        }
        
    }

    // const dispatch = useDispatch(state => state.nft)

    const [count, setCount] = useState(1)


    const countAdd = () => {
        if (count < 5) setCount(count + 1);
        else alert("최대 5개까지 민팅 가능합니다.");
    }

    const countMinus = () => {
        if (count > 0) setCount(count - 1);
    }

    return (
        <div className="freelist">
            <StyledMain >
                <h2 className="mint-title">Pre-Sale</h2>
                <div className='mint-img-container'>
                    <StyledDiv >
                        <img src={Browny} style={{ width: 187, height: 220 }} />
                    </StyledDiv>
                </div>
                <div className='mint-count-box'>
                    <StyledButton onClick={() => countMinus()}>  - </StyledButton>
                    <span>Mint : {count}</span>
                    <StyledButton onClick={() => countAdd()}> +</StyledButton>
                </div>
                <Container className="mint-info-box">
                    <Row>
                        <Col>Price</Col>
                        <Col>2 BTK</Col>
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
                <Button className="mint-wal-connect-btn" variant="success" onClick={preMint}>Mint</Button>{' '}

            </StyledMain>
        </div>
    )
}
export default FreeSale