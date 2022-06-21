import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {brownyContract, contractAddr} from "configs";
import { check } from '../img';
import { nftAction } from 'redux/actions/nftAction';
import Pagination from './Pagination';
import { stakeNFTs } from 'api';

const Cardjustify = styled.div`
    display: flex;
    justify-content: center;
    /* width: 50%; */

    .Main {
        width: 600px;
        margin: 10px;
        border: 3px solid;
        border-radius: 40px;
        padding: 10px 10px;
    }

    .InnerMain {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }

    .Ncard {
        opacity: 0.8;
        /* background: grey; */
        padding: 3px;
        /* width: 200px; */
        margin: 10px;
        padding-top: 25px;
        text-align: center;
        cursor: pointer;
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

    .width1 {
        width: 100% ;
    }
    .width2 {
        width: 100% ;
    }

    .rel{
        background-color: red;
        position: absolute;
        /* top : 25px; */
        transform: translate(150%, 150%);
    }

    .cont21 {
        display: flex ;
        justify-content: center;
        margin: 10px 0px;
    }
`

function NftCard() {
    const dispatch = useDispatch();
    const { myAddress, myNFTs, myStakedNFTs, reward } = useSelector(state => state.nft);

    const getCurrentReward = async() => {
        dispatch(nftAction.getReward(brownyContract, myStakedNFTs));
        // dispatch({type: 'GET_REWARD', payload: reward});

    }

    const checkNfts = async () => {
        // let conAddr = await brownyContract.methods.viewCon().call();
        // console.log(conAddr);
        getCurrentReward()
        // console.log('reward: ', reward);
        let myBrownyNFTs = await brownyContract.methods.myNFTs().call(
            { from: myAddress })

        let binaryArr = [];
        for (let i = 0; i != myBrownyNFTs.length; i++) {
            let metajson = {
                id: `#${myBrownyNFTs[i]}`,
                image: `https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${myBrownyNFTs[i]}.png`,
                checked: false,
            }
            binaryArr.push(metajson)
        }
        // console.log(binaryArr)

        let stakedNFTs = await brownyContract.methods.checkStakedNFTs().call(
            {from : myAddress})
        let processedStakedNFTs = stakedNFTs.map((NFT) => {
            let data = {
                id: `#${NFT}`,
                image: `https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${NFT}.png`,
                checked: false,
            }
            return data;
        })
        myBrownyNFTs = binaryArr.filter((item) => {
            if (stakedNFTs.indexOf(item.id.slice(1)) < 0) return item 
        })
        // console.log(myBrownyNFTs);

        dispatch({type: "NFTCARD_MYNFTS", payload: {myNFTs: myBrownyNFTs, myStakedNFTs: processedStakedNFTs}})
    }

    // check
    const changeClickState = (id) => {
        let newArr = myNFTs.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked; 
            }
            return li
        })
        dispatch({type: 'NFTCARD_MYNFTS_CLICK', payload: newArr});
    }

    useEffect(() => {
        checkNfts()
        // checkStakedNFTs()
    }, [myAddress,myStakedNFTs.length])

    // 카드 staking 버튼
    const stakeNFT = async () => {
        let renewMyNFTs = myNFTs.filter((item) => !item.checked)
        let stakeIdArr = myNFTs.filter((item) => item.checked).map((item) => item.id.slice(1));

        if (stakeIdArr.length > 0) {
            // let stakeInstanceId = stakeIdArr[0].id.slice(1) //#62
            console.log("stakeIdArr: ", stakeIdArr);
            try{
                const result = await stakeNFTs(myAddress,stakeIdArr)
                if (result.status) {
                    // dispatch({type: "WALLET_REFRESH"})
                    let stakedNFTs = myNFTs.filter((item) => item.checked).map((item) => {
                        item.checked = false;
                        return item;
                    })

                    dispatch({ type: 'NFTCARD_STAKE', payload: { myNFTs: renewMyNFTs, myStakedNFTs: stakedNFTs } })
                    alert("스테이킹 성공");
                    // navigate('/');
                }
                else alert("transaction fail")
            } catch (e) {
                console.log(e.message)
            }
        }
    }

    return (
        <div className='nftlist-outer'>
            <div className='nftcard-header'>
                My NFTs            
            </div>
            { myNFTs.length > 0 && 
                <div className='myNFT-info-box'>
                    <div className='reward-box'>
                        {'total reward : ' + (reward/10000).toFixed(2) + ' BTK'}
                        {/* <button 
                        className='reward-button'
                        onClick={getReward}>
                        보상 받기
                        </button> */}
                    </div>
                </div>
            }
            <Cardjustify>
                <div className='Main'>
                    {myNFTs.length > 0 && 
                        <div className="cont21">
                            <button onClick={stakeNFT}>stake</button>
                        </div>
                    }
                <div className='InnerMain'>
                    {   myNFTs.length > 0 
                        ? <> 
                        {myNFTs.sort((a,b) => a.id.slice(1) - b.id.slice(1)).map((item, index1) => {
                            return <div className='card-container' key={index1}>
                                <Card className="Ncard" style={{ width: '15rem' }}>
                                {
                                    !item.checked ?
                                    null
                                    :<img src={check}
                                    alt="ca"
                                    id='stake-checkbox'
                                />
                                }

                                    {/* <Form.Check
                                    id='stake-checkbox'
                                    className="cheked"
                                    type={"checkbox"}
                                    onChange={(e) => checkHandler(e.target.checked, item.id)}
                                    checked={checkItems.indexOf(item.id) >= 0 ? true : false}
                                    /> */}
                                    <div><Card.Img style={{ width: '14rem', height: '13rem'}}onClick={()=> changeClickState(item.id)} variant="top" src={item.image} /></div>
                                    <Card.Title >{item.id}</Card.Title>
                                    {/* <Container className="containerCard">
                                        <Row>
                                            <Col className="col_1">price</Col>
                                            <Col className="col_1">highst</Col>
                                        </Row>
                                        <Row>
                                            <Col className="col_2">{item.eth} ETH</Col>
                                            <Col className="col_2">{item.height}</Col>
                                        </Row>
                                    </Container> */}
                                </Card>
                            </div>
                        })}
                        <Pagination />
                        </> 
                        : <div>
                            <h2>Nothing to display</h2>
                        </div>
                    }
                </div>
                </div>
            </Cardjustify>
        </div>
    );
}

export default NftCard;