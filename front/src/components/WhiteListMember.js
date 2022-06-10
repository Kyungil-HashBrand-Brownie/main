import React, { useState, useRef, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import contractAbi from "../abi.json"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { trash } from '../img'


const Trash = styled.div`
    width: 50px;
`


    
const WhiteList = () => {
    const { myContract,accounts } = useSelector(state => state.nft);

    const [list, setList] = useState([]);
    const [checkDelete, setCheckDelete] = useState(false);

    const input1 = useRef("")
    const input2 = useRef("")
    const input3 = useRef("")

    const getWhiteList = async () => {
        try{
            const {data} = await axios.get("http://localhost:4000/admin")
            setList(data)
        }
        catch(e){
            console.log(e)
        }
        
    }

    const buttonDelete = () => {
        setCheckDelete(!checkDelete)
    }

    useEffect(()=>{
        getWhiteList()
    },[])

    const clickInput1 = async () => {
        if (await myContract.methods.isWhitelisted(input1.current).call() == true) {
            return alert('이미 등록됨')
        }
        // console.log(myContract);
        // console.log(await myContract.methods.add(input1.current).send({ from: window.klaytn.selectedAddress, gas: 300000, value: 0 }))
        const Sucs = await myContract.methods.add(input1.current).send({ from: window.klaytn.selectedAddress, gas: 300000, value: 0 })
        console.log(Sucs)
        console.log(input1.current)
        if (Sucs.status === true) {
            await axios.post('http://localhost:4000/whitelist',
                {
                    data: { from: input1.current, status: Sucs.status },
                })
                .then((res) => {
                    console.log(res);
                    let result = res.data;
                    console.log(result)
                    if (result === "Success!") {
                        alert("화이트리스트 설정 완료되었습니다!");
                    }
                    getWhiteList()
                })
        }
    }
    const clickInput2 = async () => {
        if (await myContract.methods.isWhitelisted(input2.current).call() == false) {
            return alert('등록되지 않음')
        }
        console.log(input2.current)
        const Del = await myContract.methods.remove(input2.current).send({ from: window.klaytn.selectedAddress, gas: 300000, value: 0 })
        if (Del.status === true) {
            await axios.post('http://localhost:4000/deletelist',
                {
                    data: { from: input2.current, status: Del.status },
                })
                .then((res) => {
                    console.log(res);
                    let result = res.data;
                    console.log(result)
                    if (result === "Success!") {
                        alert("화이트리스트 제거 완료되었습니다!");
                    }
                    getWhiteList()
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
                            onChange={(e) => input1.current = e.target.value}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={clickInput1}>
                            Add
                        </Button>
                    </InputGroup>
                </div>

                <div>
                    <h2>test</h2>
                    <input onChange={(e) => input2.current = e.target.value}></input><button onClick={clickInput2}>화리 삭제</button>
                    <input onChange={(e) => input3.current = e.target.value}></input><button onClick={clickInput3}>화리 확인</button>
                    <Trash >
                    <img src={trash}  onClick={buttonDelete} width="100%"/>
                    </Trash>
                </div>
            </div>
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
                                {/* <td> *</td> */}
                                <td>
                                    {
                                        !checkDelete ?
                                        <span> *</span>
                                        : <Form.Check aria-label="option 1" />

                                    }
                                </td>
                                <td>{item.publicKey}</td>
                            </tr>
                        })
                    }
                    <tr>
                        <td>{accounts} </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        
    )
}

export default WhiteList