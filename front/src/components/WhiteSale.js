import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {Container,Row , Col , Button} from 'react-bootstrap'
import Browny from '../img/browny9.png'
import {brownyContract, contractAddr} from "configs";
import { whitelistMint } from 'api';

const StyledMain = styled.div`
    width: 320px;
    font-size: 1rem;
    line-height: 1.5;
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
    font-size: 1rem;
    color: green;
    line-height: 1.5;
    background-color: white;
    margin-bottom: 20px;
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
    margin: 0 6px ;
`;


const WhiteSale = () => {
    const dispatch = useDispatch();
    const { myAddress } = useSelector(state => state.nft);

    const [count, setCount] = useState(1)
    const [isWhite, setIsWhite] = useState(false)

    const countAdd = () => {
        // counting 
        if (count < 5) setCount(count + 1);
        else alert("최대 5개까지 민팅 가능합니다.")
    }

    const countMinus = () => {
        if (count > 1) setCount(count - 1);
    }

    const whiteMint = async () => {
            const result = await whitelistMint(myAddress,count)
            if (result.status) {
                dispatch({ type: "WALLET_REFRESH" })
                alert("해당 지갑 주소로 민팅되었습니다!");
            }
            else alert("transaction fail")
    }

    const checkWhitelist = async () => {
        if (myAddress) {
            try {
                const isWhite = await brownyContract.methods.isWhitelisted(myAddress).call()
                console.log(isWhite);
                setIsWhite(isWhite)
            }
            catch (e) {
                throw e
            }
        }
    }

    useEffect(()=>{
        checkWhitelist()
    },[isWhite,myAddress])
    

    return (
        <div className='whitelist'>
            <StyledMain >
                <div className='mint-title-box'>
                    <h2 className="mint-title">White-Sale</h2>
                </div>
                {isWhite 
                ?
                <>
                <StyledDiv >
                    <img src={Browny} style={{ width: 220, height: 220 }} />
                </StyledDiv>
                <div className="mint-count-box">
                    <StyledButton onClick={() => countMinus()}>  - </StyledButton>
                    <span className="mint-count">Mint : {count}</span>
                    <StyledButton onClick={() => countAdd()}> +</StyledButton>
                </div>

                <Container className="mint-info-box">
                    <Row className="mint-info-row">
                        <Col><i>Price</i></Col>
                        <Col>1 BTK</Col>
                    </Row>
                    <Row className="mint-info-row">
                        <Col><i>Per transaction</i></Col>
                        <Col className='mint-text'>최대 5 개</Col>
                    </Row>
                    <Row className="mint-info-row">
                        <Col><i>Amount</i></Col>
                        <Col>limited</Col>
                    </Row>
                </Container>
                <br />
                <Button
                    className="mint-wal-connect-btn"
                    variant="success"
                    onClick={whiteMint}
                >Mint </Button>
                </>
                :
                <>
                <Container className="not-whitelist">
                    <div>화이트리스트가 아닙니다</div>
                </Container>
                </>
                }
            </StyledMain>
        </div>
    )
}

export default WhiteSale