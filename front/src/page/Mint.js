import React from 'react'
import Header from '../components/Header';
import MintCard from '../components/MintCard';
import Profile from '../components/Profile';
import volc from "img/mint/volcano.png"

const Mint = () => {

  return (
    <>
        <img style={{position:"absolute",width:"100%", height:"90%",bottom:"5%", zIndex:"-3"}} src={volc} />
      <MintCard />
      <Profile />
    </>
  )
}

export default Mint