import React from 'react'
import styled from 'styled-components'

const CollectionMainOuter = styled.div`
    margin-left: 100px;
    width: 1300px;
    min-height: 780px;
    background: red;
    border: 3px solid white;
    border-radius: 20px;
`
const CollectionHeader = styled.div`
    background: blue;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
`
const CollectionBody = styled.div`
    width: 100%;
    background: green;
    min-height: 650px;
    margin-top: 30px;
`

const CollectionMain = () => {
    return (
        <CollectionMainOuter>
            <CollectionHeader>Collection Items</CollectionHeader>
            <CollectionBody></CollectionBody>
        </CollectionMainOuter>
    )
}

export default CollectionMain