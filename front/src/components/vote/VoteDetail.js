import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import {
    VoteDOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    VoteTCBodyImg, VoteButtonDiv, VoteButton, ControlButton, PageButton
} from './voteModule'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useAlert } from 'api'
import AlertModal from 'components/AlertModal'

const VoteDetail = () => {
    const navigate = useNavigate();
    const customAlert = useAlert();

    const {nickname} = useSelector(state => state.main);

    const [counter, setCounter] = useState([{
        id: 0,
        content: '',
    },{
        id: 1,
        content: '',
    },{
        id: 2,
        content: ''
    }
])

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

    const addProposal = (proposal) => {
        let compareIdx = counter[counter.length - 1].id
        if (counter.length == 4) {
            alert('안건은 최대 3개까지 등록할 수 있습니다.')
        }
        else {
            if (proposal.id == compareIdx) {
                if (proposal.content == '') customAlert.open('안건을 입력해 주세요.')
                else {
                    let newArr = _.cloneDeep(counter)
                    newArr = newArr.map(item => {
                        if (item.id == compareIdx) {
                            item.state = true
                        }
                        return item
                    })
                    if (counter.length !== 3) {
                        newArr.push({
                                id: compareIdx + 1,
                                content: '',
                                state: false,
                        })
                    }
                    setCounter(newArr)
                }
            }
        } 
    }

    const delProposal = (item) => {
        console.log(item)
        console.log(counter)
        let newArr = _.cloneDeep(counter);
        newArr = newArr.filter((arr) => arr.id != item.id)
        
        if (newArr.length == 0 || counter.length == 3) {
            let compareIdx = counter[counter.length - 1].id
    
            newArr.push({
                id: compareIdx + 1,
                content: '',
                state: false,
            })
        }

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
        <>
        <AlertModal {...customAlert}/>
        <VoteDOuter>
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
                                required
                            />
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>내용</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '200px', resize: 'none' }}
                                name='content'
                                required
                            />
                        </VoteDPart>
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
                                    placeholder={`안건 ${index + 1}`}
                                    name='proposal'
                                    className='vote-text'
                                    style={{ width: '840px', height: '40px', resize: 'none' }}
                                    value={item.content}
                                    onChange={(e) => {proposalContent(e, item)}}
                                />
                                </div>
                            )}
                            </div>
                        </VoteDPart>
                        <VoteButtonDiv>
                            <VoteButton>등록하기</VoteButton>
                        </VoteButtonDiv>
                        </Form>
                        <ControlButton>
                            <PageButton onClick={() => navigate('/community')}>이전화면</PageButton>
                        </ControlButton>
                    </VoteDMain>
                </VoteDMainOuter>
            </VoteDRightOuter>
        </VoteDOuter>
        </>
    )
}

export default VoteDetail