import React from 'react'
import styled from 'styled-components'

const SortTopHeader = styled.div`
    /* background: blue; */
    margin-bottom: 15px;
`
const SortTopText = styled.div`
    background: pink;
    border-radius: 10px;
    width: 80px;
    padding: 0 10px;
`

const SortTopOuter = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    height: 190px;
    background: white;
    /* background: red; */
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`
const SortTopInner = styled.div`
    width: 300px;
    height: 170px;
    /* border:  */
    /* background: green; */
`
const SortOption = styled.div`
    width: 90%;
    height: 40px;
    /* background: purple; */
    font-size: 18px;
    margin: 0 15px 1px;
    cursor: pointer;

    &:hover {
        font-size: 20px;
    }
`

const SortTop = () => {
    return (
        <SortTopOuter>
            <SortTopInner>
                <SortTopHeader>
                    <SortTopText>Sort By</SortTopText>
                </SortTopHeader>
                <SortOption>
                    All(default)
                </SortOption>
                <SortOption>
                    Not Minted
                </SortOption>
                <SortOption>
                    Minted
                </SortOption>
            </SortTopInner>
        </SortTopOuter>
  )
}

export default SortTop