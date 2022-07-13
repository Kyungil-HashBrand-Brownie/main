import React from 'react'
import NoPage from 'page/NoPage'
import { useParams } from 'react-router-dom'
import CommunityRead from 'components/vote/CommunityRead'

const CommunityReadRoute = () => {
    let { type } = useParams();
    return ( ['board', 'vote'].includes(type)
    ? <CommunityRead />
    : <NoPage />
    )
}

export default CommunityReadRoute