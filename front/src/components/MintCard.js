import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SaleFree from './SaleFree'
import SaleWhite from './SaleWhite'


const MintCard = () => {
  return (
      <Container className='MintCard'>
        <Row>
          <Col className='FreeSale'> <SaleFree /> </Col>
          <Col className='WhiteSale'> <SaleWhite /> </Col>
        </Row>
      </Container>
  )
}

export default MintCard