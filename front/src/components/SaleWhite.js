import React, { useEffect, useState } from 'react'
import { WhiteImg } from '../img'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {Container,Row , Col , Button} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Browny from '../img/browny9.png'
import {contractAddr} from "configs";

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
    const dispatch = useDispatch();
    const { brownieContract, myAddress } = useSelector(state => state.nft);

    const [count, setCount] = useState(1)
    const [isWhite, setIsWhite] = useState(false)

    const countAdd = () => {
        // counting 
        if (count < 5) setCount(count + 1);
        else alert("최대 5개까지 민팅 가능합니다.")
    }

    const countMinus = () => {
        if (count > 0) setCount(count - 1);
    }

    const whiteMint = async () => {
        try{
            const conData = await brownieContract.methods.whitelistMint(count).encodeABI()
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
            // alert("카이카스 서명 거부됨")
        }
    }

    const checkWhitelist = async () => {
        if(brownieContract){
            try{
                const isWhite =  await brownieContract.methods.isWhitelisted(myAddress).call()
                setIsWhite(isWhite)
            }
            catch(e){
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
                <h2 className="mint-title">WhiteSale</h2>
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
                    <Row>
                        <Col>Price</Col>
                        <Col>1 BTK</Col>
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
                <Button
                    className="mint-wal-connect-btn"
                    variant="primary"
                    onClick={whiteMint}
                >Mint </Button>{' '}
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