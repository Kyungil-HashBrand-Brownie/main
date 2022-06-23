import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PreSale from './PreSale'
import WhiteSale from './WhiteSale'
import mintBackground from "img/mint/fireplace.png"

const MintCard = () => {
  return (
    <>
    <img style={{position:"absolute",width:"100%", height:"100%",top:"15%", zIndex:"-2"}} src={mintBackground} />
    <Container className='MintCard'>
        <Row>
          <Col className='FreeSale' xs={{span:4, offset:2 }}> <PreSale /> </Col>
          <Col className='WhiteSale'xs={{span:4, }}> <WhiteSale /> </Col>
        </Row>
      </Container>
    </>
  )
}

export default MintCard