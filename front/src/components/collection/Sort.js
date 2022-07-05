import React from 'react'
import SortTop from './SortTop'
import Filter from './Filter'
import { SortOuter, SortHeader } from './collectionModule'

const Sort = () => {
    return (
        <SortOuter>
            <SortHeader>Sort</SortHeader>
            <SortTop/>
            <Filter/>
        </SortOuter>
    )
}

export default Sort