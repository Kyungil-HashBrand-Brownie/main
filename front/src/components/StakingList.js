import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { check } from '../img';


const Cardjustify = styled.div`
    display: flex;
    justify-content: center;
    /* width: 50%; */

    .Main {
        flex-wrap: wrap;
        position: relative;
        display: flex ;
        justify-content: center ;
        z-index:5;
        margin: 10px;
        border: 3px solid;
        border-radius: 6px;
        padding: 10px 10px;
    }

    .Ncard {
        display: flex;
        justify-content: center;
        opacity: 0.8;
        padding: 7px;
        margin: 10px;
        padding-top: 25px;
        text-align: center;
        cursor: pointer;
    }

    .Ncard:hover {
        opacity: 1;
    }

    /* .cheked{
        opacity: 0;
    }

    .cheked:hover{
        opacity: 1;
    } */



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

    /* .Ncard {
        padding: 7px;
        margin: 10px;
    } */

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

const StakingList = () => {

    const dispatch = useDispatch();

    const { brownieContract, myAddress, myNFTs, myStakedNFTs } = useSelector(state => state.nft);

    const {posts} = useSelector(state => state.nft)
    // checked 된 것들
    const [checkItems, setCheckItems] = useState([])

    // //API
    // const fetchOwnCollection = async () => {
    //     const WALLET_ADDRESS = myAddress;
      
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //         'X-API-KEY': process.env.OPENSEA_API,
    //       },
    //     };
      
    //     const collectionResponse = await fetch(
    //       `https://api.opensea.io/api/v1/collections?asset_owner=${WALLET_ADDRESS}`,
    //       options,
    //     ).then(response => response.json());
      
    //     const collection = collectionResponse.map(item => ({
    //       details: item.description,
    //       slug: item.slug,
    //       name: item.name,
    //       contractAddress: item.primary_asset_contracts[0].address,
    //       owned: [],
    //     }));
      
    //     for (const iterator of collection) {
    //       const assetsResponse = await fetch(
    //         `https://api.opensea.io/api/v1/assets?owner=${WALLET_ADDRESS}&asset_contract_address=${iterator.contractAddress}&include_orders=false`,
    //         options,
    //       ).then(response => response.json());
      
    //       iterator.owned = assetsResponse.assets
    //         .map(item => ({
    //           name: item.name,
    //           img: item.image_url,
    //           id: item.token_id,
    //         }))
    //         .filter(item => item.name && item.img);
    //     }
      
    //     return collection;
    const requestAPI = async () => {
        const address = "0x35def1D38a11fE4231Fb64993aFbb9A1e0342B01";
        const options = {method: 'GET'};
        let NFTs = myNFTs.map((NFT) => parseInt(NFT.id.slice(1)));
        console.log(myAddress);
        console.log(NFTs);

        fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${myAddress}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        // let response = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${myAddress}&asset_contract_address=${address}`, options)
        // let data = await(response.json());
        // console.log(data);
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

    }

    // 전체선택
    function checkAllHandler(checked) {
        if(checked) {
            const ids = []
            posts.forEach(v => ids.push(v.id))
            setCheckItems(ids)
        } else {
            setCheckItems([])
        }
    }

    const checkStakedNFTs = async() => {
        let stakedNFTs = await brownieContract.methods.checkStakedNFTs().call(
                {from : myAddress}
            )
        console.log('stakedNFTs: ', stakedNFTs)
    } 

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
        requestAPI();
    }, [checkItems])


    const unstakeNFT = async () => {
        // console.log('hi')
        // dispatch({type: "NFTCARD_STAKING", payload: nftList});
        // let unstakeIdArr = list.filter((item) => item.checked);
        let stakedNFTs = myStakedNFTs.filter((item) => !item.checked);
        let unstakedIdArr = myStakedNFTs.filter((item) => item.checked).map((item) => item.id.slice(1));
        // console.log(unstakeIdArr);
        console.log(unstakedIdArr)
        if (unstakedIdArr.length > 0) {
            // let stakeInstanceId = unstakeIdArr[0].id.slice(1) //#62
            try{
            // const stakeData = await brownieContract.methods.unstake(stakeInstanceId).encodeABI()
            const unstakeData = await brownieContract.methods.unstakeNFTs(unstakedIdArr).encodeABI()
            const result = await window.caver.klay.sendTransaction({
                type: 'SMART_CONTRACT_EXECUTION',
                from: myAddress, 
                to: '0x35def1D38a11fE4231Fb64993aFbb9A1e0342B01',
                data: unstakeData,
                gas: 3000000
            })
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
        // brownieContract.methods.stake(id:id)
    }



    return (
        <div>
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
                            // className="cheked"
                            // type={"checkbox"}
                            // checked={true}
                        />
                        }

                            {/* <Form.Check
                            id='stake-checkbox'
                            className="cheked"
                            type={"checkbox"}
                            onChange={(e) => checkHandler(e.target.checked, item.id)}
                            checked={checkItems.indexOf(item.id) >= 0 ? true : false}
                            /> */}
                            <div><Card.Img style={{width: '12rem', height: '12rem'}} onClick={()=> changeClickState(item.id)} variant="top" src={item.image} /></div>
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