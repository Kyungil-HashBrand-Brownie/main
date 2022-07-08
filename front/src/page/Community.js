import React, { useState } from 'react'
import styled from 'styled-components'
import MainHeader from 'components/MainHeader'
import CommunityPostButton from 'components/vote/CommunityPostButton'
import CommunityTopic from 'components/vote/CommunityTopic'
import CommunityVoteTable from 'components/vote/CommunityVoteTable'
import VoteDescription from 'components/vote/VoteDescription'
import CommunityTable from 'components/vote/CommunityTable'

const VoteDOuter = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const CommunityMainOuter = styled.div`
    /* display: flex; */
    margin: auto;
    /* justify-content: center; */
    /* flex-direction: column; */
    background: white;
    width: 1200px;
    min-height: 600px;
    border-radius: 20px;
`
const CommunitySide = styled.div`
    position: absolute;
    right: 1%;
    top: 8%;
    display: flex;
    justify-content: center;
    /* background: blue; */
    width: 300px;
    max-height: 120px;
    margin-left: 5%;
    margin-top: 5%;
`
const Community = ({ id }) => {
    const [state, setState] = useState(id ? id == 'vote' ? true : false : false);

    return (
        <VoteDOuter>
            <CommunitySide>
                <CommunityTopic setState={setState}/>
            </CommunitySide>
            <CommunityMainOuter>
                <MainHeader />
                <VoteDescription />
                <CommunityPostButton />
                {!state 
                ? <CommunityTable />
                : <CommunityVoteTable />
                }
            </CommunityMainOuter>
        </VoteDOuter>
    )
}

export default Community