import React from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import CommunityTopic from './CommunityTopic'
import {
    VoteDOuter, VoteDLeftOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    VoteDArea, VoteButtonDiv, VoteButton, ControlButton, PageButton
} from './voteModule'

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

const VoteDetail = () => {
    return (
        <VoteDOuter>
            <VoteDLeftOuter>
                <CommunityTopic />
            </VoteDLeftOuter>

            <VoteDRightOuter>
                <VoteDHeaderOuter>
                    <VoteDHeader>글 작성하기</VoteDHeader>
                </VoteDHeaderOuter>
                <VoteDescription />
                <VoteDMainOuter>
                    <VoteDMain>
                        <VoteTCBodyImg img={nft1} />
                        <VoteDPart>
                            <VoteDType>안건제목 </VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none' }}
                            />
                            {/* <VoteDInput /> */}
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>안건내용/<br />배경 </VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '200px', resize: 'none' }}
                            />
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>안건</VoteDType>
                            <Form.Control
                                as="textarea"
                                placeholder='안건을 입력해주세요'
                                className='vote-textarea'
                                style={{ width: '700px', height: '40px', resize: 'none' }}
                            />
                            <button className='proposal-btn'>등록</button>
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>파일 업로드 </VoteDType>
                            <VoteDArea>
                                <div>파일은 최대 3개까지 업로드 가능합니다.(10MB)</div>
                                <input type='file' />
                                <input type='file' />
                                <input type='file' />
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
            </VoteDRightOuter>
        </VoteDOuter>
    )
}

export default VoteDetail