import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { batchMint, checkWhite, nftNum, useAlert, whitelistMint, whitelistNftNum } from 'api';
import AlertModal from 'components/AlertModal';


// 리팩터링 - 코드를 단순화하는 작업 불필요한 중복요소들을 제거
const StyledMain = styled.div`
    width: 320px;
    /* min-height: 620px; */
    height: 620px;
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

    @media screen and (max-width: 765px) {
        width: 320px;
        height: 420px;

    }
`;

const StyledDiv = styled.div`
    padding: 0.375rem 0;
    padding-top: 
        ${props => props.price == 50 ? '25px' : '0'};
    padding-right:
        ${props => props.price == 50 ? '20px' : '0'};
    margin-left: 
        ${props => props.price == 50 ? '10px' : 0};
    border-radius: 8px;
    @media screen and (max-width: 765px) {
        width: 220px;
    }
    
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


    @media screen and (max-width: 765px) {
        width: 40px;
        height: 40px;
        margin: auto;
    }
`;
const MintButton = styled.button`
    border: none;
    border-radius: 10px;
    background: #198754;
    color: white;
    padding: 0px 10px;
    height: 40px;
    margin: 10px 0;
`


const PreSale = ({ amount, img, price, title }) => {
    const customAlert = useAlert()
    const dispatch = useDispatch();
    const { myAddress } = useSelector(state => state.nft);
    const { isWhite } = useSelector(state => state.main);

    const [count, setCount] = useState(1)
    const [PreCount, setPreCount] = useState(0);
    const [whiteCount, setWhiteCount] = useState(0);

    const countAdd = () => {
        if (count < 5) setCount(count + 1);
        else customAlert.open("최대 5개까지 민팅 가능합니다.");
    }

    const countMinus = () => {
        if (count > 1) setCount(count - 1);
    }

    const preMint = async () => {
        if (!myAddress) {
            return customAlert.open("지갑을 먼저 연결해주세요")
        }
        const result = await batchMint(myAddress, count)
        console.log(result)
        if (result.status) {
            dispatch({ type: "WALLET_REFRESH" })
            customAlert.open("해당 지갑 주소로 민팅되었습니다!");
        }
        else customAlert.open("transaction fail")

        getMintCnt()
    }

    const whiteMint = async () => {
        const result = await whitelistMint(myAddress, count)
        if (result.status) {
            dispatch({ type: "WALLET_REFRESH" })
            customAlert.open("해당 지갑 주소로 민팅되었습니다!");
        }
        else customAlert.open("transaction fail")

        getMintCnt()
    }

    // 전체 민팅 갯수
    const getMintCnt = async () => {
        const PreCount = await nftNum()
        setPreCount(PreCount)
        const WhiteCount = await whitelistNftNum()
        setWhiteCount(WhiteCount)
    }

    useEffect(() => {
        getMintCnt()
    }, [])


    return (
        <div className="freelist">
            <AlertModal {...customAlert} />
            <StyledMain >
                <div className='mint-title-box'>
                    <h2 className="mint-title">{title}</h2>
                </div>
                {(price == 50 || isWhite)
                    ?
                    <>
                        <div className='mint-img-container'>
                            <StyledDiv price={price}>
                                <img src={img} style={{ width: price == 25 ? 220 : 157, height: price == 25 ? 230 : 200 }} />
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
                                <Col>{amount == '/30' ? whiteCount + amount : PreCount + amount}</Col>
                            </Row>
                        </Container>
                        <MintButton
                            onClick={price == 50 ? preMint : whiteMint}
                        >
                            Mint
                        </MintButton>
                    </>
                    :
                    <Container className="not-whitelist">
                        <div>화이트리스트가 아닙니다</div>
                    </Container>
                }
            </StyledMain>
        </div>
    )
}
export default PreSale