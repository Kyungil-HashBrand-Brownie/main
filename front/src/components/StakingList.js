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

const StakingList = () => {

    const dispatch = useDispatch();

    const [list, setList] = useState([]);

    const { brownieContract, myAddress } = useSelector(state => state.nft);
    console.log(brownieContract.methods)
    const checkNfts = async () => {

        console.log(myAddress)
        const test2 = await brownieContract.methods.checkStakedNFTs().call(
            { from: myAddress })

        console.log("tst: ", test2)
        let binaryArr = [];
        // console.log(`ipfs.io/ipfs/QmbqhcAu5QhdE55e8UzbKY92c6pERPCSuMHMebdrA2mFs7/${test2}.json`)
        for (let i = 0; i != test2.length; i++) {
            let data = await axios.get(`https://ipfs.io/ipfs/QmaAYEhbXsrDn7TGgnz9EhZzrrrB8vuHDuzXioPFzjRQBt/${test2[i]}.json`)
            console.log(data.data.image)
            let image = await axios.get(`https://ipfs.io/ipfs/${data.data.image.split('ipfs://')[1]}`)
            // document.getElementById("imgPreview").src = "data:image/png;base64," + binarySrc;
            // console.log("image : ", image.data)
            let metajson = {
                id: `#${test2[i]}`,
                image: `https://ipfs.io/ipfs/${data.data.image.split('ipfs://')[1]}`,
                checked: false,
            }
            binaryArr.push(metajson)
            // console.log(`data:image/png;base64,${binaryArr[1]}`)
            //[,,]
        }
        // console.log(binaryArr)
        setList(binaryArr)
    }

    const {posts} = useSelector(state => state.nft)
    // checked 된 것들
    const [checkItems, setCheckItems] = useState([])


    // 개별선택
    function checkHandler(checked, id) {
        if(checked) {
            setCheckItems([...checkItems, id])
        } else {
            // 체크해제
            setCheckItems(checkItems.filter(o=>o!==id))
        }
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

    // 삭제
    function deleteHandler() {
        dispatch({
            type: "REMOVE_BOOKMARK_TEST"
            , payload: {checkItems: checkItems}
        })

        // 초기화
        // setCheckItems([])
    }

    const checkStakedNFTs = async() => {
        let stakedNFTs = await brownieContract.methods.checkStakedNFTs().call(
                {from : myAddress}
            )
        console.log('stakedNFTs: ', stakedNFTs)
    } 

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




    useEffect(() => {
        console.log(checkItems)
        checkNfts()
    }, [checkItems])


    const unStakeNFT = async () => {
        // dispatch({type: "NFTCARD_STAKING", payload: nftList});
        let stakeIdArr = list.filter((item) => item.checked);
        // console.log(stakeIdArr);
        if (stakeIdArr.length > 0) {
            let stakeInstanceId = stakeIdArr[0].id.slice(1) //#62
            try{
            const stakeData = await brownieContract.methods.unstake(stakeInstanceId).encodeABI()
            const result = await window.caver.klay.sendTransaction({
                type: 'SMART_CONTRACT_EXECUTION',
                from:myAddress, 
                to:'0xff12ba9A7FBDE091B927863Ba392A4D4D30C1Cbb',
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
                    <h1>aaaaaaaaaaaaaaaaaaaaa Staking</h1>            
            <Cardjustify>
            <div className="Main">
            {
                list.map((item, index1) => {
                    return <div key={index1}>
                        {
                            !item.checked ?
                            null
                            :< img 
                            src={check}
                            alt="sss"
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
                <button className="" onClick={unStakeNFT}> UnStaking</button>
            </div>
            </Cardjustify>
        </div>
    )
}

export default StakingList