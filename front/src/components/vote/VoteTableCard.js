import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
    VoteTCardOuter, VoteTCContent, VoteTCUser, VoteTCState, VoteTCBodyOuter,
    VoteTCBody, VoteTCBodyHeader, VoteTCBodyTitle, VoteTCBodyVoteCount,
    VoteTCBodyMain, VoteTCBodyContent, VoteTCBodyProfile
} from './voteModule'

const VoteTCImage = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 100%;
    background-size: cover;
    background-image: 
        ${props => props.img && `url(${props.img})`};
`

const VoteTableCard = ({ data, id }) => {
    const navigate = useNavigate();
    const {title, content, nickname, state, voteCounts, imgURI} = data;
    console.log(imgURI);
    
    let sum;
    
    if(voteCounts){
        const countsArr = JSON.parse(voteCounts)
        sum = countsArr.reduce((a, b)=> a + b )
    }

    return (
        <VoteTCardOuter
            style={{visibility: content=='' ? 'hidden' : 'visible'}}
            onClick={() => {navigate(`/community/read/vote/${id}`)}}
        >
            <VoteTCContent>
                <VoteTCState state={state}>{state}</VoteTCState>
            </VoteTCContent>
            <VoteTCBodyOuter>
                <VoteTCBody>
                    <VoteTCBodyHeader>
                        <VoteTCBodyTitle>{title}</VoteTCBodyTitle>
                        {state !== '승인 대기 중' && <VoteTCBodyVoteCount> {sum} Votes</VoteTCBodyVoteCount>}
                    </VoteTCBodyHeader>
                    <VoteTCBodyMain>
                        <VoteTCBodyContent>{content}</VoteTCBodyContent>
                        <VoteTCBodyProfile>
                            <VoteTCImage img={imgURI}></VoteTCImage>
                            <VoteTCUser><i>{nickname}</i></VoteTCUser>
                        </VoteTCBodyProfile>
                    </VoteTCBodyMain>
                </VoteTCBody>
            </VoteTCBodyOuter>
        </VoteTCardOuter>
    )
}

export default VoteTableCard