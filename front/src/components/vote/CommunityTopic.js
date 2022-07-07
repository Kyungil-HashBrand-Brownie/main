import React from 'react'
import styled from 'styled-components'

const TopicOuter = styled.div`
    width: 6%;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: white;

`
const TopicHeader = styled.div`
    text-align: center;
    border-bottom: 2px solid black;
    /* background: rgb(233, 201, 178); */
`
const TopicFlex = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    background: green;
`
const Topic = styled.div`
    padding-left: 15px;
    width: 70%;
    /* font-weight: bold; */
    text-align: justify;
    margin: 0 auto;
    cursor: pointer;
    

    &:hover {
        transform: scale(1.1);
        border-radius: 10px;
        background: lightgray;
    }
`

const CommunityTopic = () => {
    return (
        <TopicOuter>
            <TopicHeader>Topic</TopicHeader>
                <Topic>- Vote</Topic>
                <Topic>- 기타</Topic>
        </TopicOuter>
    )
}

export default CommunityTopic