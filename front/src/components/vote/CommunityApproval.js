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

    const {isDeployer} = useSelector(state => state.nft);

    const [data, setData] = useState({
        title:"",
        content:"",
        proposals:[],
        state:""
    });
    const getData = async () => {
        let result = await axios.get(`http://localhost:4000/api/community/read/${type}/${id}`);
        console.log(result)
        // console.log('data: ', result.data);
        setData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const customAlert = useAlert();

    const movePage = () => {
        navigate(-1);
    }

    const submitApporoval = ()=> {
        navigate('/community/approval')
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
                        <Form>
                        <VoteDPart>
                            <VoteDType>제목</VoteDType>
                            <Form.Control
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
                                            as="textarea"
                                            value={item}
                                            name='proposal'
                                            className='vote-text'
                                            style={{ width: '837px', height: '40px', resize: 'none' }}
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