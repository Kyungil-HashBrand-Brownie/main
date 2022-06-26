import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {brownyContract, contractAddr} from "configs";
import { batchMint } from 'api';


// 리팩터링 - 코드를 단순화하는 작업 불필요한 중복요소들을 제거
const StyledMain = styled.div`
    width: 320px;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    background-color: white;
    opacity: 95%;
    border-radius: 10px;
    text-align: center;
    display: flex ;
    flex-wrap: wrap;
    justify-content:center;
    background: rgb(243, 224, 224);
`;

const StyledDiv = styled.div`
    padding: 0.375rem 0;
    font-size: 1rem;
    color: green;
    line-height: 1.5;
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
    background-color: #361500;
    margin: 0 6px;
`;


const PreSale = ({ data }) => {
    // console.log('data: ', data)
    const {amount, img, price, title} = data;
    const dispatch = useDispatch();
    const { myAddress } = useSelector(state => state.nft);

    const [count, setCount] = useState(1)    
    const [totalCnt, setTotalCnt] = useState(0);

    const countAdd = () => {
        if (count < 5) setCount(count + 1);
        else alert("최대 5개까지 민팅 가능합니다.");
    }

    const countMinus = () => {
        if (count > 1) setCount(count - 1);
    }

    const preMint = async () => {
        if(!myAddress){
            return alert("지갑을 먼저 연결해주세요")
        }
        const result = await batchMint(myAddress,count)
        console.log(result)
        if(result.status){
            dispatch({type: "WALLET_REFRESH"})
            alert("해당 지갑 주소로 민팅되었습니다!");
        }
        else alert("transaction fail")
    }

    // 전체 민팅 갯수
    const getMintCnt = async ()=> {
        const totalCnt = await brownyContract.methods.nftNum().call()
        setTotalCnt(totalCnt)
    }

    useEffect(() => {
        getMintCnt()
    }, [])

    return (
        <div className="freelist">
            <StyledMain >
                <div className='mint-title-box'>
                    <h2 className="mint-title">{title}</h2>
                </div>
                <div className='mint-img-container'>
                    <StyledDiv >
                        <img src={img} style={{ width: 187, height: 220 }} />
                    </StyledDiv>
                </div>
                <div className='mint-count-box'>
                    <StyledButton onClick={() => countMinus()}>  - </StyledButton>
                    <span>Mint : {count}</span>
                    <StyledButton onClick={() => countAdd()}> +</StyledButton>
                </div>
                <Container className="mint-info-box">
                    <Row className='mint-info-row'>
                        <Col><i>Price</i></Col>
                        <Col>{price} BTK</Col>
                    </Row>
                    <Row className='mint-info-row'>
                        <Col><i>Per transaction</i></Col>
                        <Col className='mint-text'>최대 5 개</Col>
                    </Row>
                    <Row className='mint-info-row'>
                        <Col><i>Amount</i></Col>
                        <Col>{amount == 'limited' ? amount : totalCnt + amount}</Col>
                    </Row>
                </Container>
                <br />
                <Button 
                    className="mint-wal-connect-btn" 
                    variant="success" 
                    onClick={preMint}>
                    Mint
                </Button>
            </StyledMain>
        </div>
    )
}
export default PreSale