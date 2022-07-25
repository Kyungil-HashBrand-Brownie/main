import React, { useState, useRef, useEffect } from 'react'
import Arrow from '../../img/arrow.png';
import { Container, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Group2 } from '../../img/browny';
import D3 from './D3';
import {
  StyledMainText, StyledSubText, StyledMintDate,
  StyledBrownyAbove, StyledButton, StyledArrow
} from './homeModule';

const Home = () => {
  const navigate = useNavigate();

  let deadline = useRef();
  let timer = useRef(null);

  let deadlineDate = new Date('July 29, 2022 10:00:00').getTime();
  let now = new Date().getTime();
  let t = deadlineDate - now;
  let day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  const [state, setState] = useState({ day, hours, minutes, seconds });

  const count = () => {
    now = new Date().getTime();
    t = deadline - now;
    day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((t % (1000 * 60)) / 1000);

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
    deadline = new Date('July 29, 2022 10:00:00').getTime();
    timer.current = setInterval(count, 1000);
  }, [])

  return (
    <>
      <div className='mintdate-container'>
        <StyledMintDate>
          <span>민팅 종료까지 시간</span><br />
          <span>
            {state.day < 10 ? `0${state.day}` : state.day}D
            &nbsp;{state.hours < 10 ? `0${state.hours}` : state.hours}h
            &nbsp;{state.minutes < 10 ? `0${state.minutes}` : state.minutes}m
            &nbsp;{state.seconds < 10 ? `0${state.seconds}` : state.seconds}s
          </span>
        </StyledMintDate>
      </div>
      <Container className='main-container'>
        <Col className="main-col1">
          <StyledMainText><D3 /></StyledMainText>
          <StyledSubText>The Best nft Collections <br />You Can Get</StyledSubText>
          <StyledButton onClick={moveToMint}>
            <div>
              <StyledArrow src={Arrow} alt="nft-arrows" />
              <span>Explore our nfts</span>
            </div>
          </StyledButton>
        </Col>
        <Col className="main-img-col1">
          <StyledBrownyAbove src={Group2} alt="browny-above" />
        </Col>
      </Container>
    </>
  )
}

export default Home