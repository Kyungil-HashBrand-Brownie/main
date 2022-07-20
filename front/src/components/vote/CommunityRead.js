import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
    VoteDOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    ControlButton, PageButton, VoteTCReadImg, VoteButtonDiv, VoteButton, VoteReadState
} from './voteModule'
import axios from 'axios'
import { checkVote, getMyNFTs, getMyStaked, submitVote, useAlert } from 'api'
import AlertModal from 'components/AlertModal'
import Proposal from 'components/Proposal'
import Selected from '../../img/vote/selected.png'

const VoteCount = styled.div`
    position: absolute;
    left: 73%;
`
const SelectedProImg = styled.img`
    position: absolute;
    left: 27.8%;
    width: 80px;
`

const CommunityRead = () => {
    const navigate = useNavigate();
    const { type, id } = useParams();

    const { isDeployer } = useSelector(state => state.main);
    const { voteStatus, myAddress } = useSelector(state => state.nft);

    const [data, setData] = useState({
        title: "",
        content: "",
        proposals: [],
        state: ""
    });

    let selected = data.voteCounts ? JSON.parse(data.voteCounts).map(i => parseInt(i)) : null;
    let selectedIndex = 0; 
    let start = 0;
    if (selected !== null) {
        selected.forEach((s, index) => {
            if (start < s)  {
                selectedIndex = index;
                start = s;
            }
        })
    }
    // console.log(selected);
    // console.log('selectedIndex: ', selectedIndex)

    const [hasVote, setHasVote] = useState(false);
    const [currentProposal, setCurrentProposal] = useState(1);
    const [votingPower, setVotingPower] = useState(0);

    const getVotingPower = async () => {
        const myNFTs = await getMyNFTs(myAddress);
        const myStaked = await getMyStaked(myAddress)
        setVotingPower(myNFTs.length + myStaked.length)
    }

    const getData = async () => {
        let result = await axios.get(`/api/community/read/${type}/${id}`);
        console.log(result)
        setData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const customAlert = useAlert();

    const movePage = () => {
        navigate('/community')
    }

    const moveApproval = () => {
        navigate(`/community/approval/${id}`)
    }

    const changeSelected = (e) => {
        console.log(e.target.value)
        setCurrentProposal(e.target.value)
    }


    const getHasVote = async () => {
        const result = await checkVote(myAddress);
        setHasVote(result)
        console.log(result)
    }

    useEffect(() => {
        if (myAddress) {
            getHasVote();
            getVotingPower();
        }
    }, [myAddress])

    const voteSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitVote(myAddress, currentProposal);
            await axios.post('/api/community/vote', { currentProposal, votingPower })
        }
        catch (e) {
            console.log(e)
            return e
        }
    }

    return (
        <>
            <AlertModal {...customAlert} />
            <VoteDOuter>
                <VoteDRightOuter>
                    <VoteDHeaderOuter>
                        <VoteDHeader>게시판</VoteDHeader>
                    </VoteDHeaderOuter>
                    <VoteDescription />
                    <VoteDMainOuter>
                        <VoteDMain>
                            <VoteTCReadImg img={nft1} />
                            <VoteReadState state={data.state}>{data.state}</VoteReadState>
                            <Form>
                                <VoteDPart>
                                    <VoteDType>제목</VoteDType>
                                    <Form.Control
                                        readOnly
                                        as="textarea"
                                        className='vote-textarea'
                                        style={{ height: '20px', resize: 'none' }}
                                        name='title'
                                        defaultValue={data.title}
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
                                        defaultValue={data.content}
                                    />
                                </VoteDPart>
                                {type == 'vote' &&
                                    <VoteDPart>
                                        <VoteDType>안건</VoteDType>
                                        <div className='proposal'>
                                            {data.proposals.map((item, index) =>
                                                <div
                                                    className='proposal-form'
                                                    key={index}
                                                >
                                                    <Form.Control
                                                        readOnly
                                                        as="textarea"
                                                        defaultValue={item}
                                                        name='proposal'
                                                        className={data.state !== '투표 종료' ? 'vote-text' : (data.state === '투표 종료' && index == selectedIndex) ? 'vote-text selected' : 'vote-text'}
                                                        style={{ width: '800px', height: '40px', resize: 'none' }}
                                                        />
                                                    {(data.state === '투표 종료' && index == selectedIndex) && <SelectedProImg src={Selected} alt='proposal-selected'/>}
                                                    {
                                                        data.state === "투표 진행 중" ? <Proposal key={index} index={index + 1} onChange={changeSelected} />
                                                       : data.state === '투표 종료' ? <VoteCount key={index}>{JSON.parse(data.voteCounts)[index]} Votes</VoteCount> 
                                                       : null
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </VoteDPart>
                                }
                            </Form>
                            {
                                data.state === "투표 진행 중" &&
                                <VoteButtonDiv>
                                    {!hasVote
                                        ?
                                        <>
                                            <div>My Voting Power : {votingPower}</div>
                                            <VoteButton onClick={voteSubmit}>투표하기</VoteButton>
                                        </>
                                        : <div>이미 투표했습니다</div>
                                    }
                                </VoteButtonDiv>
                            }
                            {
                                isDeployer && type === 'vote' && data.state == "승인 대기 중"
                                    ?
                                    voteStatus === '0'
                                        ?
                                        <VoteButtonDiv>
                                            <VoteButton onClick={moveApproval}>승인하기</VoteButton>
                                        </VoteButtonDiv>
                                        :
                                        <VoteButtonDiv>
                                            이전 투표 진행중
                                        </VoteButtonDiv>
                                    : null
                            }
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