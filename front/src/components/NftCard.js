import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nftInstance } from "configs";
import { Check } from '../img';
import { nftAction } from 'redux/actions/nftAction';
import Pagination from './Pagination';
import { claimReward, stakeNFTs } from 'api';
import Cancel from '../img/stake/cancel.png';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

const override = css`
//   display: flex;
  border-color: black;

  margin: 0rem 1.25rem 0rem 1.25rem;
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
        transform: translate(150%, 150%);
    }

    .cont21 {
        display: flex ;
        justify-content: center;
        margin: .625rem 0rem;
        padding-bottom: .625rem;
        border-bottom: .0625rem solid black;
    }

    .nftlist {
        text-align: center;
        border-radius: .1875rem;
        border-top-left-radius: .625rem;
        border-bottom-right-radius: .625rem;
        width: 80%;
        padding: .3125rem;
        background: lightgray;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nftlist-id-box {
        width: 5rem;
        margin: .1875rem .25rem;
        background: white;
        border-radius: 1.875rem;
        font-size: .9375rem;
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
        position: absolute;
        opacity: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        transform: translate(1.375rem, -2.0625rem);
    }

    .nftlist-id-box:hover .overlay{
        position: absolute;
        opacity: 1;
    }

    .nftlist-select-all {
        display: flex;
        justify-content: flex-end;
        margin-bottom: .3125rem;
        margin-right: 3.125rem;
        align-items: center;
    }
    
    .nftlist-select-all-button {
        border-radius: .625rem;
        cursor: pointer;
    }

    .nftlist-select-all-text {
        margin-top: .625rem;
        background: blue;
    }

    .nftlist-select-all-checkbox {
        margin-right: .1875rem;
    }

    .nftlist-card-img {
        border-radius: 5rem;
    }

    .no-display {
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
        dispatch(nftAction.getReward(nftInstance, myStakedNFTs));
    }

    const checkNfts = async () => {
        getCurrentReward()
        let myBrownyNFTs = await nftInstance.methods.myNFTs().call(
            { from: myAddress })

        let stakedNFTs = await nftInstance.methods.checkStakedNFTs().call(
            { from: myAddress })

        myBrownyNFTs = myBrownyNFTs.filter((item) => !stakedNFTs.includes(item));

        let dict;
        let dict1;
        const result = await axios.post('/image/images', { myBrownyNFTs, stakedNFTs })
        dict = result.data.data;
        dict1 = result.data.data1;

        let binaryArr = [];
        for (let i = 0; i != myBrownyNFTs.length; i++) {
            let metajson = {
                id: `#${myBrownyNFTs[i]}`,
                image: `/image/images/${dict[myBrownyNFTs[i]]}`,
                checked: false,
            }
            binaryArr.push(metajson)
        }

        let processedStakedNFTs = stakedNFTs.map((NFT) => {
            let data = {
                id: `#${NFT}`,
                image: `/image/images/${dict1[NFT]}`,
                checked: false,
            }
            return data;
        })
        myBrownyNFTs = binaryArr.filter((item) => {
            if (stakedNFTs.indexOf(item.id.slice(1)) < 0) return item
        })

        dispatch({ type: "NFTCARD_MYNFTS", payload: { myNFTs: myBrownyNFTs, myStakedNFTs: processedStakedNFTs } })
    }

    // check
    const changeAllState = (checked) => {
        // console.log(checked)
        //checked = true / false
        let newArr = myNFTs.sort((a, b) => a.id.slice(1) - b.id.slice(1))
        console.log('page: ', page);
        newArr = newArr.map((item, index) => {
            if (index >= (page - 1) * 4 && index < (page - 1) * 4 + 4) {
                item.checked = checked;
            }
            return item;
        })
        setInputCheck(!inputCheck);
        dispatch({ type: 'NFTCARD_CHANGE_ALL', payload: { myNFTs: newArr } })
    }

    const changeClickState = (id) => {
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
            try {
                const result = await stakeNFTs(myAddress, stakeIdArr)
                if (result.status) {
                    let stakedNFTs = myNFTs.filter((item) => item.checked).map((item) => {
                        item.checked = false;
                        return item;
                    })

                    dispatch({ type: 'NFTCARD_STAKE', payload: { myNFTs: renewMyNFTs, myStakedNFTs: stakedNFTs } })
                    dispatch({type: "WALLET_REFRESH"})

                    alert("스테이킹 성공");
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

    const clickRefresh = () => {
        dispatch(nftAction.getReward(nftInstance, myStakedNFTs));
    }

    const clickClaim = async () => {
        await claimReward(myAddress)
        dispatch({type: "WALLET_REFRESH"})
    }

    return (
        <div className='nftlist-outer'>

            <div className='nftcard-header'>
                My NFTs
            </div>
            <div className='myNFT-info-box'>
                <div className='reward-box'>
                    {(myNFTs.length > 0 || myStakedNFTs.length > 0) &&
                        <>
                            <div className='nftlist-reward'>
                            <FontAwesomeIcon 
                                icon={faRotateRight}
                                className='refresh-reward-icon'
                                onClick={clickRefresh}
                            />
                                total reward : &nbsp;
                                <ClipLoader loading={loading} css={override} size={20} />
                                {!loading &&<>{(reward / 10000).toFixed(4)}</>} BTK
                            <button 
                                className='reward-button'
                                onClick={clickClaim}
                                >
                                claim
                                </button>
                            
                            </div>
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