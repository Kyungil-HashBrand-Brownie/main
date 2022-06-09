import React, { useState, useRef } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import contractAbi from "../abi.json"
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import styled from 'styled-components'
import { Row, Col}from 'react-bootstrap';





const WhiteList = () => {
    const { myContract } = useSelector(state => state.nft);
    let WhiteList = [{
        id: "초기값 ",
        publicKey: "0xzksnj421431ebbf700f436b15c672840asjce32",
    }];

    const { accounts } = useSelector(state => state.nft)


    const [list, setList] = useState(WhiteList)
    const [clickState, setClickState] = useState(false)
    // const [valueId, setValueId] = useState('')
    const [valueKey, setValueKey] = useState('')
    const [valueKey1, setValueKey1] = useState('')
    const [valueKey2, setValueKey2] = useState('')


    const input1 = useRef("")
    const input2 = useRef("")
    const input3 = useRef("")

    const Styled = styled.div`
        justify-content: center;
        text-align: center;
        margin: 10px;
        align-items: center;
    `



    const clickHandler = () => {
        if (!clickState) setClickState(true)
        else {
            if (/* valueId == "" ||  */valueKey === "") {
                alert("입력해주세요")
            } else {
                // publickey = div 에 있는 초기값 publickey 이름 넣어주기 
                setList(list.concat([{ publicKey: valueKey }]));
                setClickState(!clickState);
                setValueKey("");
            }
        }
    }
    console.log(list);

    const clickInput1 = async () => {
        if (await myContract.methods.isWhitelisted(input1.current).call() == true) {
            return alert('이미 등록됨')
        }
        // console.log(myContract);
        // console.log(await myContract.methods.add(input1.current).send({ from: window.klaytn.selectedAddress, gas: 300000, value: 0 }))
        const Sucs = await myContract.methods.add(input1.current).send({ from: window.klaytn.selectedAddress, gas: 300000, value: 0 })
        if (Sucs.status === true) {
            await axios.post('http://localhost:4000/whitelist',
                {
                    data: Sucs,
                })
                .then((res) => {
                    console.log(res);
                    let result = res.data;
                    console.log(result)
                    if (result === "Success!") {
                        alert("화이트리스트 설정 완료되었습니다!");
                    }
                })
        }
    }
    const clickInput2 = async () => {
        if (await myContract.methods.isWhitelisted(input2.current).call() == false) {
            return alert('등록되지 않음')
        }
        const Del = await myContract.methods.remove(input2.current).send({ from: window.klaytn.selectedAddress, gas: 300000, value: 0 })
        if (Del.status === true) {
            await axios.post('http://localhost:4000/deletelist',
                {
                    data: Del,
                })
                .then((res) => {
                    console.log(res);
                    let result = res.data;
                    console.log(result)
                    if (result === "Success!") {
                        alert("화이트리스트 제거 완료되었습니다!");
                    }
                })
        }
    }
    const clickInput3 = async () => {
        console.log(await myContract.methods.isWhitelisted(input3.current).call())
    }

  return (
    <div>
        <div className="Cont">
        <h1>White List key</h1>
        <div className='father'>
            <InputGroup className="mb-3" >
                {/* <div width="100%"> */}
                <FormControl
                // className="Input_Gruop"
                placeholder="White List"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                // size='lg'
                onChange={(e)=>input1.current= e.target.value}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={clickInput1}>
                Add
                </Button>
                {/* </div> */}
            </InputGroup>
        </div>

        </div>        
        <input onChange={(e)=>input2.current= e.target.value}></input><button onClick={clickInput2}>화리 삭제</button>
        <input onChange={(e)=>input3.current= e.target.value}></input><button onClick={clickInput3}>화리 확인</button>                   
        <Table striped>
            <thead>
                <tr>      
                    <th>#</th>
                    <th>public key</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => {
                        return <tr key={index}>
                                    <td> *</td>
                                    <td>{item.publicKey}</td>
                                </tr>
                    })
                }
                <tr>
                    <td>*</td>
                    <td>{accounts} </td>
                </tr>
            </tbody>
        </Table>
        {/* { clickState &&
            <div className="addInfo">
                <input placeholder='publicKey' value={valueKey}  onChange={(e) => setValueKey(e.target.value)}/> 
            </div>
        }

        <Button variant="info" size="lg" onClick={clickHandler}>
            {
                !clickState ? "등록하기" : "추가하기" 
            }
        </Button> */}
    </div>
  )
}

export default WhiteList