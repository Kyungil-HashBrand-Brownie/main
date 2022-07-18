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

const CommunityRead = () => {
    const navigate = useNavigate();
    const { type, id } = useParams();
    console.log('type: ', type)

    const {isDeployer} = useSelector(state => state.nft);

    const [data, setData] = useState({
        title:"",
        content:"",
        proposals:[],
        state:""
    });

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
                        <Form>
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
                                readOnly
                                as="textarea"
                                className='vote-textarea'
                                style={{ height: '20px', resize: 'none'}}
                                name='title'
                                value={data.title}
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
                            isDeployer && type === 'vote' 
                            ?
                            <ControlButton>
                                <PageButton onClick={moveApproval}>승인하기</PageButton>
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