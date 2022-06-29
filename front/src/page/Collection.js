import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sort from 'components/collection/Sort'
import CollectionMain from 'components/collection/CollectionMain'
import styled from 'styled-components'

const CollectionOuter = styled.div `
    display: flex;
    flex-direction: row;
    /* background-color: brown; */
`

const Collection = () => {
    const [data, setData] = useState(null)

    const getData = async () => {
        let result = await axios.get('/image/images')
        setData(result.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <CollectionOuter>
            <Sort />
            <CollectionMain data={data}/>
        </CollectionOuter>
    )
}

export default Collection