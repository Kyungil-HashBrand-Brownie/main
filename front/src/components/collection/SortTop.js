import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

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
    /* width: 90%; */
    height: 40px;
    /* background: purple; */
    font-size: 18px;
    margin: 0 15px 1px;
    cursor: pointer;

    &:hover {
        font-size: 20px;
    }
`

const options = ['All(default)', 'Not Minted', 'Minted'];

const SortTop = () => {
    const dispatch = useDispatch()
    const { sortOption } = useSelector(state => state.nft)

    const changeOption = (idx) => {
        dispatch({'type': 'CHANGE_SORT_OPTION', payload: idx})
    } 

    // const [state, setState] = useState(0)
    return (
        <SortTopOuter>
            <SortTopInner>
                <SortTopHeader>
                    <SortTopText>Sort By</SortTopText>
                </SortTopHeader>
                {options.map((option, index) => 
                            <SortOption 
                                key={index}
                                onClick={() => changeOption(index)}
                            >
                                <span className={sortOption == index ? 'toggle' : undefined}>
                                    {option}
                                </span>
                            </SortOption>
                )}
            </SortTopInner>
        </SortTopOuter>
  )
}

export default SortTop