import React, { useState, useRef, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { trash , trash2 } from '../img'
import { checkWhite, addWhite, removeSelectedWhites, useAlert } from 'api'
import AlertModal from './AlertModal'
import { nftAction } from 'redux/actions/nftAction'
import EndVote from './EndVote'

const Trash = styled.div`
    width: 50px;
    cursor: pointer;
`
const AdminPage_LayOut = styled.div`
    /* 좌우로 정렬 */
    display: flex;
    /* 밑으로 버튼 내리기 */
    flex-direction: column;
    /*  위 아래 정렬*/
    /* justify-content: center; */
    /* 왼쪽 오른쪽 정렬 */
    align-items: center;
    /* 헤이트 줘야함 */
    height: 90vh;
    width: 70% ;
    margin-top: auto ;
    /* background-color: red ; */
    margin: auto ;
    background-color: white;
    /* opacity: 0.84; */
    border-radius: 20px;
`

const WhiteList = () => {
    const customAlert = useAlert();
    const dispatch = useDispatch();

    const { myAddress } = useSelector(state => state.nft);
    const [list, setList] = useState([]);
    const [checkDelete, setCheckDelete] = useState(false);
    const [deleteList, setDeleteList] = useState([]);
    const [input, setInput] = useState('');

    const addInput = useRef("")

    const getWhiteList = async () => {
        console.log('getWhite')
        try {
            const { data } = await axios.get("/api/white/whitelist")
            setList(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const buttonDelete = () => {
        // console.log(deleteList)

        // console.log(checkDelete) // false
        if (!checkDelete) {
            setDeleteList([])
            setCheckDelete(!checkDelete)
        }
        else delWhitelists(deleteList)
    }

    useEffect(() => {
        getWhiteList();
    }, [])

    const addWhitelist = async () => {
        if (await checkWhite(addInput.current)) {
            setInput('');
            return customAlert.open('이미 등록됨')
        }
        const Sucs = await addWhite(addInput.current)
        // console.log(Sucs)
        if (Sucs.status === true) {
            await axios.post('/api/white/whitelist',
                {
                    data: { from: addInput.current, status: Sucs.status },
                })
                .then((res) => {
                    // console.log(res);
                    let result = res.data;
                    // console.log(result)
                    if (result === "Success!") {
                        customAlert.open("화이트리스트 설정 완료되었습니다!");
                    }
                    dispatch(nftAction.checkWhitelist(myAddress));
                    getWhiteList()
                    setInput('')
                })
        }
    }

    const delWhitelists = async (addressArr) => {
        if (addressArr.length) {
            try {
                const Del = await removeSelectedWhites(addressArr)
                if (Del.status) {
                    const {data} = await axios.post('/api/white/deletelists',
                        addressArr
                    )
                    if (data === "Success!") {
                        customAlert.open("화이트리스트 제거 완료되었습니다!");
                        dispatch(nftAction.checkWhitelist(myAddress));
                        setCheckDelete(!checkDelete)
                    }
                    getWhiteList()
                }
            } catch(e) {console.log(e)}
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
        <AdminPage_LayOut>
            <div>
                <AlertModal {...customAlert} />
                <div className="admin_mainContainer">
                    <div className="admin_title">White List key</div>
                    <div className='admin_InputSize'>
                        <InputGroup className="mb-3" >
                            <FormControl
                                // className="Input_Gruop"
                                placeholder="White List"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                size='lg'
                                onChange={(e) => {
                                    addInput.current = e.target.value
                                    setInput(e.target.value)
                                }}
                                className='admin_add_input'
                                value={input}
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
                <Table striped className="table-whitelistkey">
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
                                                    // checked={checkedA}
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
        </AdminPage_LayOut>

    )
}

export default WhiteList