import React from 'react'
import NftCard from '../components/stake/NftCard'
import StakingList from '../components/stake/StakingList'
import { Container, Col } from 'react-bootstrap'

const NftList = () => {
  return (
    <div className='stake-outer-box'>
      <Col>
        <NftCard bool={true}/>
      </Col>
      <Col>
        <NftCard bool={false}/>
      </Col>
    </div>
  )
}

export default NftList