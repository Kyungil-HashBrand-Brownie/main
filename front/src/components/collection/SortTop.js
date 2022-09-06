import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SortTopOuter, SortTopInner, SortTopHeader, SortTopText, SortOption } from './collectionModule'

const options = ['All(default)', 'Not Minted', 'Minted'];

const SortTop = () => {
    const dispatch = useDispatch()
    const { sortOption, mintCount } = useSelector(state => state.main)
    let count = [200, 200 - mintCount, mintCount]

    const changeOption = useCallback((idx) => {
        dispatch({'type': 'CHANGE_SORT_OPTION', payload: idx})
    },[dispatch]) 

    return (
        <SortTopOuter>
            <SortTopInner>
                <SortTopHeader>
                    <SortTopText>Filter By</SortTopText>
                </SortTopHeader>
                {options.map((option, index) => 
                            <SortOption 
                                key={index}
                                onClick={() => changeOption(index)}
                            >
                                <span className={sortOption == index ? 'toggle' : undefined}>
                                    {option}&nbsp;({count[index]})
                                </span>
                            </SortOption>
                )}
            </SortTopInner>
        </SortTopOuter>
  )
}

export default SortTop