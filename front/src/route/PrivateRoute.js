import React from 'react'
import Community from 'page/Community'
import NoPage from 'page/NoPage'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    let { id } = useParams();
    // console.log('id: ', id);
    return ( ['vote', 'default'].includes(id)
    ? 
    <Community id={id} />
    // <Navigate to='/community' />
    : <NoPage />
    )
}

export default PrivateRoute