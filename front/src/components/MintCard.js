import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import SaleFree from './SaleFree'
import SaleWhite from './SaleWhite'


const MintCard = () => {
  return (
    <div>
      <Container className='MintCard'>
        <Row>
          <Col className='FreeSale'> <SaleFree /> </Col>
          <Col className='WhiteSale'> <SaleWhite /> </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MintCard