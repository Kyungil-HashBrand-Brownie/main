import React from 'react'
import SortTop from './SortTop'
import Filter from './Filter'
import { SortOuter, SortHeader } from './collectionModule'

const Sort = () => {
    return (
        <SortOuter>
            <SortHeader>Minted</SortHeader>
            <SortTop/>
            <Filter/>
        </SortOuter>
    )
}

export default Sort