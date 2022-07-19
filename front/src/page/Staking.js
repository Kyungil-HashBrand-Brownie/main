import React from 'react'
import NftCard from '../components/stake/NftCard'
import { Col } from 'react-bootstrap'
import Slider from 'components/Slider'
import ImgComponent from 'components/ImgComponent'

const Staking = () => {
  return (
    <>
    <ImgComponent />
    {/* // <Slider /> */}
    <div className='stake-outer-box'>
      <Col>
        <NftCard bool={true}/>
      </Col>
      <Col>
        <NftCard bool={false}/>
      </Col>
    </div>
    </>
  )
}

export default Staking