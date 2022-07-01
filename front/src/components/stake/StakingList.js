import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Check } from '../../img';
import { unstakeNFTs } from 'api';
import Pagination from './Pagination';
import Cancel from '../../img/stake/cancel.png';

const Cardjustify = styled.div`
    display: flex;
    justify-content: center;
    /* width: 50%; */

    .Main {
        width: 500px;
        min-height: 875px;
        /* height: 840px; */
        margin: 10px;
        border: 3px solid;
        border-radius: 40px;
        padding: 10px 10px;
        background: radial-gradient(transparent, #854207);
        /* background: rgb(81, 81, 221); */
        /* background: linear-gradient(to right, #854207, transparent); */
    }

    .InnerMain {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .Ncard {
        opacity: 0.8;
        padding: 3px;
        margin: 10px;
        margin-left: 27px;
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
        transform: translate(150%, 150%);
    }

    .cont21 {
        display: flex ;
        justify-content: center ;
        margin: 10px 0px;
        padding-bottom: 10px;
        border-bottom: 1px solid black;
    }

    .nftlist {
        text-align: center;
        border-radius: 3px;
        width: 80%;
        padding: 5px;
        background: lightgray;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nftlist-id-box {
        width: 80px;
        margin: 3px 4px;
        background: rgb(47, 47, 238);
        color: white;
        border-radius: 30px;
        font-size: 15px;
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
        width: 50px;
        height: 50px;
    }

    .overlay {
        position: absolute;
        opacity: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        transform: translate(15px, -40px);
    }

    .nftlist-id-box:hover .overlay{
        position: absolute;
        opacity: 1;
    }

    .nftlist-select-all {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        margin-right: 50px;
    }
    
    .nftlist-select-all-button {
        border-radius: 10px;
        cursor: pointer;
    }

    .no-display {
        /* background: red; */
        position: absolute;
        transform: translate(55px, 385px);
    }
`

const StakingList = () => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const { myAddress, myNFTs, myStakedNFTs } = useSelector(state => state.nft);

    let list = myStakedNFTs.filter((item) => item.checked);
    // checked 된 것들
    const changeAllState = (checked) => {
        let newArr;
        if (checked) {
            newArr = myStakedNFTs.map((item) => {
                item.checked = true
                return item
        })
        }
        else {
            newArr = myStakedNFTs.map((item) => {
                item.checked = false
                return item
            })
        }
        // console.log(myNFTs)
        dispatch({type: 'NFTCARD_CHANGE_ALL', payload: {myStakedNFTs: newArr}})
    }
    const changeClickState = (id) => {
        let newArr = myStakedNFTs.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked; 
            }
            return li
        })
        dispatch({type: 'NFTCARD_STAKE_CLICK', payload: newArr})
    }

    const unstakeNFT = async () => {
        let stakedNFTs = myStakedNFTs.filter((item) => !item.checked);
        let unstakedIdArr = myStakedNFTs.filter((item) => item.checked).map((item) => item.id.slice(1));

        // console.log(unstakedIdArr)
        if (unstakedIdArr.length > 0) {
            // let stakeInstanceId = unstakeIdArr[0].id.slice(1) //#62
            try{
            const result = await unstakeNFTs(myAddress,unstakedIdArr);
            if(result.status){
                // dispatch({type: "WALLET_REFRESH"})
                let unstakedNFTs = myStakedNFTs.filter((item) => item.checked).map((item) => {
                    item.checked = false;
                    return item;
                });
                dispatch({type: 'NFTCARD_UNSTAKE', payload: {myNFTs: unstakedNFTs, myStakedNFTs: stakedNFTs}})
                dispatch({type: "WALLET_REFRESH"})

                alert("선택한 NFT가 정상적으로 unstaking 되었습니다.");
                // navigate('/');
            }
            else alert("transaction fail")
            }catch(e) {
                console.log(e.message)
            }
        }
        else {
            alert('언스테이킹할 아이템을 선택하세요.');
        }
    }

    return (
        <div className='nftlist-outer'>
            <div className='nftcard-header stake-header'>
                Staked NFTs
            </div>
            <Cardjustify>
                <div className="Main">
                    {myStakedNFTs.length > 0 && 
                        <>
                            <div className="cont21">
                                <button 
                                className='unstake-button'
                                onClick={unstakeNFT}>unstake</button>
                            </div>
                            <div className='nftlist-box'>
                                <div className='nftlist-header'><i>Unstakelist</i></div>
                                    <div className='nftlist-select-all'>
                                        <div>
                                            <input 
                                            onChange={(e) => {changeAllState(e.target.checked)}}
                                            type='checkbox'
                                            className='nftlist-select-all-checkbox' />
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
                                                        className='nftlist-cancel'/>
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
                    {   myStakedNFTs.length > 0 
                        ? <>
                        {myStakedNFTs.sort((a,b) => a.id.slice(1) - b.id.slice(1)).slice((page-1)*4, (page-1)*4 + 4).map((item, index1) => {
                            return <div className='card-container' key={index1}>
                                <Card className="Ncard" style={{ width: '12rem' }}>
                                {
                                    !item.checked ?
                                    null
                                    :< img 
                                    src={Check}
                                    alt="sss"
                                    id='stake-checkbox'
                                />
                                }
                                    <div><Card.Img style={{width: '11rem', height: '11rem'}} onClick={()=> changeClickState(item.id)} variant="top" src={item.image} /></div>
                                    <Card.Title >{item.id}</Card.Title>
                                </Card>
                            </div>
                        })}
                        </>
                        : 
                        <div className='no-display'>
                            <h1>Nothing to display</h1>
                        </div>
                    }
                </div>
                {myStakedNFTs.length > 0 &&
                    <Pagination 
                        page={page}
                        setPage={setPage}
                        total={myStakedNFTs.length}
                    />
                }
                </div>
            </Cardjustify>
        </div>
    )
}

export default StakingList