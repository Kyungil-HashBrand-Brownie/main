import React from 'react'
import styled from 'styled-components';
import Browny1 from '../img/browny1.png';
import Browny2 from '../img/browny2.png';
import Browny3 from '../img/browny3.jpg';
import Browny4 from '../img/browny4.jpg';
import Browny5 from '../img/browny5.jpg';
import Browny6 from '../img/browny6.jpg';
import Browny7 from '../img/browny7.png';
import Arrow from '../img/arrow.png';
import Ellipse from '../img/Ellipse1.png';
import { Container, Row, Col } from 'react-bootstrap';

const StyledMainText = styled.div`
  /* background: red; */
  position: relative;
  top: 10%;
  width: 360px;
  height: 120px;
  font-weight: bold;
  font-size: 84px;
  color: white;
  /* font-family: 'Poppins'; */
  /* font-style: normal; */
`

const StyledSubText = styled.div`
  position: relative;
  top: 20%;
  width: 540px;
  height: 105px;
  color: white;
  font-size: 43px;
`
const StyledBrownyAbove = styled.img`
  /* position: relative; */
  top: 5%;
  width: 400px;
  z-index: -1;
`

const StyledBrownyDown = styled.img`
  /* position: relative; */
  margin-top: 20px;
  width: 400px;
  /* border: 1px solid black; */
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
  width: 70%;
  height: 100px;
  background: white;
  border-radius: 30px;
  font-size:30px;
  top: 50%;
  /* left: 240px; */
  cursor: pointer;
  &:hover{  
    transform: scale(1.1);
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
  return (
    <Container className='main-container'>
        <Col className="main-col">
            <StyledMainText>Brownie</StyledMainText>
            <StyledSubText>The Best nft Collections You Can Get</StyledSubText>
            <StyledButton>
              <div>
                <StyledArrow src={Arrow} alt="nft-arrows"/>
                <span>Explore our nfts</span>
              </div>
            </StyledButton>
        </Col>
        <Col className="main-col">
          <StyledBrownyAbove src={Browny6} alt="browny-above" />
          <StyledBrownyDown src={Browny7} alt="browny-down" />
        </Col>
        
        <StyledEllipse src={Ellipse} alt="ellipse"/>
    </Container>
  )
}

export default HomePage