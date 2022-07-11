import React from 'react'
import Community from 'page/Community'
import NoPage from 'page/NoPage'
import { useParams } from 'react-router-dom'

const PrivateRoute = () => {
    let { id } = useParams();
    return ( ['vote', 'default'].includes(id)
    ? 
    <Community id={id} />
    : <NoPage />
    )
}

export default PrivateRoute