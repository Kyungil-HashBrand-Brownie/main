import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Community from 'page/Community'

const PrivateRoute = () => {
    let { id } = useParams();
    
    return ( ['vote', 'default'].includes(id)
    ? <Community id={id} />
    : <Navigate to='/nopage'/>
    )
}

export default PrivateRoute