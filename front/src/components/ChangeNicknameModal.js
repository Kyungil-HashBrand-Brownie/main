import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAlert } from 'api';

function ChangeNicknameModal({ show, onHide, setNickname }) {
    const {myAddress} = useSelector(state=> state.nft)
    const nickInput = useRef("")
    const [alert, setAlert] = useState("")

    const reset = () => {
        setAlert('');
        onHide();
    }

    const clickChange = async ()=> {
        if (nickInput.current.value==='') {
            setAlert('Invalid nickname!')
        }

        else {
            const {data} = await axios.post("/api/user/modify",{publicKey:myAddress, nickname: nickInput.current.value})
            if(data === "success") {
                nickInput.current.value = ""
                setNickname(myAddress);
                onHide();
            }
            else if(data === "nickname already exists"){
                setAlert("Nickname already exists!")
            }
        }

    }

    return (
        <Modal
            {...{ show, onHide }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            className='alert-modal'
        >
            <Modal.Header className='modal-header'>
                <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "20px"}}>
                    Nickname
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <Form.Group style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <InputGroup>
                    <FormControl
                        placeholder="Enter your nickname"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={()=>setAlert("")}
                        autoFocus
                        // size='lg'
                        ref={nickInput}
                    />
                    <Button variant="outline-secondary" onClick={clickChange} style={{marginLeft: '10px'}}>
                        Change
                    </Button>
                    </InputGroup>
                    <Form.Label style={{margin: 'auto', fontWeight:'300', marginTop: '4px' ,marginLeft: '10px', color: 'red'}}>
                        <b>{alert}</b>
                    </Form.Label>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <Button 
                className='modal-btn' 
                onClick={reset} 
                style={{transform: 'translate(-142px, -10px)'}}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChangeNicknameModal;