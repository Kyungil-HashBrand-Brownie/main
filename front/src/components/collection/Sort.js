import React from 'react'
import styled from 'styled-components'
import SortTop from './SortTop'
import Filter from './Filter'

const SortOuter = styled.div `
    position: absolute;
    left: 2%;
    top: 13%;
    margin-left: 30px;
    margin-top: 50px;
    width: 350px;
    height: auto;
    min-height: 700px;
    /* max-height: 1200px; */
    /* height: 700px; */
    border: 3px solid white;
    border-radius: 10px;
    background: rgb(241, 149, 165);
    /* background: rgb(214, 107, 107); */
`
const SortTopHeader = styled.div`
    margin-left: 10px;
    margin-top: 3px;
    font-size: 30px;
    font-weight: bold;
`

const Sort = () => {
    return (
        <SortOuter>
            <SortTopHeader>Sort</SortTopHeader>
            <SortTop/>
            <Filter/>
        </SortOuter>
    )
}

export default Sort