import React, { useState, useRef } from 'react';
import styled from "styled-components";
import Logo from '../img/logo.png';
import axios from 'axios';
import Exit from '../img/exit.png';
// import Draggable from 'react-draggable';

const StyledBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    
`

const StyledOuter = styled.div`
    width: 350px;
    height: 420px;
    background: hsl(0, 3%, 41%);
    display: flex;
    justify-content: center;
    /* opacity: 94%; */
`

const StyledWhiteListDiv = styled.div`
    width: 280px;
    height: 400px;
    background: pink;
    text-align: center;
    border: 2px solid black;
    border-radius: 5px;
`

const StyledWhiteListImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 20px 0px 40px 0px; 
`
const StyledModalExit = styled.img`
    width: 30px;
    height: 30px;
    float: right;
    cursor: pointer;
`

const WhiteList = () => {
    const uploadImg = useRef(0);
    const [image, setImage] = useState(Logo);

    const onUploadImg = async (e) => {
        // console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        // 서버에 { key: 해당 메타마스크 주소 value: 이미지 } 저장
        // const result = await axios.post('http://localhost:4000/api/whitelist', formData,
            // { headers: { 'Accept': 'multipart/form-data' } },
        // ) 
        // setImage('http://localhost:4000/' + result);
    }

    const onUploadImgBtn = (e) => {
        e.preventDefault();
        uploadImg.current.click();
    }

    return (
        <StyledBody>
        <StyledOuter>
        <StyledWhiteListDiv>
            <div className='modal-open'>
                <StyledModalExit src={Exit} alt="modal exit" />
            </div>
            <div>
                <StyledWhiteListImg src={image} alt="upload img"/>
                <input ref={uploadImg} type='file'
                    className='upload-img'
                    accept='image/*' name='file'
                    onChange={onUploadImg}
                />
                <div className='upload-btn-box'>
                    <button className='upload-btn'
                        onClick={onUploadImgBtn}>이미지 등록</button>
                </div>
                <div className='create-btn-box'>
                    <button className='create-btn'>nft 생성하기</button>
                </div>
            </div>
        </StyledWhiteListDiv>
        </StyledOuter>
        </StyledBody>
    //     <Draggable
    //     handle=".handle"
    //     defaultPosition={{x: 0, y: 0}}
    //     position={null}
    //     grid={[25, 25]}
    //     scale={1}
    //     bounds={{left:0, right: 1500, top:0, bottom: 100}}
    //     // onStart={handleStart}
    //     // onDrag={handleDrag}
    //     // onStop={handleStop}
    //     >
    //     <div>
    //       <div className="handle">Drag from here</div>
    //       <div>This readme is really dragging on...</div>
    //     </div>
    //   </Draggable>
        
    )
}

export default WhiteList