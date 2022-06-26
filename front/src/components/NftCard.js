import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brownyContract, contractAddr } from "configs";
import { Check } from '../img';
import { nftAction } from 'redux/actions/nftAction';
import Pagination from './Pagination';
import { stakeNFTs } from 'api';
import Cancel from '../img/stake/cancel.png';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
  margin-right: 70px;
`;

const Cardjustify = styled.div`
    display: flex;
    justify-content: center;

    .Main {
        width: 500px;
        min-height: 875px;
        /* height: 840px; */
        margin: 10px;
        border: 3px solid white;
        border-radius: 40px;
        padding: 10px 10px;
        background: #F5FADB;
        /* background: radial-gradient(transparent, #FFF9F9); */
        /* background: linear-gradient(to right, #d78034 0%, transparent 50%, #d78034 100%); */
        /* background: #6e3503; */
    }

    .InnerMain {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .Ncard {
        opacity: 0.9;
        padding: 3px;
        margin: 10px;
        margin-left: 27px;
        padding-top: 25px;
        border-radius: 200px;
        text-align: center;
        cursor: pointer;
        /* background: #4f86f7; */
        /* background: #464196  */
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
        padding-bottom: 10px;
        border-bottom: 1px solid black;
        /* background: red; */
        /* border: 3px solid black; */
    }

    .nftlist {
        text-align: center;
        border-radius: 3px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 80%;
        padding: 5px;
        background: lightgray;
        /* width: 100%; */
        /* text-align: center; */
        /* border: 5px solid black; */
        /* border-radius: 3px; */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* margin: 20px; */
        /* padding: 5px; */
        /* background: lightgray; */
    }

    .nftlist-id-box {
        width: 80px;
        margin: 3px 4px;
        background: white;
        /* background: rgb(47, 47, 238); */
        /* border: 1px solid black; */
        /* color: white; */
        border-radius: 30px;
        font-size: 15px;
        /* padding-left: 15px; */
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }

    .nftlist-id-box:hover {
        transform: scale(1.1);
    }

    .nftlist-header {
        font-size: 25px;
        padding-left: 70px;
        margin-bottom: 20px;
    }
    .nftlist-text {
        text-align: center;
        border-radius: 3px;
        width: 80%;
        padding: 5px;
        background: lightgray;
    }

    .nftlist-box {
        margin: 0px 30px;
        /* background:red; */
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
    }

    .nftlist-justify {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .nftlist-cancel {
        width: 40px;
        height: 40px;
    }

    .overlay {
        /* display: none, */
        position: absolute;
        opacity: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        transform: translate(22px, -33px);
    }

    .nftlist-id-box:hover .overlay{
        /* transform: translate(-15px, 0); */
        position: absolute;
        opacity: 1;
        /* background: rgba(43, 41, 41, 0.9); */
        /* width: 100%; */
        /* height: 100%; */
    }

    .nftlist-select-all {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        margin-right: 50px;
        /* background: red; */
        align-items: center;
    }
    
    .nftlist-select-all-button {
        border-radius: 10px;
        cursor: pointer;
    }

    .nftlist-select-all-text {
        margin-top: 10px;
        background: blue;
        /* padding-top: 5px; */
    }

    .nftlist-select-all-checkbox {
        margin-right: 3px;
    }

    .nftlist-card-img {
        border-radius: 80px;
    }

    .no-display {
        /* background: red; */
        position: absolute;
        transform: translate(120px, 385px);
    }

`


function NftCard() {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const { myAddress, myNFTs, myStakedNFTs, reward, myNFTpage, loading } = useSelector(state => state.nft);

    let list = myNFTs.filter((item) => item.checked);
    const getCurrentReward = async () => {
        dispatch(nftAction.getReward(brownyContract, myStakedNFTs));
        // dispatch({type: 'GET_REWARD', payload: reward});
    }

    const checkNfts = async () => {
        getCurrentReward()
        let myBrownyNFTs = await brownyContract.methods.myNFTs().call(
            { from: myAddress })

        let stakedNFTs = await brownyContract.methods.checkStakedNFTs().call(
            { from: myAddress })

        console.log(myBrownyNFTs);
        myBrownyNFTs = myBrownyNFTs.filter((item) => !stakedNFTs.includes(item));
        // [1, 3, 16, 119]
        console.log(myBrownyNFTs)

        let dict;
        let dict1;
        // const imageData = async () => {
        const result = await axios.post('/images', { myBrownyNFTs, stakedNFTs })
        console.log(result.data);
        dict = result.data.data;
        dict1 = result.data.data1;
        // console.log(result)
        // return result.data;
        // }
        // dict = imageData();
        // {
        //     1: 'asdasdad',
        //     3: 'asdasaddd',
        // }
        // dict = imageData();

        let binaryArr = [];
        console.log(dict)
        for (let i = 0; i != myBrownyNFTs.length; i++) {
            let metajson = {
                id: `#${myBrownyNFTs[i]}`,
                image: `/images/${dict[myBrownyNFTs[i]]}`,
                // image: `/images/lfx35Bfx0XQ9iHwAAAAASUVORK5CYII`,
                // image: `https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${myBrownyNFTs[i]}.png`,
                checked: false,
            }
            binaryArr.push(metajson)
        }
        // console.log(binaryArr)
        // img src='images/asidfasdifasdfiasdfasdfjaskj'

        let processedStakedNFTs = stakedNFTs.map((NFT) => {
            let data = {
                id: `#${NFT}`,
                image: `/images/${dict1[NFT]}`,
                // image: `https://insta-amazing-app-stagraaa.s3.ap-northeast-2.amazonaws.com/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${NFT}.png`,
                checked: false,
            }
            return data;
        })
        myBrownyNFTs = binaryArr.filter((item) => {
            if (stakedNFTs.indexOf(item.id.slice(1)) < 0) return item
        })
        // console.log(myBrownyNFTs);

        dispatch({ type: "NFTCARD_MYNFTS", payload: { myNFTs: myBrownyNFTs, myStakedNFTs: processedStakedNFTs } })
    }

    // check
    const changeAllState = (checked) => {
        let newArr;
        if (checked) {
            newArr = myNFTs.map((item) => {
                item.checked = true
                return item
            })
        }
        else {
            newArr = myNFTs.map((item) => {
                item.checked = false
                return item
            })
        }
        // console.log(myNFTs)
        dispatch({ type: 'NFTCARD_CHANGE_ALL', payload: { myNFTs: newArr } })
    }

    const changeClickState = (id) => {
        let newArr = myNFTs.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked;
            }
            return li
        })
        dispatch({ type: 'NFTCARD_MYNFTS_CLICK', payload: newArr });
    }

    useEffect(() => {
        checkNfts()
    }, [myAddress, myStakedNFTs.length])

    // 카드 staking 버튼
    const stakeNFT = async () => {
        let renewMyNFTs = myNFTs.filter((item) => !item.checked)
        let stakeIdArr = myNFTs.filter((item) => item.checked).map((item) => item.id.slice(1));

        if (stakeIdArr.length > 0) {
            // let stakeInstanceId = stakeIdArr[0].id.slice(1) //#62
            console.log("stakeIdArr: ", stakeIdArr);
            try {
                const result = await stakeNFTs(myAddress, stakeIdArr)
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
        else {
            alert('스테이킹할 아이템을 선택하세요.');
        }
    }

    return (
        <div className='nftlist-outer'>

            <div className='nftcard-header'>
                My NFTs
            </div>
                <div className='myNFT-info-box'>
                    <div className='reward-box'>
                    { myNFTs.length > 0 && 
                                <>
                                <ClipLoader loading={loading} css={override} size={30} />
                                {!loading && <div className='nftlist-reward'>total reward : {(reward/10000).toFixed(2)} BTK</div>}
                                {/* <button 
                                className='reward-button'
                                onClick={getReward}>
                                보상 받기
                                </button> */}
                                </>
                    }
                    </div>
                </div>
            <Cardjustify>
                <div className='Main'>
                    {myNFTs.length > 0 &&
                        <>
                            <div className="cont21">
                                <button
                                    className='stake-button'
                                    onClick={stakeNFT}>stake</button>
                            </div>
                            <div className='nftlist-box'>
                                <div className='nftlist-header'><i>Stakelist</i></div>
                                <div className='nftlist-select-all'>
                                    <div>
                                        <input
                                            onChange={(e) => { changeAllState(e.target.checked) }}
                                            type='checkbox'
                                            className='nftlist-select-all-checkbox' />
                                        Select All
                                    </div>
                                    {/* <button 
                                        className='nftlist-select-all-button'>Select All</button> */}
                                </div>
                                <div className='nftlist-justify'>
                                    <div className='nftlist'>
                                        {list.length > 0 ?
                                            list.map((item) =>
                                                <div className='nftlist-id-box'>
                                                    {item.id}
                                                    <div className='overlay'>
                                                        <img src={Cancel}
                                                            onClick={() => changeClickState(item.id)}
                                                            className='nftlist-cancel' />
                                                    </div>
                                                </div>)
                                            : <div className='nftlist-text'>Select an item from below!</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                <div className='InnerMain'>
                    {   myNFTs.length > 0 
                        ? <> 
                        {myNFTs.sort((a,b) => a.id.slice(1) - b.id.slice(1)).slice((page-1)*4, (page-1)*4 + 4).map((item, index1) => {
                            return <div className='card-container' key={index1}>
                                <Card 
                                    className="Ncard" 
                                    style={{ 
                                        width: '12rem', 
                                        backgroundColor: "lightgray"
                                            // index1%4 == 0 ? "#fc518d" : index1%4 == 1 ? "orange" 
                                            // : index1%4 == 2 ? "#3cb346" : "#FAFA33"
                                    }}>
                                {
                                    !item.checked ?
                                    null
                                    :<img src={Check}
                                    alt="checked"
                                    id='stake-checkbox'
                                />
                                }
                                    <div><Card.Img className='nftlist-card-img' style={{ width: '11rem', height: '11rem'}} onClick={()=> changeClickState(item.id)} variant="top" src={item.image} /></div>
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
                             </> 
                            : <div className='no-display'>
                                <h1>Nothing to display</h1>
                            </div>
                        }
                    </div>
                    {myNFTs.length > 0 &&
                        <Pagination
                            page={page}
                            setPage={setPage}
                            total={myNFTs.length}
                        />
                    }
                </div>
            </Cardjustify>
        </div>
    );
}

export default NftCard;