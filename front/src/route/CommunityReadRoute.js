import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import CommunityRead from 'components/vote/CommunityRead'

const CommunityReadRoute = () => {
    let { type } = useParams();
    
    return ( type == 'vote'
    ? <CommunityRead />
    : <Navigate to='/nopage' />
    )
}

export default CommunityReadRoute