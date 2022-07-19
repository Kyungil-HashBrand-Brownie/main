import React from 'react'
import NftCard from '../components/stake/NftCard'
import { Col } from 'react-bootstrap'
import Slider from 'components/Slider'

const Staking = () => {
  return (
    // <Slider />
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

export default Staking