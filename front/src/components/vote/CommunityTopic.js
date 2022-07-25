import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TopicOuter, TopicHeader, Topic } from './voteModule'

const CommunityTopic = ({ setState }) => {
    const navigate = useNavigate();
    const changeState = (state) => {
        if (window.location.pathname.startsWith('/write') || 
            window.location.pathname.startsWith('/community/read/')  
        ) {
            let page = state ? 'vote' : 'default'
            console.log(page)
            navigate(`/community/${page}`)
        }
        else setState(state)
    }
    return (
        <TopicOuter>
            <TopicHeader>Topic</TopicHeader>
            <Topic onClick={() => changeState(0)}>Board</Topic>
            <Topic onClick={() => changeState(1)}>Vote</Topic>
        </TopicOuter>
    )
}

export default CommunityTopic