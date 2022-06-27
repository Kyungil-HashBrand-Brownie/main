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
  margin-right: 4.375rem;
`;

const Cardjustify = styled.div`
    display: flex;
    justify-content: center;

    .Main {
        width: 31.25rem;
        min-height: 54.6875rem;
        margin: .625rem;
        border: .1875rem solid white;
        border-radius: 2.5rem;
        padding: .625rem .625rem;
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
        padding: .1875rem;
        margin: .625rem;
        margin-left: 1.6875rem;
        padding-top: 1.5625rem;
        border-radius: 12.5rem;
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
        bottom: 12.5rem;
    }

    .spaan {
        background-color: pink ;
        opacity: 0;
    }

    .containerCard {
        width: 100%;
        height: 100%;
        background-color: gray;
        border-radius: 8px;
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
        /* top : 1.5625rem; */
        transform: translate(150%, 150%);
    }

    .cont21 {
        display: flex ;
        justify-content: center;
        margin: .625rem 0rem;
        padding-bottom: .625rem;
        border-bottom: .0625rem solid black;
        /* background: red; */
        /* border: .1875rem solid black; */
    }

    .nftlist {
        text-align: center;
        border-radius: .1875rem;
        border-top-left-radius: .625rem;
        border-bottom-right-radius: .625rem;
        width: 80%;
        padding: .3125rem;
        background: lightgray;
        /* width: 100%; */
        /* text-align: center; */
        /* border: .3125rem solid black; */
        /* border-radius: .1875rem; */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* margin: 1.25rem; */
        /* padding: .3125rem; */
        /* background: lightgray; */
    }

    .nftlist-id-box {
        width: 5rem;
        margin: .1875rem .25rem;
        background: white;
        /* background: rgb(47, 47, 238); */
        /* border: .0625rem solid black; */
        /* color: white; */
        border-radius: 1.875rem;
        font-size: .9375rem;
        /* padding-left: .9375rem; */
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }

    .nftlist-id-box:hover {
        transform: scale(1.1);
    }

    .nftlist-header {
        font-size: 1.5625rem;
        padding-left: 4.375rem;
        margin-bottom: 1.25rem;
    }
    .nftlist-text {
        text-align: center;
        border-radius: .1875rem;
        width: 80%;
        padding: .3125rem;
        background: lightgray;
    }

    .nftlist-box {
        margin: 0rem 1.875rem;
        /* background:red; */
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
    }

    .nftlist-justify {
        display: flex;
        justify-content: center;
        margin-bottom: 1.25rem;
    }

    .nftlist-cancel {
        width: 2.5rem;
        height: 2.5rem;
    }

    .overlay {
        /* display: none, */
        position: absolute;
        opacity: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        transform: translate(1.375rem, -2.0625rem);
    }

    .nftlist-id-box:hover .overlay{
        /* transform: translate(-0.9375rem, 0); */
        position: absolute;
        opacity: 1;
        /* background: rgba(43, 41, 41, 0.9); */
        /* width: 100%; */
        /* height: 100%; */
    }

    .nftlist-select-all {
        display: flex;
        justify-content: flex-end;
        margin-bottom: .3125rem;
        margin-right: 3.125rem;
        /* background: red; */
        align-items: center;
    }
    
    .nftlist-select-all-button {
        border-radius: .625rem;
        cursor: pointer;
    }

    .nftlist-select-all-text {
        margin-top: .625rem;
        background: blue;
        /* padding-top: .3125rem; */
    }

    .nftlist-select-all-checkbox {
        margin-right: .1875rem;
    }

    .nftlist-card-img {
        border-radius: 5rem;
    }

    .no-display {
        /* background: red; */
        position: absolute;
        transform: translate(3.4375rem, 24.0625rem);
    }

`


function NftCard() {
    const [page, setPage] = useState(1);
    const [inputCheck, setInputCheck] = useState(false)

    const dispatch = useDispatch();
    const { myAddress, myNFTs, myStakedNFTs, reward, loading } = useSelector(state => state.nft);

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
        const result = await axios.post('/image/images', { myBrownyNFTs, stakedNFTs })
        // console.log(result.data);
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
        // console.log(dict)
        for (let i = 0; i != myBrownyNFTs.length; i++) {
            let metajson = {
                id: `#${myBrownyNFTs[i]}`,
                image: `image/images/${dict[myBrownyNFTs[i]]}`,
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
                image: `image/images/${dict1[NFT]}`,
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
        // console.log(checked)
        //checked = true / false
        let newArr = myNFTs.sort((a, b) => a.id.slice(1) - b.id.slice(1))
        //                 // .slice((page - 1) * 4, (page - 1) * 4 + 4)
        console.log('page: ', page);
        newArr = newArr.map((item, index) => {
            if (index >= (page - 1) * 4 && index < (page - 1) * 4 + 4) {
                item.checked = checked;
                // console.log(index)
            }
            return item;
        })
        console.log(myNFTs)
        setInputCheck(!inputCheck);
        dispatch({ type: 'NFTCARD_CHANGE_ALL', payload: { myNFTs: newArr } })
    }

    const changeClickState = (id) => {
        // let input = document.getElementsByClassName('nftlist-select-all-checkbox')[0];
        // console.log(input)
        // console.log(input.checked);
        setInputCheck(false);

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
    }, [myAddress, myStakedNFTs.length, page])

    // 카드 staking 버튼
    const stakeNFT = async () => {
        let renewMyNFTs = myNFTs.filter((item) => !item.checked)
        let stakeIdArr = myNFTs.filter((item) => item.checked).map((item) => item.id.slice(1));

        if (stakeIdArr.length > 0) {
            // let stakeInstanceId = stakeIdArr[0].id.slice(1) //#62
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
                    {myNFTs.length > 0 &&
                        <>
                            <ClipLoader loading={loading} css={override} size={30} />
                            {!loading && <div className='nftlist-reward'>total reward : {(reward / 10000).toFixed(2)} BTK</div>}
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
                                            className='nftlist-select-all-checkbox' 
                                            checked={inputCheck}
                                            />
                                        Select All
                                    </div>
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
                        {myNFTs.length > 0
                            ? <>
                                {myNFTs.sort((a, b) => a.id.slice(1) - b.id.slice(1)).slice((page - 1) * 4, (page - 1) * 4 + 4).map((item, index1) => {
                                    return <div className='card-container' key={index1}>
                                        <Card
                                            className="Ncard"
                                            style={{
                                                width: '192px',
                                                backgroundColor: "lightgray"
                                                // index1%4 == 0 ? "#fc518d" : index1%4 == 1 ? "orange" 
                                                // : index1%4 == 2 ? "#3cb346" : "#FAFA33"
                                            }}>
                                            {
                                                !item.checked ?
                                                    null
                                                    : <img src={Check}
                                                        alt="checked"
                                                        id='stake-checkbox'
                                                    />
                                            }
                                            <div><Card.Img className='nftlist-card-img' style={{ width: '176px', height: '176px' }} onClick={() => changeClickState(item.id)} variant="top" src={item.image} /></div>
                                            <Card.Title >{item.id}</Card.Title>
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
                            setInputCheck={setInputCheck}
                            inputCheck={inputCheck}
                        />
                    }
                </div>
            </Cardjustify>
        </div>
    );
}

export default NftCard;