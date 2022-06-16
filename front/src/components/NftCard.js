import Card from 'react-bootstrap/Card';
import { browny4 } from '../img'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from "react-bootstrap";


const Cardjustify = styled.div`
    .Main {
        position: relative;
        display: flex ;
        justify-content: center ;
        z-index:5;
        margin: 10px;
        border: 1px solid;
    }

    .Ncard {
        opacity: 0.4;
    }

    .Ncard:hover {
        opacity: 1;
    }



    .card:hover {
        opacity: 1;
        transform :scale(1.1);
    }

    .card:hover  button{
        opacity: 1.0;
    }

    .nftcardbutton{
        position: relative;
        display: flex ;
        justify-content: center ;
        bottom: 200px;
    }

    .spaan {
        background-color: pink ;
        opacity: 0;
    }

    .containerCard {
        width: 100%;
        height: 100%;
        background-color: gray;
        border-radius: 0.5rem;
    }

    .col_1 {
        color: blue;
    }

    .col_2 {
        color: pink;
    }

    .Ncard {
        padding: 7px;
        margin: 10px;
    }

    .width1 {
        width: 100% ;
        /* background-color:  red; */
    }
    .width2 {
        width: 100% ;
        /* background-color:  red; */
    }

    .rel{
        background-color: red;
        position: absolute;
        /* top : 25px; */
        transform: translate(150%, 150%);
    }



    .cont21 {
        display: flex ;
        justify-content: center ;
    }
`



function NftCard() {

    const { brownieContract, myAddress } = useSelector(state => state.nft);

    let data = [{
        id: "#4312",
        eth: 0.056,
        height: 200,
    }, {
        id: "#1223",
        eth: 0.04,
        height: 130,
    }, {
        id: "#213",
        eth: 0.302,
        height: 57,
    }];



    const [list, setList] = useState(data);
    const dispatch = useDispatch();

    // check
    const { posts } = useSelector(state => state.nft)
    const [checkItems, setCheckItems] = useState([])


    // 개별선택
    function checkHandler(checked, id) {
        if (checked) {
            setCheckItems([...checkItems, id])
        } else {
            // 체크해제
            setCheckItems(checkItems.filter(o => o !== id))
        }
    }


    // 전체선택
    function checkAllHandler(checked) {
        if (checked) {
            const ids = []
            posts.forEach(v => ids.push(v.id))
            setCheckItems(ids)
        } else {
            setCheckItems([])
        }
    }
    const myNfts = async () => {
        const test2 = await brownieContract.methods.myNFTs().call()
        console.log("tst: ", test2)
        console.log(`ipfs://QmbX62qQefhBWDYqESn2JHew7qJGEgg1wdEFjM3MX8Q9Qv/${test2}.json`)
    }
    myNfts()
    // 삭제
    function deleteHandler() {
        dispatch({
            type: "REMOVE_BOOKMARK_TEST"
            , payload: { checkItems: checkItems }
        })

        // 초기화
        // setCheckItems([])
    }


    useEffect(() => {
        console.log(checkItems)
    }, [checkItems])

    // 카드 staking 버튼
    const stakingButton = async () => {
        // dispatch({type: "NFTCARD_STAKING", payload: nftList});
    }

    return (
        <div>
            <Cardjustify>
                <div className="Main">

                    {
                        list.map((item, index1) => {
                            return <div key={index1}>
                                <Form.Check
                                    type={"checkbox"}
                                    onChange={(e) => checkHandler(e.target.checked, item.id)}
                                    checked={checkItems.indexOf(item.id) >= 0 ? true : false}
                                >
                                </Form.Check>
                                <Card className="Ncard" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={browny4} />
                                    <Card.Title >{item.id}</Card.Title>
                                    <Container className="containerCard">
                                        <Row>
                                            <Col className="col_1">price</Col>
                                            <Col className="col_1">highst</Col>
                                        </Row>
                                        <Row>
                                            <Col className="col_2">{item.eth} ETH</Col>
                                            <Col className="col_2">{item.height}</Col>
                                        </Row>
                                    </Container>
                                </Card>
                            </div>
                        })
                    }
                </div>
                <div className="cont21">
                    <button className="" onClick={stakingButton}> staking</button>
                </div>
            </Cardjustify>
        </div>
    );
}

export default NftCard;