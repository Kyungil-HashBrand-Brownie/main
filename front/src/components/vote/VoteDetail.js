import React from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'

const VoteDOuter = styled.div`
    /* display: flex; */
    justify-content: center;
    /* flex-direction: column; */
    background: red;
    width: 1200px;
    min-height: 600px;
    border-radius: 20px;
`
const VoteDHeaderOuter = styled.div`
    display: flex;
    /* background: green; */
    justify-content: center;
    margin-bottom: 30px;
`
const VoteDHeader = styled.div`
    width: 20%;
    font-size: 30px;
    text-align: center;
    /* background: blue; */
`
const VoteDMainOuter = styled.div`
    display: flex;
    justify-content: center;
    /* background: yellow; */
    min-height: 500px;
    margin-top: 30px;
`
const VoteDMain = styled.div`
    width: 95%;
    /* background: white; */
    background: linear-gradient(orange 0%, orange 4.89%, white 35%, white 90.9%);
    border: 4mm ridge rgba(211, 220, 50, .6);
    /* background: rgb(223, 215, 215); */
    border-radius: 10px;
`
const VoteDPart = styled.div`
    margin: auto;
    display: flex;
    width: 90%;
    /* background: blue; */
    min-height: 50px;
    align-items: center;
    margin-top: 10px;
    /* background: rgb(223, 215, 215); */

    .vote-textarea {
        margin-left: 2%;
        width: 820px;
    }
`
const VoteDType = styled.div`
    margin-left: 1%;
    width: 11%;
    height: 100%;
    font-size: 20px;
    border-radius: 3px;
    /* background: white; */
    text-align: center;
`
const VoteDArea = styled.div`
    width: 80%;
    margin-left: 2%;
    /* background: purple; */
`
const VoteButtonDiv = styled.div`
    /* background: blue; */
    width: 25%;
    margin: auto;
    text-align: center;
`
const VoteButton = styled.button`
    width: 160px;
    font-size: 18px;
    border-radius: 3px;
    margin-top: 30px;
`
const VoteTCBodyImg = styled.div`
    width: 150px;
    height: 150px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 50%;
    background-size: cover;
    background-image:
        ${props => props.img && `url(${props.img})`};
    cursor: pointer;

    &:hover {
        transform: scale(1.06);
    }
`
const ControlButton = styled.div`
    width: 25%;
    margin: auto;
    text-align: center;
`
const PageButton = styled.button`
    width: 160px;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 3px;
`

const VoteDetail = () => {
    return (
        <VoteDOuter>
            <VoteDHeaderOuter>
                <VoteDHeader>글 작성하기</VoteDHeader>
            </VoteDHeaderOuter>
            <VoteDescription />
            <VoteDMainOuter>
                <VoteDMain>
                    <VoteTCBodyImg img={nft1}/>
                    <VoteDPart>
                        <VoteDType>안건제목 </VoteDType>
                        <Form.Control
                            as="textarea"
                            className='vote-textarea'
                            style={{ height: '20px' }}
                            />
                        {/* <VoteDInput /> */}
                    </VoteDPart>
                    <VoteDPart>
                        <VoteDType>안건내용 </VoteDType>
                            <Form.Control
                            as="textarea"
                            className='vote-textarea'
                            style={{ height: '200px' }}
                            />
                    </VoteDPart>
                    <VoteDPart>
                        <VoteDType>파일 업로드 </VoteDType>
                        <VoteDArea>
                            파일은 최대 3개까지 업로드 가능합니다.(10MB)
                            {/* <VoteDButton></VoteDButton> */}
                        </VoteDArea>
                    </VoteDPart>
                    <VoteButtonDiv>
                        <VoteButton>등록하기</VoteButton>
                    </VoteButtonDiv>
                    <ControlButton>
                        <PageButton>이전화면</PageButton>
                    </ControlButton>
                </VoteDMain>
            </VoteDMainOuter>
        </VoteDOuter>
    )
}

export default VoteDetail