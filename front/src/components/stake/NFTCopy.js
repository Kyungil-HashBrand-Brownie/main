import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nftInstance } from "configs";
import { Check } from '../../img';
import { nftAction } from 'redux/actions/nftAction';
import Pagination from './Pagination';
import { claimReward, stakeNFTs } from 'api';
import Cancel from '../../img/stake/cancel.png';
import axios from 'axios';
import Reward from './Reward';

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
`

function NftCard({ bool }) {
    const dispatch = useDispatch();
    const { myAddress, myNFTs, myStakedNFTs, loading } = useSelector(state => state.nft);

    const [page, setPage] = useState(1);
    const [inputCheck, setInputCheck] = useState(false)

    let list = bool ? myNFTs : myStakedNFTs;
    let checkedList = list.filter((item) => item.checked);

    // check
    const changeAllState = (checked) => {
        let newArr = list.sort((a, b) => a.id.slice(1) - b.id.slice(1))
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

        let newArr = list.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked;
            }
            return li
        })
        dispatch({ type: 'NFTCARD_MYNFTS_CLICK', payload: newArr });
    }

    const stakeNFT = async () => {
        let renewMyNFTs = list.filter((item) => !item.checked)
        let stakeIdArr = list.filter((item) => item.checked).map((item) => item.id.slice(1));

        if (stakeIdArr.length > 0) {
            try {
                const result = await stakeNFTs(myAddress, stakeIdArr)
                
                if (result.status) {
                    let stakedNFTs = list.filter((item) => item.checked).map((item) => {
                        item.checked = false;
                        return item;
                    })

                    dispatch({ type: 'NFTCARD_STAKE', payload: { myNFTs: renewMyNFTs, myStakedNFTs: stakedNFTs } })
                    dispatch({ type: "WALLET_REFRESH" })

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

    const getCurrentReward = async () => {
        dispatch(nftAction.getReward(nftInstance, myStakedNFTs));
    }

    const checkNfts = async () => {
        getCurrentReward()
        let myBrownyNFTs = await getMyNFTs(myAddress)

        let stakedNFTs = await getMyStaked(myAddress)

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

    useEffect(() => {
        checkNfts()
    }, [myAddress, myStakedNFTs.length, page])


    return (
        <div className='nftlist-outer'>
            <div className='nftcard-header'>
                My NFTs
            </div>
                    {(myNFTs.length > 0 || myStakedNFTs.length > 0) &&
                        <Reward 
                            myAddress={myAddress}
                            myStakedNFTs={myStakedNFTs}
                            nftInstance={nftInstance} 
                            loading={loading}
                        />
                    }
            <Cardjustify>
                <div className='Main'>
                    {list.length > 0 &&
                        <>
                            <div className="cont21">
                                <button
                                    className='stake-button'
                                    onClick={stakeNFT}>stake</button>
                            </div>
                            <div className='nftlist-box'>
                                <div className='nftlist-header'><i>Total Browny : {myNFTs.length+myStakedNFTs.length}</i></div>
                                <div className='nftlist-header'><i>Unstaked Browny : {myNFTs.length}</i></div>
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
                                        {checkedList.length > 0 ?
                                            checkedList.map((item) =>
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
                        {list.length > 0
                            ? <>
                                {list.sort((a, b) => a.id.slice(1) - b.id.slice(1)).slice((page - 1) * 4, (page - 1) * 4 + 4).map((item, index1) => {
                                    return <div className='card-container' key={index1}>
                                        <Card
                                            className="Ncard"
                                            style={{
                                                width: '192px',
                                                // index1%4 == 0 ? "#fc518d" : index1%4 == 1 ? "orange" 
                                                // : index1%4 == 2 ? "#3cb346" : "#FAFA33"
                                            }}>
                                            {
                                                !item.checked ?
                                                null
                                                : 
                                                <img src={Check}
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
                    {list.length > 0 &&
                        <Pagination
                            page={page}
                            setPage={setPage}
                            total={list.length}
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