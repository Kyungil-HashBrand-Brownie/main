import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PreSale from './PreSale'
import mintBackground from "../../img/mint/background7.jpg"
import { Main1, Main2, Main3 } from '../../img';
import { PreBrowny, WhiteBrowny } from '../../img/browny';
import styled from 'styled-components';

let preSaleProps = {
  title: 'PreSale',
  img: PreBrowny,
  price: 50,
  amount: '/175',
}

let whiteSaleProps = {
  title: 'WhiteSale',
  img: WhiteBrowny,
  price: 25,
  amount: '/25',
}

const Style_Mint_div = styled.div`
  width: 100%;
  height: 100%;
  /* position: "absolute"; */
  /* background-color: black; */
  /* bottom: -00px; */
  position: "absolute";
`



const MintCard = () => {  
    return (
      <>
        {/* <img src={mintBackground} className="styled_mint_card"/> */}
        <div className='MintCard'>
        <Container className="mint-container">
              <Col className='PreSale' xs={{span:4, offset:2 }}> 
                <PreSale 
                  {...preSaleProps}/> 
              {/* </div> */}
              </Col>
              <Col className='WhiteSale' xs={{span:4 }}> 
                <PreSale 
                {...whiteSaleProps}/> 
              {/* </div> */}
              </Col>
        </Container>
        </div>
      </>
    )
}

export default MintCard