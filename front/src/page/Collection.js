import React from 'react'
import Sort from 'components/collection/Sort'
import CollectionMain from 'components/collection/CollectionMain'
import { Container, Col } from 'react-bootstrap'
import styled from 'styled-components'

const CollectionOuter = styled.div `
    display: flex;
    flex-direction: row;
    /* background-color: brown; */
`

const Collection = () => {
    return (
        <CollectionOuter>
            {/* <Container className='collection-sort-container'>
                <Col> */}
                    <Sort />
                {/* </Col> */}
            {/* </Container> */}
            {/* <Container className='collection-main-container'> */}
                {/* <Col> */}
                    <CollectionMain />
                {/* </Col> */}
            {/* </Container> */}
        </CollectionOuter>
    )
}

export default Collection