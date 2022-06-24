import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import Arrow from '../img/arrow.png';
import { Container, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomeImgCard from '../components/HomeImgCard';
import { group ,img1 , Group2 , baking, baking2, baking3 } from '../img';
import SlideShow from '../components/SlideShow';
import D3 from '../components/D3';

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
  top: 40px;
  border: 5px solid rgb(31, 162, 31);
  border-radius: 10px;
  padding: 10px 0px;
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  width: 300px;
  background: white;
  /* background: rgb(31, 162, 31); */
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
  top: -10%;
  width: 500px;
  margin: 0px 50px;
  z-index: 1;
  /* border: 5px solid black; */
  animation-name: ${displayAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  background-color: lightcyan;
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

const BakingImg = styled.div`


  .bakingImg1 img{
    width: 300px;
    height: 400px;
    right: 400px;
    /* margin-right: 100px; */
    /* position: right ; */
    /* object-position: 25% 75%; */
  }
`

const StyledEllipse = styled.img`
  position: absolute;
  left: 0;
  bottom: 0%;
  z-index: -1; 
`

const StyleDiv1 = styled.div`
    width:100% ;
    background-color: #6B828E;
    height: 50%;
    display: flex;
    position: relative;

    .backgray{
      background-color: gray;
      width:80% ;
      height: 300px;
      display: flex;
      position: relative;
    }
    

    .box_vertical {
      writing-mode: vertical-lr;
    }

    .box_vertical2 {
      writing-mode: vertical-lr;
      background-color: black;
      height:350px ;
      color: white;
      margin-bottom: 100px;
      margin-top: -50px;
    }

    .box_vertical3 {
      writing-mode: vertical-lr;
      height:400px ;
      background-color: pink;
      margin-top: -100px;
    }

    /* .home_img {
      width: 500px;
      height: 300px;
      margin-top: -10px;
    }

    .home_img img{
      width:100%;
      height: 100%;
    } */

    /* .blue {
      background-color: blue;
    } */
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

    let mainText = document.getElementsByClassName("slidediv")

    window.addEventListener('scroll', function() {
      let value = window.scrollY;
      let loc = window.location.href;
      if (loc == 'http://localhost:3000/') {
        if(value > 1500 || value < 850) {
          mainText[0].style.animation='disappear 1s ease-out forwards';
        }else  {
          mainText[0].style.animation='slide 1s ease-out'
        }
      }
    })

    useEffect(() => { 
      deadline = new Date('July 22, 2022 00:00:00').getTime();
      timer.current = setInterval(count, 1000);  
      // scroll() 
      // timer();   
    }, [])
    
    return (
      <>
      {/* <img 
        className='backG-img'
        src={Img}
      /> */}
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
      {/* <div className='brownyLogo'> */}
        {/* <D3/> */}
      {/* </div> */}
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
            <StyledBrownyAbove src={Group2} alt="browny-above" />
            {/* <StyledBrownyDown src={Browny10} alt="browny-down" /> */}
          </Col>
          
      </Container>
      <HomeImgCard />

      <Container className='main-container'>
          <Col className="main-col">
          <div className="slidediv">
            browny로 <br />사랑을 <br />전달  <br/>하세요
          </div>
          </Col>
          <Col className="main-img-col">
          <div className="bakingImg1">
              <img src={baking2} /> 
            </div>
          </Col>
      </Container>
        <SlideShow />
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