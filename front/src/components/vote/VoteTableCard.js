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

const VoteTableCard = ({ data, img, img1, id }) => {
    const navigate = useNavigate();
    const {title, content, nickname, state} = data;

    return (
        <VoteTCardOuter
            style={{visibility: content=='' ? 'hidden' : 'visible'}}
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
                    </VoteTCBodyMain>
                </VoteTCBody>
            </VoteTCBodyOuter>
        </VoteTCardOuter>
    )
}

export default VoteTableCard