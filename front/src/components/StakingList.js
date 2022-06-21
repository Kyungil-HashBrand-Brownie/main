import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { check } from '../img';
import {brownyContract, contractAddr} from "configs";
import { unstakeNFTs } from 'api';


const Cardjustify = styled.div`
    display: flex;
    justify-content: center;
    /* width: 50%; */

    .Main {
        width: 570px;
        flex-wrap: wrap;
        position: relative;
        display: flex ;
        justify-content: center ;
        margin: 10px;
        border: 3px solid;
        border-radius: 40px;
        padding: 10px 10px;
        margin-top: 60px;
    }

    .Ncard {
        /* display: flex; */
        /* justify-content: center; */
        opacity: 0.8;
        padding: 3px;
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
        justify-content: center ;
    }
`

const StakingList = () => {

    const dispatch = useDispatch();

    const { myAddress, myNFTs, myStakedNFTs } = useSelector(state => state.nft);

    const { posts } = useSelector(state => state.nft)
    // checked 된 것들
    const [checkItems, setCheckItems] = useState([])

    const changeClickState = (id) => {
        let newArr = myStakedNFTs.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked; 
            }
            return li
        })
        console.log('newarr: ', newArr);
        dispatch({type: 'NFTCARD_STAKE_CLICK', payload: newArr})
    }

    useEffect(() => {
        console.log(checkItems)
    }, [checkItems])


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
                alert("선택한 NFT가 정상적으로 unstaking 되었습니다.");
                // navigate('/');
            }
            else alert("transaction fail")
            }catch(e) {
                console.log(e.message)
            }
        }
    }



    return (
        <div className='nftlist-outer'>
            <div className='nftcard-header'>
                Staked NFTs
            </div>
            <Cardjustify>
                <div>
            <div className="Main">
            {   myStakedNFTs.length > 0 
                ? myStakedNFTs.map((item, index1) => {
                    return <div key={index1}>
                        <Card className="Ncard" style={{ width: '15rem' }}>
                        {
                            !item.checked ?
                            null
                            :< img 
                            src={check}
                            alt="sss"
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
                            <div><Card.Img style={{width: '14rem', height: '13rem'}} onClick={()=> changeClickState(item.id)} variant="top" src={item.image} /></div>
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
                })
                : 
                <div>
                    <h2>Nothing to display</h2>
                </div>
            }
            </div>
            <div className="cont21">
                <button className="" onClick={unstakeNFT}> UnStake</button>
            </div>
            </div>
            </Cardjustify>
        </div>
    )
}

export default StakingList