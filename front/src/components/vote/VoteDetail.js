import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { nftInstance } from 'configs'
import VoteDescription from './VoteDescription'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import {
    VoteDOuter, VoteDRightOuter, VoteDHeaderOuter,
    VoteDHeader, VoteDMainOuter, VoteDMain, VoteDPart, VoteDType,
    VoteTCBodyImg, VoteButtonDiv, VoteButton, ControlButton, PageButton
} from './voteModule'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useAlert } from 'api'
import AlertModal from 'components/AlertModal'
import ImageSelect from './ImageSelect'

const VoteDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const customAlert = useAlert();

    const { nickname, isDeployer, imgModalState } = useSelector(state => state.main);
    const { myAddress } = useSelector(state => state.nft);

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
    const [image, setImage] = useState(null);
    const [myImage, setMyImage] = useState(null)

    const action = async () => {
        let myBrownyNFTs = await nftInstance.methods.ownTokens().call(
            { from: myAddress })
        let dummy = [];
        const result = await axios.post('/api/image/images', { myBrownyNFTs, dummy })
        let data = result.data;
        setImage(data);
        setMyImage(`/api/image/images/${data[0].addr}`)
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const title = e.target.title.value
        const content = e.target.content.value
        let proposalGroup = e.target.proposal
        // if(id === "0"){ //vote category
        let proposals = [];
        proposalGroup.forEach((proposal)=> {
            if(proposal.value) proposals.push(proposal.value);
        })
        if (proposals.length) {
            const data = {title, content, proposals, nickname}
            await axios.post('/api/community/voteWrite', data)
            customAlert.open("성공적으로 등록 되었습니다!")
        }
        else {
            customAlert.open("1개 이상 안건을 등록해주세요!")
        }
        // }
        // else{ //board category
            // const data = {title, content, nickname};
            // await axios.post('/api/community/write',data)
        // }
        // movePage();
    }

    const proposalContent = (e, item) => {
        let data = {...item, content: e.target.value};
        let newArr = _.cloneDeep(counter).map((arr) => {
            if (arr.id == item.id) return data;
            return arr
        })
        setCounter(newArr)
    }

    const openModal = () => {
        if (!imgModalState) dispatch({type: 'IMG_OPEN'})
    }

    const closeModal = () => {
        dispatch({type: 'IMG_CLOSE'});
    }

    const movePage = () => {
        closeModal();
        navigate('/community')
    }

    useEffect(() => {
        action();
    }, [])

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
                    {image != null &&
                    
                    <VoteDMain>
                        <VoteTCBodyImg 
                            img={myImage} 
                            onClick={openModal}
                        />
                        <ImageSelect 
                            image={image} 
                            myImage={myImage}
                            setMyImage={setMyImage}
                            closeModal={closeModal}
                        />
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
                                    style={{ width: '810px', height: '40px', resize: 'none' }}
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
                            <PageButton onClick={movePage}>이전화면</PageButton>
                        </ControlButton>
                    </VoteDMain>
                    }
                </VoteDMainOuter>
            </VoteDRightOuter>
        </VoteDOuter>
        </>
    )
}

export default VoteDetail