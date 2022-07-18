import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import {
    VoteDOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    ControlButton, PageButton, VoteTCBodyImg
} from './voteModule'
import axios from 'axios'
import { useAlert } from 'api'
import AlertModal from 'components/AlertModal'
import Proposal from 'components/Proposal'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const CommunityRead = () => {
    const navigate = useNavigate();
    const { type, id } = useParams();

    const {isDeployer} = useSelector(state => state.main);
    const {voteStatus} = useSelector(state => state.nft);

    const [data, setData] = useState({
        title:"",
        content:"",
        proposals:[],
        state:""
    });

    const [radioValue, setRadioValue] = useState('2');
    const [currentProposal, setCurrentProposal] = useState(1);

    const getData = async () => {
        let result = await axios.get(`http://localhost:4000/api/community/read/${type}/${id}`);
        setData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const customAlert = useAlert();

    const movePage = () => {
        navigate('/community')
    }

    const moveApproval = ()=> {
        navigate(`/community/approval/${id}`)
    }

    const changeSelected = (e) => {
        console.log(e.target.value)
        setCurrentProposal(e.target.value)
    }

    const voteSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
        <AlertModal {...customAlert}/>
        <VoteDOuter>
            <VoteDRightOuter>
                <VoteDHeaderOuter>
                    <VoteDHeader>게시판</VoteDHeader>
                </VoteDHeaderOuter>
                <VoteDescription />
                <VoteDMainOuter>
                    <VoteDMain>
                        <VoteTCBodyImg img={nft1} />
                        <div>{data.state}</div>
                        <Form onSubmit={voteSubmit}>
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
                                readOnly
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none'}}
                                name='title'
                                value={data.title}ZZZ
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
                                value={data.content}
                            />
                        </VoteDPart>
                            { type == 'vote' &&
                                <VoteDPart>
                                    <VoteDType>안건</VoteDType>
                                    <div className='proposal'>
                                    {data.proposals.map((item, index) => 
                                        <div 
                                            className='proposal-form'
                                            key={index}
                                        >
                                        {
                                            data.state==="투표 진행 중" && <Proposal key={index} index={index+1} onChange={changeSelected} />
                                        }
                                        <Form.Control
                                            readOnly
                                            as="textarea"
                                            value={item}
                                            name='proposal'
                                            className='vote-text'
                                            style={{ width: '820px', height: '40px', resize: 'none' }}
                                        />
                                        </div>
                                     )}
                                    </div>
                                </VoteDPart>
                            }
                        </Form>
                        <ControlButton>
                            <PageButton onClick={movePage}>이전화면</PageButton>
                        </ControlButton>
                        {
                            isDeployer && type === 'vote' && data.state=="승인 대기 중"
                            ?
                                voteStatus==='0'
                                ?
                                <ControlButton>
                                    <PageButton onClick={moveApproval}>승인하기</PageButton>
                                </ControlButton>
                                :
                                <ControlButton>
                                    이전 투표 진행중
                                </ControlButton>
                            :null
                        }
                        
                    </VoteDMain>  
                </VoteDMainOuter>
            </VoteDRightOuter>
        </VoteDOuter>
        </>
    )
}

export default CommunityRead