import React, {useState} from 'react'
import {FreeImg} from './img'
import styled from "styled-components";
import {Container,Row , Col , Button} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'


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
`;

const StyledBar = styled.div`
    width: 200px;
    height: 20px;
    text-align: center;
`;


const FreeSale = () => {

    const [count, setCount] = useState(1)


    const countAdd = () => {
        setCount(count + 1);
    }

    const countMinus = () => {
        setCount(count - 1);
    }

  return (
    <div className="FreeDiv">
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
            <Button variant="success">지갑 연결하기</Button>{' '}
            
        </StyledMain>
    </div>
  )
}

export default FreeSale