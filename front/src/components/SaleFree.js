import React, {useEffect, useState} from 'react'
import {FreeImg} from '../img'
import styled from "styled-components";
import {Container,Row , Col , Button} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDispatch } from 'react-redux';


const StyledMain = styled.div`
    width: 280px;
    font-size: 1rem;
    line-height: 1.5;
    /* color: pink; */
    border-radius: 0.25rem;
    background-color: white;
    border: 1px solid lightgray;
    text-align: center;
    display:flex ;
    flex-wrap: wrap;
    justify-content:center ;
`;


const StyledDiv = styled.div`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    color: green;
    line-height: 1.5;
    background-color: white;
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
    width: 200px;
    height: 20px;
    text-align: center;
`;


const FreeSale = () => {

    const dispatch = useDispatch(state => state.nft)

    const [count, setCount] = useState(1)


    const countAdd = () => {
        setCount(count + 1);
    }

    const countMinus = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        dispatch(countAdd())
    })

  return (
    <div className="freelist">
        <StyledMain >
            <h2>FreeSale</h2>
            <StyledDiv >
                <img src={FreeImg} />
            </StyledDiv>
            <StyledButton onClick={() => countMinus()}>  - </StyledButton>
            <span>Mint : {count}</span>
            <StyledButton onClick={()=> countAdd()}> +</StyledButton>
            <Container>
                <Row>
                    <Col>price</Col>
                    <Col>Per transaction</Col>
                    <Col>Per 서기영</Col>
                </Row>
                <Row>
                    <Col>60 KLAY</Col>
                    <Col>최대 5 개</Col>
                    <Col>limited</Col>
                </Row>

            </Container>
            <StyledBar >
                    <ProgressBar animated now={45} />
            </StyledBar>
            <br/>
            <Button className="mint-wal-connect-btn" variant="success">지갑 연결하기</Button>{' '}
            
        </StyledMain>
    </div>
  )
}

export default FreeSale