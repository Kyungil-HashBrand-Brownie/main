import React, { useState, useRef, useEffect } from 'react'
import {Table, Button, Form, InputGroup, FormControl} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { trash , trash2 } from '../img'
import { checkWhite, addWhite, removeSelectedWhites, useAlert } from 'api'
import AlertModal from './AlertModal'

const Trash = styled.div`
    width: 50px;
    cursor: pointer;
`

const WhiteList = () => {
    const customAlert = useAlert();

    const { myAddress } = useSelector(state => state.nft);
    const [list, setList] = useState([]);
    const [checkDelete, setCheckDelete] = useState(false);
    const [deleteList, setDeleteList] = useState([]);

    const addInput = useRef("")
    const delInput = useRef("")
    const checkInput = useRef("")

    // console.log(list);

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
        console.log(deleteList)

        console.log(checkDelete) // false
        // let data = document.query
        if (!checkDelete) setDeleteList([])
        else delWhitelists(deleteList)
        setCheckDelete(!checkDelete)      // console.log(data)
    }

    useEffect(() => {
        getWhiteList()
    }, [])


    const addWhitelist = async () => {
        if (await checkWhite(addInput.current)) {
            return customAlert.open('이미 등록됨')
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
                        customAlert.open("화이트리스트 설정 완료되었습니다!");
                    }
                    getWhiteList()
                })
        }
    }


    const delWhitelists = async (addressArr) => {
        if(addressArr.length===0) return false
        const Del = await removeSelectedWhites(addressArr)
        if (Del.status) {
            const {data} = await axios.post('/white/deletelists',
                addressArr
            )
            if (data === "Success!") {
                customAlert.open("화이트리스트 제거 완료되었습니다!");
            }
            getWhiteList()
        }
    }


    const checkData = (publicKey, checked) => {
        if (checked) {
            console.log(publicKey);
            setDeleteList([...deleteList, publicKey])
        }
        else {
            // deleteList = [0xAc456, ]
            let copy = deleteList.filter((item) => item !== publicKey);
            setDeleteList(copy)
        }


    }

    return (
        <div>
            <AlertModal {...customAlert} />
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
                    <Trash >
                        {
                            checkDelete ?
                            <img src={trash} onClick={buttonDelete} width="100%" />
                            :<img src={trash2} onClick={buttonDelete} width="100%" />
                        }
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
                                            <span> {index+1}</span>
                                            : 
                                            <Form.Check 
                                                aria-label="option 1"
                                                className='whitelistCheck'
                                                onChange={(e) => checkData(item.publicKey, e.target.checked)}
                                            />
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