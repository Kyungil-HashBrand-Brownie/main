import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { nft1 } from 'img/nft'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import {
    VoteDOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    ControlButton, PageButton, VoteButton, VoteButtonDiv, VoteTCReadImg
} from './voteModule'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { newProposals, startVote, useAlert } from 'api'
import AlertModal from 'components/AlertModal'
import Delete from '../../img/vote/delete.png'
import { nftAction } from 'redux/actions/nftAction'


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
const VoteStatus = styled.div`
    position: absolute;
    border-radius: 10px;
    padding: 4px 10px;
    font-weight: bold;
    top: 24%;
    right: 23%;
    background: yellow;
`

const CommunityApproval = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useDispatch();
    const {myAddress} = useSelector(state => state.nft);

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [proposals, setProposals] = useState([])
    const [state, setState] = useState("")
    const [image, setImage] = useState("")

    const [counter, setCounter] = useState([{
        id: 0,
        content: '',
        state: false,
    }])

    const addProposal = (proposal) => {
        let compareIdx = counter[counter.length - 1].id
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


    const getData = async () => {
        let {data} = await axios.get(`/api/community/read/vote/${id}`);
        console.log('data: ', data);
        setTitle(data.title)
        setContent(data.content)
        setState(data.state)
        setProposals(data.proposals)
        setImage(data.imgURI)
    }

    useEffect(() => {
        getData();
    }, [])

    const customAlert = useAlert();

    const movePage = () => {
        navigate(-1);
    }

    const submitApporoval = async (e)=> {
        e.preventDefault();
        let proposalGroup = e.target.proposal
        let proposals = [];
        
        proposalGroup.forEach((proposal)=> {
            proposals.push(proposal.value);
        })
        // console.log(proposals)
        try {
            const result = await newProposals(myAddress,proposals.length);
            if(result.status){
                const voteStartResult = await startVote();
                if (voteStartResult.status) {
                    dispatch(nftAction.setVoteStatus())
                    const data = {title, content, proposals, id, state : "투표 진행 중"};
                    await axios.post('/api/community/approve',data)
                    customAlert.open('안건이 승인되었습니다!')
                }
                else {
                    customAlert.open('transaction fail')
                }
            }
          }
          catch (e){
            console.log(e)
            return e
          }
        
    }


    return (
        <>
        <AlertModal {...customAlert}/>
        <VoteDOuter>
            <VoteDRightOuter>
                <VoteDHeaderOuter>
                    <VoteDHeader>안건 승인</VoteDHeader>
                </VoteDHeaderOuter>
                <VoteDMainOuter>
                    <VoteDMain>
                        <VoteTCReadImg img={image} />
                        <VoteStatus state={state}>{state}</VoteStatus>
                        <Form onSubmit={submitApporoval}>
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none'}}
                                name='title'
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                            />
                        </VoteDPart>
                        <VoteDPart>
                            <VoteDType>내용</VoteDType>
                            <Form.Control
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '200px', resize: 'none' }}
                                name='content'
                                value={content}
                                onChange={(e)=>setContent(e.target.value)}
                            />
                        </VoteDPart>
                                <VoteDPart>
                                    <VoteDType>안건</VoteDType>
                                    <div className='proposal'>
                                    {proposals.map((item, index) => 
                                        <div 
                                            className='proposal-form'
                                            key={index}
                                        >
                                        <Form.Control
                                            as="textarea"
                                            value={item}
                                            name='proposal'
                                            className='vote-text'
                                            style={{ width: '837px', height: '40px', resize: 'none' }}
                                        />
                                        </div>
                                     )}
                                     {counter.map((item, index) => 
                                            <div 
                                                className='proposal-form'
                                                key={index}
                                            >
                                            <Form.Control
                                                disabled={item.state ? true : false}
                                                as="textarea"
                                                placeholder='안건을 입력해주세요'
                                                name={item.state ? 'proposal' : 'addProposal'}
                                                className='vote-text'
                                                style={{ width: '770px', height: '40px', resize: 'none' }}
                                                value={item.content}
                                                onChange={(e) => {proposalContent(e, item)}}
                                            />
                                            {!item.state ? 
                                                <button 
                                                    type='button'
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
                            <VoteButtonDiv>
                                <VoteButton type='submit'>저장 후 투표 시작</VoteButton>
                            </VoteButtonDiv>
                            <ControlButton>
                                <PageButton type='button' onClick={movePage}>이전화면</PageButton>
                            </ControlButton>
                        </Form>
                    </VoteDMain>
                </VoteDMainOuter>
            </VoteDRightOuter>
        </VoteDOuter>
        </>
    )
}

export default CommunityApproval