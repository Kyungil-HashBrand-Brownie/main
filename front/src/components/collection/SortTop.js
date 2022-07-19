import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SortTopOuter, SortTopInner, SortTopHeader, SortTopText, SortOption } from './collectionModule'

const options = ['All(default)', 'Not Minted', 'Minted'];

const SortTop = () => {
    const dispatch = useDispatch()
    const { sortOption } = useSelector(state => state.main)


    const changeOption = (idx) => {
        dispatch({'type': 'CHANGE_SORT_OPTION', payload: idx})
    } 

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