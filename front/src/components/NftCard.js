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
    .Main {
        position: relative;
        display: flex ;
        justify-content: center ;
        z-index:5;
        margin: 10px;
        border: 1px solid;
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

    const { brownieContract, myAddress } = useSelector(state => state.nft);
    console.log(brownieContract.methods)
    const checkNfts = async () => {

        console.log(myAddress)
        const test2 = await brownieContract.methods.myNFTs().call(
            { from: myAddress })

        console.log("tst: ", test2)
        let binaryArr = [];
        // console.log(`ipfs.io/ipfs/QmbqhcAu5QhdE55e8UzbKY92c6pERPCSuMHMebdrA2mFs7/${test2}.json`)
        for (let i = 0; i != test2.length; i++) {
            // let data = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${test2[i]}.png`);
            // console.log(data)
            // console.log(data.data.image)
            // let image = await axios.get(`https://ipfs.io/ipfs/${data.data.image.split('ipfs://')[1]}`)
            // document.getElementById("imgPreview").src = "data:image/png;base64," + binarySrc;
            // console.log("image : ", image.data)
            let metajson = {
                id: `#${test2[i]}`,
                image: `https://gateway.pinata.cloud/ipfs/QmVYG6jQYNdEyPYd6FMZY5gacumeEKg8TCNWCwQ6Psvgxi/${test2[i]}.png`,
                checked: false,
            }
            binaryArr.push(metajson)
            // console.log(`data:image/png;base64,${binaryArr[1]}`)
            //[,,]
        }
        // console.log(binaryArr)
        setList(binaryArr)
    }
    // checkNfts()


    const [list, setList] = useState([]);

    // check
    const [checkItems, setCheckItems] = useState([])



    const changeClickState = (id) => {
        let newArr = list.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked; 
            }
            return li
        })
        console.log('newarr: ', newArr);
        setList(newArr)
    }

    const checkStakedNFTs = async() => {
        let stakedNFTs = await brownieContract.methods.checkStakedNFTs().call(
                {from : myAddress}
            )
        console.log('stakedNFTs: ', stakedNFTs)
    } 


    useEffect(() => {
        console.log(checkItems)
        checkNfts()
        checkStakedNFTs()
    }, [checkItems,brownieContract.defaultAccount,myAddress])

    // 카드 staking 버튼
    const stakeNFT = async () => {
        // dispatch({type: "NFTCARD_STAKING", payload: nftList});
        let stakeIdArr = list.filter((item) => item.checked);
        // console.log(stakeIdArr);
        if (stakeIdArr.length > 0) {
            let stakeInstanceId = stakeIdArr[0].id.slice(1) //#62
            try{
            const stakeData = await brownieContract.methods.stake(stakeInstanceId).encodeABI()
            const result = await window.caver.klay.sendTransaction({
                type: 'SMART_CONTRACT_EXECUTION',
                from:myAddress, 
                to:'0x35def1D38a11fE4231Fb64993aFbb9A1e0342B01',
                data:stakeData,
                gas: 3000000
            })
            if(result.status){
                // dispatch({type: "WALLET_REFRESH"})
                alert("해당 지갑 주소로 민팅되었습니다!");
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
                            <h1>aaaaaaaaaaaaaaaaaaaaaAll Nfts</h1>            
            <Cardjustify>
                <div className="Main">
                    {
                        list.map((item, index1) => {
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
                    }
                </div>
                <div className="cont21">
                    <button className="" onClick={stakeNFT}> staking</button>
                </div>
            </Cardjustify>
        </div>
    );
}

export default NftCard;