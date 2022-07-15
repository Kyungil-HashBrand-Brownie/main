import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { nft1 } from 'img/nft'
import VoteDescription from './VoteDescription'
import CommunityTopic from './CommunityTopic'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import {
    VoteDOuter, VoteDLeftOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    ControlButton, PageButton, VoteTCBodyImg
} from './voteModule'
import axios from 'axios'
import { useAlert } from 'api'
import AlertModal from 'components/AlertModal'

const CommunityRead = () => {
    const navigate = useNavigate();
    const { type, id } = useParams();

    const [data, setData] = useState({
        title:"",
        content:"",
        proposals:[],
        state:""
    });

    const getData = async () => {
        let result = await axios.get(`http://localhost:4000/api/community/read/${type}/${id}`);
        // console.log('result: ', result);
        setData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const customAlert = useAlert();

    const movePage = () => {
        type == 'vote' ? navigate('/community/vote') : navigate('/community/default')
    }

    console.log(data.content)

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
                    </VoteDMain>
                </VoteDMainOuter>
            </VoteDRightOuter>
        </VoteDOuter>
        </>
    )
}

export default CommunityRead