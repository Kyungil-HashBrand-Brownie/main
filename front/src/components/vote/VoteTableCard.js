import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
    VoteTCardOuter, VoteTCHeader, VoteTCContent, VoteTCUser, VoteTCState, VoteTCBodyOuter,
    VoteTCBody, VoteTCBodyHeader, VoteTCBodyTitle, VoteTCBodyVoteCount,
    VoteTCBodyMain, VoteTCBodyContent
} from './voteModule'

const VoteTCImage = styled.div`
    width: 20%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
    background-image: 
        ${props => props.img && `url(${props.img})`};
`
const VoteTCBodyImg = styled.div`
    border: 1px solid black;
    margin-top: 1%;
    margin-left: 1.5%;
    background: gray;
    width: 25%;
    height: 92%;
    background-size: cover;
    background-image: 
        ${props => props.img && `url(${props.img})`};
`

const VoteTableCard = ({ data, img, img1, id }) => {
    const navigate = useNavigate();
    // console.log('data: ', data)
    const {title, content, nickname, state} = data;
    // console.log('id: ', id)

    return (
        <VoteTCardOuter
            style={{visibility: content=='' ? 'hidden' : 'visible'}}
            // onClick={() => {console.log(id)}}
            onClick={() => {navigate(`/community/read/vote/${id}`)}}
        >
            <VoteTCHeader>
                <VoteTCImage img={img}></VoteTCImage>
                <VoteTCContent>
                    <VoteTCUser><i>{nickname}</i></VoteTCUser>
                    <VoteTCState>{state}</VoteTCState>
                </VoteTCContent>
            </VoteTCHeader>
            <VoteTCBodyOuter>
                <VoteTCBody>
                    <VoteTCBodyHeader>
                        <VoteTCBodyTitle>{title} </VoteTCBodyTitle>
                        {state !== '승인 대기 중' && <VoteTCBodyVoteCount> 153 Vote</VoteTCBodyVoteCount>}
                    </VoteTCBodyHeader>
                    <VoteTCBodyMain>
                        <VoteTCBodyContent>{content}</VoteTCBodyContent>
                        {/* <VoteTCImage img={img}></VoteTCImage> */}
                        <VoteTCBodyImg img={img1}></VoteTCBodyImg>
                    </VoteTCBodyMain>
                </VoteTCBody>
            </VoteTCBodyOuter>
        </VoteTCardOuter>
    )
}

export default VoteTableCard