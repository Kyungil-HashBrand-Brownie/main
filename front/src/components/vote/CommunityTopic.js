import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const TopicOuter = styled.div`
    width: 60%;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: white;
`
const TopicHeader = styled.div`
    text-align: center;
    border-bottom: 2px solid black;
    font-size: 20px;
    font-weight: bold;
    background: pink;
    /* background: rgb(233, 201, 178); */
`
const Topic = styled.div`
    width: 50%;
    font-size: 18px;
    /* background: lightgray; */
    border-radius: 10px;
    padding: 0px 15px;
    /* font-weight: bold; */
    /* text-align: justify; */
    margin: auto;
    cursor: pointer;
    

    &:hover {
        transform: scale(1.1);
        border-radius: 10px;
        background: pink;
    }
`

const CommunityTopic = ({ setState }) => {
    const navigate = useNavigate();
    const changeState = (state) => {
        if (window.location.href == 'http://localhost:3000/votewrite') {
            let page = state ? 'vote' : 'default'
            navigate(`/community/${page}`)
        }
        else setState(state)
    }
    return (
        <TopicOuter>
            <TopicHeader>Topic</TopicHeader>
            <Topic onClick={() => changeState(1)}>- Vote</Topic>
            <Topic onClick={() => changeState(0)}>- 기타</Topic>
                {/* <input type='file' /> */}
        </TopicOuter>
    )
}

export default CommunityTopic