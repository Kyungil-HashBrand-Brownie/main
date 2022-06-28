import React from 'react'
import styled from 'styled-components'

const CollectionMainOuter = styled.div`
    margin-left: 100px;
    width: 1300px;
    min-height: 760px;
    background: white;
    /* opacity: 0.9; */
    border: 3px solid white;
    border-radius: 20px;
`
const CollectionHeader = styled.div`
    /* background: blue; */
    text-align: center;
    font-size: 45px;
    font-weight: bold;
`
const CollectionBody = styled.div`
    /* width: 100%; */
    /* background: green; */
    display: flex;
    justify-content: center;
    /* border: 3px solid black; */
    /* padding:  */
    min-height: 650px;
    margin-top: 30px;
    border-radius: 15px;
`
const CollectionRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 94%;
    margin-top: 20px;
    /* padding: 20px 0; */
    background: lightgray;
    height: 300px;
`

const CollectionCard = styled.div`
    background: red;
    width: 200px;
    height: 200px;
    margin: auto;
`

const CollectionMain = () => {
    return (
        <CollectionMainOuter>
            <CollectionHeader>Collection Items</CollectionHeader>
            <CollectionBody>
                <CollectionRow>
                    <CollectionCard/>
                    <CollectionCard/>
                    <CollectionCard/>
                    <CollectionCard/>
                    <CollectionCard/>
                </CollectionRow>
            </CollectionBody>
        </CollectionMainOuter>
    )
}

export default CollectionMain