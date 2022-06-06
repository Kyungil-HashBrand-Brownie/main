import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import FreeSale from './SaleFree'
import WhiteSale from './SaleWhite'




const MintCard = () => {
  return (
    <div>
     {/* <Container className='MintCard'> */}
     <Container  className='MintCard'>
        <Row>
            <Col className='FreeSale'> <FreeSale /> </Col>
            <Col className='WhiteSale'> <WhiteSale/> </Col>
        </Row>
    </Container>
    </div>
  )
}

export default MintCard