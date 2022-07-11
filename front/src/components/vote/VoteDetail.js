import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import CommunityTopic from './CommunityTopic'
import Delete from '../../img/vote/delete.png'
import _ from 'lodash'
import {
    VoteDOuter, VoteDLeftOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    VoteDArea, VoteButtonDiv, VoteButton, ControlButton, PageButton
} from './voteModule'
import { useSelector } from 'react-redux'
import axios from 'axios'

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

const VoteDetail = ({ id }) => {
    const {nickname} = useSelector(state => state.nft);

    const [counter, setCounter] = useState([{
        id: 0,
        content: '',
        state: false,
    }])

    const handleSubmit = async (e)=> {
        e.preventDefault();
        let proposals = [];
        let proposalGroup = e.target.title
        proposalGroup.forEach((proposal)=>proposals.push(proposal.value))
        console.log(proposals)
        // const title = e.target.Title.value
        // const content = e.target.Content.value
        // const proposals = e.target.proposals.value
        // const data = {title, content, proposals, nickname}
        // await axios.post('/api/community/write',data)
    }

    const addProposal = (proposal) => {
        let compareIdx = counter[counter.length - 1].id
        if (proposal.id == compareIdx) {
            if (proposal.content == '') alert('안건을 입력해 주세요.')
            else {
                let newArr = _.cloneDeep(counter)
                newArr = newArr.map(item => {
                    if (item.id == compareIdx) {
                        item.state = true
                    }
                    return item
                })
                newArr.push({
                        id: compareIdx + 1,
                        content: '',
                        state: false,
                })
                setCounter(newArr)
            }
        }
    }

    const delProposal = (item) => {
        let newArr = _.cloneDeep(counter);
        newArr = newArr.filter((arr) => arr.id != item.id)
        setCounter(newArr)
    } 

    const proposalContent = (e, item) => {
        let data = {...item, content: e.target.value};
        let newArr = _.cloneDeep(counter).map((arr) => {
            if (arr.id == item.id) return data;
            return arr
        })
        setCounter(newArr)
    }

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
                        <Form onSubmit={handleSubmit}>
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none'}}
                                name='title'
                            />
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>내용</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '200px', resize: 'none' }}
                                name='content'
                            />
                        </VoteDPart>
                        {id == 0 &&
                            <>
                                <VoteDPart>
                                    <VoteDType>안건</VoteDType>
                                    <div className='proposal'>
                                    {counter.map((item, index) => 
                                        <div 
                                            className='proposal-form'
                                            key={index}
                                        >
                                        <Form.Control
                                            disabled={item.state ? true : false}
                                            as="textarea"
                                            placeholder='안건을 입력해주세요'
                                            name='text'
                                            className='vote-text'
                                            style={{ width: '770px', height: '40px', resize: 'none' }}
                                            value={item.content}
                                            onChange={(e) => {proposalContent(e, item)}}
                                        />
                                        {!item.state ? 
                                            <button 
                                                onClick={() => addProposal(item)}
                                                className='proposal-btn'>
                                                등록
                                            </button>
                                        : <div className='proposal-del-div'>
                                            <img 
                                            className='proposal-del'
                                            src={Delete} 
                                            onClick={() => delProposal(item)}
                                            />
                                        </div>
                                        }
                                        </div>
                                    )}
                                    </div>
                                </VoteDPart>
                                {/* <VoteDPart>
                                    <VoteDType>파일 업로드 </VoteDType>
                                    <VoteDArea>
                                        <div>파일은 최대 3개까지 업로드 가능합니다.(10MB)</div>
                                        <input type='file' />
                                        <input type='file' />
                                        <input type='file' />
                                    </VoteDArea>
                                </VoteDPart> */}
                            </>
                        }
                        <VoteButtonDiv>
                            <VoteButton>등록하기</VoteButton>
                        </VoteButtonDiv>
                        </Form>
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