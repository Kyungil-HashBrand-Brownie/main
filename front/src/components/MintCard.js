import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PreSale from './PreSale'
import WhiteSale from './WhiteSale'


const MintCard = () => {
  return (
      <Container className='MintCard'>
        <Row>
          <Col className='FreeSale'> <PreSale /> </Col>
          <Col className='WhiteSale'> <WhiteSale /> </Col>
        </Row>
      </Container>
  )
}

export default MintCard