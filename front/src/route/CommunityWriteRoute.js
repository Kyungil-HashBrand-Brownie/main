import React from 'react'
import VoteWrite from 'page/VoteWrite'
import NoPage from 'page/NoPage'
import { useParams } from 'react-router-dom'

const CommunityWriteRoute = () => {
    let { id } = useParams();
    return ( ['0', '1'].includes(id)
    ? <VoteWrite id={id} />
    : <NoPage />
    )
}

export default CommunityWriteRoute