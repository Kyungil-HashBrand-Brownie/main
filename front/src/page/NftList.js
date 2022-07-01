import React from 'react'
import NftCard from '../components/stake/NftCard'
import StakingList from '../components/stake/StakingList'
import { Container, Col } from 'react-bootstrap'

const NftList = () => {
  return (
    <div className='stake-outer-box'>
      {/* <Container className='stake-outer-box'> */}
      <Col>
        <StakingList />
      </Col>
      <Col>
        <NftCard />
      </Col>
      <Col>
        <StakingList />
      </Col>
      {/* </Container> */}
    </div>
  )
}

export default NftList