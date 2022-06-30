import React, { useState, useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import Arrow from '../../img/arrow.png';
import { Container, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Group2 } from '../../img';
import D3 from './D3';

const StyledMainText = styled.div`
  position: relative;
  top: 0%;
  width: 360px;
  height: 120px;
  font-weight: bold;
  font-size: 84px;
  color: black;
  left: 5%;

  @media (max-width: 970px) {
    margin-top: 50px;
  }
`
const StyledSubText = styled.div`
  position: relative;
  top: 20%;
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
  top: 40px;
  border: 5px solid rgb(31, 162, 31);
  border-radius: 10px;
  padding: 10px 0px;
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  width: 300px;
  background: white;
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
  top: 8%;
  left: 10%;
  width: 500px;
  margin: 0px 50px;
  z-index: -1;
  animation-name: ${displayAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  background-color: lightcyan;
  border-radius: 20px;
`

const StyledButton = styled.div`
  position: relative;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 400px;
  height: 100px;
  background: white;
  border-radius: 30px;
  font-size:30px;
  border: 3px solid black;
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

const Home = () => {
    const navigate = useNavigate();
    
    let deadline = useRef(); 
    let timer = useRef(null); 
    
    let deadlineDate = new Date('July 22, 2022 00:00:00').getTime();
    let now = new Date().getTime();
    let t = deadlineDate - now;
    let day = Math.floor((t % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 7));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    
    const [state, setState] = useState({ day: day, hours: hours, minutes: minutes, seconds: seconds});

    const count = () => {
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
    }

    useEffect(() => { 
      deadline = new Date('July 22, 2022 00:00:00').getTime();
      timer.current = setInterval(count, 1000);  
    }, [])
    
    return (
      <>
      <div className='mintdate-container'>
        <StyledMintDate>
          <span>민팅 까지 남은 시간</span><br />
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
            <StyledMainText><D3/></StyledMainText>
            <StyledSubText>The Best nft Collections <br/>You Can Get</StyledSubText>
              <StyledButton onClick={moveToMint}>
                <div>
                  <StyledArrow src={Arrow} alt="nft-arrows"/>
                  <span>Explore our nfts</span>
                </div>
              </StyledButton>
        </Col>
        <Col className="main-img-col">
          <StyledBrownyAbove src={Group2} alt="browny-above" />
        </Col>
      </Container>
      </>
  )
}

export default Home