import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import CommunityTopic from './CommunityTopic'
import Delete from '../../img/vote/delete.png'
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

const VoteDetail = ({ id }) => {
    const [counter, setCounter] = useState([{
        id: 0,
        content: '',
    }])
    const addProposal = (idx) => {
        let compareIdx = counter.length - 1
        if (idx == compareIdx) {
            let doc = document.querySelectorAll('.vote-text')
            if (doc[compareIdx].value == '') alert('안건을 입력해 주세요.')
            else {
                let newArr = [...counter]
                newArr[idx] = 1
                newArr.push(0)
                setCounter(newArr)
            }
        }
    }

    const delProposal = (idx) => {
        console.log(idx)
        // let newArr = [...counter].slice(0, idx).concat([...counter].slice(idx+1));
        // console.log(newArr)
        // console.log(counter)
        // setCounter(newArr)
    } 

    const proposalContent = (e, item, idx) => {
        let data = {...item, content: e.target.value};
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
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none'}}
                            />
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>내용</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '200px', resize: 'none' }}
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
                                            as="textarea"
                                            placeholder='안건을 입력해주세요'
                                            name='text'
                                            className='vote-text'
                                            style={{ width: '770px', height: '40px', resize: 'none' }}
                                            onChange={(e) => {proposalContent(e, item, index)}}
                                        />
                                        {item == 0 ? 
                                            <button 
                                                onClick={() => addProposal(index)}
                                                className='proposal-btn'>
                                                등록
                                            </button>
                                        : <div className='proposal-del-div'>
                                            <img 
                                            className='proposal-del'
                                            src={Delete} 
                                            onClick={() => delProposal(index)}
                                            />
                                        </div>
                                        }
                                        </div>
                                    )}
                                    </div>
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
                            </>
                        }
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