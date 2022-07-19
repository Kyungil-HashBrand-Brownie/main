import React, { useState } from 'react'
import styled from 'styled-components'
import MainHeader from 'components/MainHeader'
import CommunityPostButton from 'components/vote/CommunityPostButton'
import CommunityTopic from 'components/vote/CommunityTopic'
import CommunityVoteTable from 'components/vote/CommunityVoteTable'
import VoteDescription from 'components/vote/VoteDescription'
import CommunityTable from 'components/vote/CommunityTable'
import { useSelector } from 'react-redux'
import Pagination from 'components/vote/Pagination'
import ImgComponent from 'components/ImgComponent'

const VoteDOuter = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const CommunityMainOuter = styled.div`
    margin: auto;
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
    width: 300px;
    max-height: 120px;
    margin-left: 5%;
    margin-top: 5%;
`
const Community = () => {
    const {userRank, isDeployer} = useSelector(state => state.main)
    return (
        <>
        <ImgComponent />
        <VoteDOuter>
            <CommunityMainOuter>
                <MainHeader />
                <VoteDescription />
                {(isDeployer || userRank === 3) &&
                    <CommunityPostButton />
                }
                <CommunityVoteTable />
            </CommunityMainOuter>
        </VoteDOuter>
        </>
    )
}

export default Community