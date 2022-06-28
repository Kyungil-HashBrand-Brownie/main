import React, { useState, useRef, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { trash } from '../img'
import { nftInstance } from "configs";
import { checkWhite, removeWhite, addWhite } from 'api'



const Trash = styled.div`
    width: 50px;
`



const WhiteList = () => {
    const { myAddress } = useSelector(state => state.nft);
    const [list, setList] = useState([]);
    const [checkDelete, setCheckDelete] = useState(false);

    const addInput = useRef("")
    const delInput = useRef("")
    const checkInput = useRef("")

    const getWhiteList = async () => {
        try {
            const { data } = await axios.get("/white/whitelist")
            setList(data)
        }
        catch (e) {
            console.log(e)
        }

    }

    const buttonDelete = () => {
        setCheckDelete(!checkDelete)
    }

    useEffect(() => {
        getWhiteList()
    }, [])

    const addWhitelist = async () => {
        if (await checkWhite(addInput.current)) {
            return alert('이미 등록됨')
        }
        const Sucs = await addWhite(addInput.current)
        console.log(Sucs)
        if (Sucs.status === true) {
            await axios.post('/white/whitelist',
                {
                    data: { from: addInput.current, status: Sucs.status },
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
    const delWhitelist = async () => {
        if (!await checkWhite(delInput.current)) {
            return alert('등록되지 않음')
        }
        const Del = await removeWhite(delInput.current)
        if (Del.status === true) {
            await axios.post('/white/deletelist',
                {
                    data: { from: delInput.current, status: Del.status },
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

    const showWhitelist = async () => {
        alert(await checkWhite(checkInput.current))
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
                            onChange={(e) => addInput.current = e.target.value}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={addWhitelist}>
                            Add
                        </Button>
                    </InputGroup>
                </div>

                <div>
                    <h2>test</h2>
                    <input onChange={(e) => delInput.current = e.target.value}></input><button onClick={delWhitelist}>화리 삭제</button>
                    <input onChange={(e) => checkInput.current = e.target.value}></input><button onClick={showWhitelist}>화리 확인</button>
                    <Trash >
                        <img src={trash} onClick={buttonDelete} width="100%" />
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
                </tbody>
            </Table>
        </div>

    )
}

export default WhiteList