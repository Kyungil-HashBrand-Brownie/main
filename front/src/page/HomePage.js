import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import Browny1 from '../img/browny1.png';
import Browny2 from '../img/browny2.png';
import Browny3 from '../img/browny3.jpg';
import Browny4 from '../img/browny4.jpg';
import Browny5 from '../img/browny5.jpg';
import Browny6 from '../img/browny6.jpg';
import Browny7 from '../img/browny7.png';
import Browny8 from '../img/browny8.png';
import Browny9 from '../img/browny9.png';
import Browny10 from '../img/browny10.png';
import Eye from '../img/eye/Eye1.png'
import Img from '../img/background/background11.png';
import LeftImg from '../img/chocolate/choco1.png';
import LeftImg2 from '../img/chocolate/choco2.png';
import LeftImg3 from '../img/chocolate/choco3.png';
import RightImg from '../img/chocolate/choco4.png';
import Arrow from '../img/arrow.png';
import Ellipse from '../img/Ellipse1.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import contractAbi from "../abi.json";
import { useNavigate } from 'react-router-dom';

const StyledMainText = styled.div`
  /* background: red; */
  position: relative;
  top: 0%;
  width: 360px;
  height: 120px;
  font-weight: bold;
  font-size: 84px;
  color: black;
  left: 5%;
  /* font-family: 'Poppins'; */
  /* font-style: normal; */

  @media (max-width: 970px) {
    margin-top: 50px;
  }
`
const StyledSubText = styled.div`
  position: relative;
  top: 12%;
  width: 540px;
  height: 105px;
  color: black;
  font-size: 43px;
  left: 5%;

  @media (max-width: 970px) {
    margin-top: 60px;
  }
`
const StyledMintDate = styled.div`
  position: relative;
  top: 60px;
  border: 15px solid white;
  border-radius: 10px;
  padding: 10px 0px;
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  width: 300px;
  /* display: flex; */
  /* justify-content: center; */
`

const displayAnimation = keyframes`
 0% { opacity: 0}
 10% { opacity: 0.1; }
 15% { opacity: 0.15; }
 30% { opacity: 0.3 }
 40% { opacity: 0.4; }
 65% { opacity: 0.55; }
 75% { opacity: 0.7; }
 85% { opacity: 0.85; }
 90% { opacity: 0.93; }
 100% { opacity: 1; }
`


const StyledBrownyAbove = styled.img`
  position: relative;
  top: 6%;
  width: 350px;
  margin: 0px 50px;
  z-index: 1;
  animation-name: ${displayAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`

const StyledBrownyDown = styled.img`
  /* position: relative; */
  margin-top: 40px;
  width: 350px;
  z-index: 1;
  animation-name: ${displayAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;`

const StyledButton = styled.div`
  position: relative;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 400px;
  height: 100px;
  background: white;
  border-radius: 30px;
  font-size:30px;
  /* top: 50%; */
  border: 3px solid black;
  /* left: 240px; */
  cursor: pointer;
  &:hover{  
    transform: scale(1.05);
  }

  @media (max-width: 970px) {
    margin-top: 150px;
    margin-left: 30px;
  }
`

const StyledArrow = styled.img`
  width: 60px;
  margin-right: 10px;
`

const StyledEllipse = styled.img`
  position: absolute;
  left: 0;
  bottom: 0%;
  z-index: -1; 
`
const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let deadline = useRef(); 
    let deadlineDate = new Date('July 22, 2022 00:00:00').getTime();
    let now = new Date().getTime();
    let t = deadlineDate - now;
    let day = Math.floor((t % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 7));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    const [state, setState] = useState({ day: day, hours: hours, minutes: minutes, seconds: seconds});
    let timer = useRef(null); 

    const count = () => {
      // console.log('test');
      let now = new Date().getTime();
      let t = deadline - now;
      let day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((t % (1000 * 60)) / 1000);

      setState({ day, hours, minutes, seconds });

      if (t < 0) {
        clearInterval(timer);
        setState({ day: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }

    const moveToMint = () => {
      navigate('/mint');
      dispatch({type: 'MODAL_CLOSE'});
    }

    useEffect(() => { 
      deadline = new Date('July 22, 2022 00:00:00').getTime();
      timer.current = setInterval(count, 1000);   
      // timer();   
    }, [])
    
    return (
      <>
      <img 
        className='backG-img'
        src={Img}
      />
      {/* <img 
        className='backG-left-img'
        src={LeftImg3}
      /> */}
      {/* <img 
        className='backG-right-img'
        src={RightImg}
      /> */}
      {/* <img 
        className='backG-right-img2'
        src={RightImg}
      /> */}
      <div className='mintdate-container'>
        <StyledMintDate>
          <span>민팅 시작까지 남은 시간</span><br />
          <span>
            {state.day < 10 ? `0${state.day}` : state.day}D 
            &nbsp;{state.hours < 10 ? `0${state.hours}` : state.hours}h 
            &nbsp;{state.minutes < 10 ? `0${state.minutes}` : state.minutes}m
            &nbsp;{state.seconds < 10 ? `0${state.seconds}` : state.seconds}s
          </span>
        </StyledMintDate>
      </div>
      <Container className='main-container'>
          <Col className="main-col">
              <StyledMainText>Browny</StyledMainText>
              <StyledSubText>The Best nft Collections You Can Get</StyledSubText>
              {/* <div className='main-button-container'> */}
                <StyledButton
                  onClick={moveToMint}
                >
                  <div>
                    <StyledArrow src={Arrow} alt="nft-arrows"/>
                    <span>Explore our nfts</span>
                  </div>
                </StyledButton>
              {/* </div> */}
          </Col>
          <Col className="main-img-col">
            <StyledBrownyAbove src={Browny8} alt="browny-above" />
            <StyledBrownyDown src={Browny10} alt="browny-down" />
          </Col>
          
          {/* <StyledEllipse src={Ellipse} alt="ellipse"/> */}
      </Container>
      {/* <div className='main-team-container'> */}
        {/* <Container className='main-team-container'>
          <StyledMainText>Team</StyledMainText>
          <Container className='main-team-img-box'>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Container>
        </Container> */}
      {/* </div> */}
      </>
  )
}

export default HomePage