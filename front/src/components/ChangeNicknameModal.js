import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function ChangeNicknameModal({ show, onHide, setNickname }) {
    const {myAddress} = useSelector(state=> state.nft)
    const nickInput = useRef("")
    const [alert, setAlert] = useState("")

    const clickChange = async ()=> {
        const {data} = await axios.post("/user/modify",{publicKey:myAddress, nickname: nickInput.current.value})
        if(data === "success") {
            nickInput.current.value = ""
            setNickname(myAddress);
            onHide();
        }
        else if(data === "nickname already exists"){
            setAlert("nickname already exists")
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
            <Modal.Header closeButton className='modal-header'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Nickname
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <Form.Group >
                    <InputGroup>
                    <FormControl
                        placeholder="Enter your nickname"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={()=>setAlert("")}
                        // size='lg'
                        ref={nickInput}
                    />
                    <Button variant="outline-secondary" onClick={clickChange} >
                        Change
                    </Button>
                    </InputGroup>
                    <Form.Label>{alert}</Form.Label>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <Button className='modal-btn' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChangeNicknameModal;