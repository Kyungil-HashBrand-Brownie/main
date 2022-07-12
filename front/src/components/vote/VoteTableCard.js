import React from 'react'
import styled from 'styled-components'
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

const VoteTableCard = ({ img, img1 }) => {
    return (
        <VoteTCardOuter>
            <VoteTCHeader>
                <VoteTCImage img={img}></VoteTCImage>
                <VoteTCContent>
                    <VoteTCUser><i>Username</i></VoteTCUser>
                    <VoteTCState>완료</VoteTCState>
                </VoteTCContent>
            </VoteTCHeader>
            <VoteTCBodyOuter>
                <VoteTCBody>
                    <VoteTCBodyHeader>
                        <VoteTCBodyTitle>투표 주제 </VoteTCBodyTitle>
                        <VoteTCBodyVoteCount> 153 Vote</VoteTCBodyVoteCount>
                    </VoteTCBodyHeader>
                    <VoteTCBodyMain>
                        <VoteTCBodyContent>투표 내용 설명~</VoteTCBodyContent>
                        <VoteTCBodyImg img={img1}></VoteTCBodyImg>
                    </VoteTCBodyMain>
                </VoteTCBody>
            </VoteTCBodyOuter>
        </VoteTCardOuter>
    )
}

export default VoteTableCard