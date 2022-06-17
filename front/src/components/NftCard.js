import Card from 'react-bootstrap/Card';
import { browny4 } from '../img'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from "react-bootstrap";
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
        z-index:3;
        margin: 10px;
        border: 3px solid;
        border-radius: 6px;
        padding: 10px 10px;
    }

    .Ncard {
        opacity: 0.8;
        cursor: wait;
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
    const dispatch = useDispatch();
    const { brownieContract, myAddress, myNFTs, myStakedNFTs, reward } = useSelector(state => state.nft);
    // console.log(brownieContract.methods)

    const checkStakedNFTs = async() => {
        let stakedNFTs = await brownieContract.methods.checkStakedNFTs().call(
                {from : myAddress}
            )
        console.log('stakedNFTs: ', stakedNFTs)
        // return new Promise((resolve, reject) => {
        //     resolve(stakedNFTs);
        // })
    } 

    const getCurrentReward = async() => {
        let reward = 0;
        for (let i = 0; i < myStakedNFTs.length; i++) {
            let totalStakedNFTs = await brownieContract.methods.totalStaked().call()
            let whenStaked = await brownieContract.methods.whenStaked(myStakedNFTs[i].id.slice(1)).call();            
            let currentTimestamp = parseInt(+ new Date() / 1000);
            // console.log(totalStakedNFTs, whenStaked, currentTimestamp);
            reward += ((currentTimestamp - whenStaked) / totalStakedNFTs) * 10;
        }
        console.log('reward: ', reward)
        dispatch({type: 'GET_REWARD', payload: reward});

        // return myStakedNFTs.map(async (NFT) => {
        //     let totalStakedNFTs = await brownieContract.methods.totalStaked().call()
        //     let whenStaked = await brownieContract.methods.whenStaked(NFT.id.slice(1)).call();            
        //     let currentTimestamp = parseInt(+ new Date() / 1000);
        //     console.log(totalStakedNFTs, whenStaked, currentTimestamp);
        //     return ((currentTimestamp - whenStaked) / totalStakedNFTs) * 10;
        // }).reduce((a,b) => a + b, 0)
    }

    const checkNfts = async () => {
        // console.log(totalNFTs);
        // let whenStaked1 = await brownieContract.methods.whenStaked(myStakedNFTs[0].id.slice(1)).call();
        // let whenStaked2 = await brownieContract.methods.whenStaked(myStakedNFTs[1].id.slice(1)).call();
        // console.log(whenStaked1);
        // console.log(whenStaked2);
        // let currentTimestamp = parseInt(+ new Date() / 1000);
        // console.log(currentTimestamp);
        // let reward = getCurrentReward().then((result) => result);
        getCurrentReward()
        console.log('reward: ', reward);
        let myBrownieNFTs = await brownieContract.methods.myNFTs().call(
            { from: myAddress })

        let binaryArr = [];
        // console.log(`ipfs.io/ipfs/QmbqhcAu5QhdE55e8UzbKY92c6pERPCSuMHMebdrA2mFs7/${myNFT}.json`)
        for (let i = 0; i != myBrownieNFTs.length; i++) {
            // let data = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${myNFT[i]}.png`);
            // console.log(data)
            // console.log(data.data.image)
            // let image = await axios.get(`https://ipfs.io/ipfs/${data.data.image.split('ipfs://')[1]}`)
            // document.getElementById("imgPreview").src = "data:image/png;base64," + binarySrc;
            // console.log("image : ", image.data)
            let metajson = {
                id: `#${myBrownieNFTs[i]}`,
                image: `https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${myBrownieNFTs[i]}.png`,
                checked: false,
            }
            binaryArr.push(metajson)
            // console.log(`data:image/png;base64,${binaryArr[1]}`)
            //[,,]
        }
        // console.log(binaryArr)

        let stakedNFTs = await brownieContract.methods.checkStakedNFTs().call(
            {from : myAddress})
        let processedStakedNFTs = stakedNFTs.map((NFT) => {
            let data = {
                id: `#${NFT}`,
                image: `https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${NFT}.png`,
                checked: false,
            }
            return data;
        })
        // console.log(stakedNFTs);
        // if (stakedNFTs.length > 0) {
            myBrownieNFTs = binaryArr.filter((item) => {
               if (stakedNFTs.indexOf(item.id.slice(1)) < 0) return item 
           })
        // }
        console.log(myBrownieNFTs);

        dispatch({type: "NFTCARD_MYNFTS", payload: {myNFTs: myBrownieNFTs, myStakedNFTs: processedStakedNFTs}})
        setList(binaryArr)
    }

    const [list, setList] = useState([]);

    // check
    const [checkItems, setCheckItems] = useState([])

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
        // console.log("my NFTs: ", myNFTs)
        // console.log("my stakedNFTs: ", myStakedNFTs)
        // console.log(checkItems)
        // console.log(brownieContract.methods.totalStaked().call());
        checkNfts()
        // checkStakedNFTs()
    }, [checkItems,brownieContract.defaultAccount,myAddress])

    // 카드 staking 버튼
    const stakeNFT = async () => {
        // let stakeIdArr = list.filter((item) => item.checked);
        let renewMyNFTs = myNFTs.filter((item) => !item.checked)
        let stakeIdArr = myNFTs.filter((item) => item.checked).map((item) => item.id.slice(1));
        // dispatch({type: "NFTCARD_STAKING", payload: });
        // console.log(stakeIdArr);
        if (stakeIdArr.length > 0) {
            // let stakeInstanceId = stakeIdArr[0].id.slice(1) //#62
            console.log("stakeIdArr: ", stakeIdArr);
            try{
            // const stakeData = await brownieContract.methods.stake(stakeInstanceId).encodeABI()
            const stakeData = await brownieContract.methods.stakeNFTs(stakeIdArr).encodeABI()
            const result = await window.caver.klay.sendTransaction({
                type: 'SMART_CONTRACT_EXECUTION',
                from:myAddress, 
                to:'0x35def1D38a11fE4231Fb64993aFbb9A1e0342B01',
                data:stakeData,
                gas: 3000000
            })
            if(result.status){
                // dispatch({type: "WALLET_REFRESH"})
                let stakedNFTs = myNFTs.filter((item) => item.checked).map((item) => {
                    item.checked = false;
                    return item;
                })

                dispatch({type: 'NFTCARD_STAKE', payload: {myNFTs: renewMyNFTs, myStakedNFTs: stakedNFTs}})
                alert("스테이킹 성공");
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
                My NFTs            
            </div>
            <div className='reward-box'>
                {'total reward : ' + (reward/10000).toFixed(2) + ' BTK'}
                {/* <button 
                className='reward-button'
                onClick={getReward}>
                    보상 받기
                </button> */}
            </div>
            <Cardjustify>
                <div>
                <div className="Main">
                    {   myNFTs.length > 0 
                        ? myNFTs.map((item, index1) => {
                            return <div key={index1}>
                                {
                                    !item.checked ?
                                    null
                                    :<img src={check}
                                    alt="ca"
                                    id='stake-checkbox'
                                    className="cheked"
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
                                <Card className="Ncard" style={{ width: '18rem' }}>
                                    <Card.Img onClick={()=> changeClickState(item.id)} variant="top" src={item.image} />
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
                        : <div>
                            <h2>Nothing to display</h2>
                        </div>
                    }
                </div>
                <div className="cont21">
                    <button className="" onClick={stakeNFT}> Stake</button>
                </div>
                </div>
            </Cardjustify>
        </div>
    );
}

export default NftCard;