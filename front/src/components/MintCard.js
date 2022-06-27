import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PreSale from './PreSale'
import WhiteSale from './WhiteSale'
import mintBackground from "img/mint/fireplace.png"
import PreBrowny from '../img/browny8.png';
import WhiteBrowny from '../img/browny9.png';
import { brownyContract, contractAddr } from "configs";

let preSaleProps = {
  title: 'Pre-Sale',
  img: PreBrowny,
  price: 2,
  amount: '/150',
}

let whiteSaleProps = {
  title: 'White-Sale',
  img: WhiteBrowny,
  price: 1,
  amount: 'limited',
}


const MintCard = () => {
  // const [totalCnt, setTotalCnt] = useState(0);
  // const [isWhite, setIsWhite] = useState(false)

  // const preMint = async () => {
  //   if(!myAddress){
  //       return alert("지갑을 먼저 연결해주세요")
  //   }
  //   const result = await batchMint(myAddress,count)
  //   console.log(result)
  //   if(result.status){
  //       dispatch({type: "WALLET_REFRESH"})
  //       alert("해당 지갑 주소로 민팅되었습니다!");
  //   }
  //   else alert("transaction fail")
  // }
  
  // const whiteMint = async () => {
  //   const result = await whitelistMint(myAddress,count)
  //   if (result.status) {
  //       dispatch({ type: "WALLET_REFRESH" })
  //       alert("해당 지갑 주소로 민팅되었습니다!");
  //   }
  //   else alert("transaction fail")
  // }

  // // 전체 민팅 갯수
  // const getMintCnt = async ()=> {
  //   const totalCnt = await brownyContract.methods.nftNum().call()
  //   setTotalCnt(totalCnt)
  // }

  // const checkWhitelist = async () => {
  //   if (myAddress) {
  //       try {
  //           const isWhite = await brownyContract.methods.isWhitelisted(myAddress).call()
  //           console.log(isWhite);
  //           setIsWhite(isWhite)
  //       }
  //       catch (e) {
  //           throw e
  //       }
  //   }
  // }

  return (
    <>
    <img style={{position:"absolute",width:"100%", height:"93%",top:"5%", left: "0%", zIndex:"-2"}} src={mintBackground} />
    <Container className='MintCard'>
        <Row>
          <Col className='FreeSale' xs={{span:4, offset:2 }}> 
            <PreSale 
              data={preSaleProps}/> 
          </Col>
          <Col className='WhiteSale' xs={{span:4 }}> 
            <PreSale 
              data={whiteSaleProps}/> 
            </Col>
          {/* <Col className='WhiteSale'xs={{span:4, }}> <WhiteSale /> </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default MintCard