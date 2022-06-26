import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PreSale from './PreSale'
import WhiteSale from './WhiteSale'
import mintBackground from "img/mint/fireplace.png"
import PreBrowny from '../img/browny8.png';
import WhiteBrowny from '../img/browny9.png';

const preSaleProps = {
  title: 'Pre-Sale',
  img: PreBrowny,
  price: 2,
  amount: '/150',
}

const whiteSaleProps = {
  title: 'White-Sale',
  img: WhiteBrowny,
  price: 1,
  amount: 'limited',
}


const MintCard = () => {
  return (
    <>
    <img style={{position:"absolute",width:"100%", height:"93%",top:"5%", left: "0%", zIndex:"-2"}} src={mintBackground} />
    <Container className='MintCard'>
        <Row>
          <Col className='FreeSale' xs={{span:4, offset:2 }}> <PreSale data={preSaleProps}/> </Col>
          <Col className='WhiteSale' xs={{span:4 }}> <PreSale data={whiteSaleProps}/> </Col>
          <Col className='WhiteSale'xs={{span:4, }}> <WhiteSale /> </Col>
        </Row>
      </Container>
    </>
  )
}

export default MintCard