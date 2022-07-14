import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import VoteWrite from 'page/VoteWrite'

const CommunityWriteRoute = () => {
    let { id } = useParams();
    
    return ( ['0', '1'].includes(id)
    ? <VoteWrite id={id} />
    : <Navigate to='/nopage' />
    )
}

export default CommunityWriteRoute