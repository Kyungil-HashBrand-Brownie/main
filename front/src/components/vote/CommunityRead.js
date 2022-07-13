import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import CommunityTopic from './CommunityTopic'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import {
    VoteDOuter, VoteDLeftOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    ControlButton, PageButton
} from './voteModule'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useAlert } from 'api'
import AlertModal from 'components/AlertModal'

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

const CommunityRead = () => {
    const navigate = useNavigate();
    const { type, id } = useParams();

    const customAlert = useAlert();

    const { nickname } = useSelector(state => state.nft);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const title = e.target.title.value
        const content = e.target.content.value
        let proposalGroup = e.target.proposal
        if(proposalGroup){
            let proposals = [];
            if(proposalGroup.length) {
                proposalGroup.forEach((proposal)=> {
                    if(proposal.value) proposals.push(proposal.value)
                })
                console.log(proposals)
                
                const data = {title, content, proposals, nickname}
                await axios.post('/api/community/voteWrite',data)
            }
            else {
                customAlert.open("1개 이상 안건을 등록해주세요")
            }
        }
        else{
            const data = {title, content, nickname}
            await axios.post('/api/community/write',data)
        }
    }

    const movePage = () => {
        type == 'vote' ? navigate('/community/vote') : navigate('/community/default')
    }

    return (
        <>
        <AlertModal {...customAlert}/>
        <VoteDOuter>
            <VoteDLeftOuter>
                <CommunityTopic />
            </VoteDLeftOuter>

            <VoteDRightOuter>
                <VoteDHeaderOuter>
                    <VoteDHeader>게시판</VoteDHeader>
                </VoteDHeaderOuter>
                <VoteDescription />
                <VoteDMainOuter>
                    <VoteDMain>
                        <VoteTCBodyImg img={nft1} />
                        <Form onSubmit={handleSubmit}>
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
                                readOnly
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none'}}
                                name='title'
                            />
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>내용</VoteDType>
                            <Form.Control
                                readOnly
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '200px', resize: 'none' }}
                                name='content'
                            />
                        </VoteDPart>
                        {/* {id == 0 && */}
                            {/* <> */}
                            { type == 'vote' &&
                                <VoteDPart>
                                    <VoteDType>안건</VoteDType>
                                    <div className='proposal'>
                                    {/* {counter.map((item, index) =>  */}
                                        <div 
                                            className='proposal-form'
                                            // key={index}
                                        >
                                        <Form.Control
                                            readOnly
                                            as="textarea"
                                            placeholder='안건'
                                            name='proposal'
                                            className='vote-text'
                                            style={{ width: '837px', height: '40px', resize: 'none' }}
                                        />
                                        </div>
                                    {/* )} */}
                                    </div>
                                </VoteDPart>
                            }
                            {/* </> */}
                        {/* } */}
                        </Form>
                        <ControlButton>
                            <PageButton onClick={movePage}>이전화면</PageButton>
                        </ControlButton>
                    </VoteDMain>
                </VoteDMainOuter>
            </VoteDRightOuter>
        </VoteDOuter>
        </>
    )
}

export default CommunityRead