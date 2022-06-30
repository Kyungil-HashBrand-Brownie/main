import React from 'react'
// import D3 from '../components/home/D3'
import EarthVote from '../components/EarthVote'
import QuitVote from '../components/QuitVote'
// import SlideShow from '../components/home/SlideShow'
import styled from 'styled-components'
// import Viliage from 'components/Viliage'
// import Team from 'components/Team'
import { viliage2 } from '../img'
import WhiteListMember from 'components/WhiteListMember'
import { Animation } from 'components/Animation'



const HomeBackImgPosition = styled.div`
    /* width: 100%;
    height: 500px;
    background-image: url(${viliage2});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    z-index: -2; */
`
const TestMain = styled.div`
  z-index:4;

  .test-aa {
  }
`

const DDiv = styled.div`
  width: 100%;
  height: 400px;
  background-color: black;
  /* z-index: 4px; */
  opacity: 0.5;
`
const Testpage = () => {

  return (
    <div>
        {/* <EarthVote /> */}
        {/* <QuitVote /> */}
        {/* <SlideShow /> */}
        {/* <Viliage /> */}
        {/* <Team /> */}
        <WhiteListMember />
        {/* <Animation /> */}
    </div>
  )
}

export default Testpage