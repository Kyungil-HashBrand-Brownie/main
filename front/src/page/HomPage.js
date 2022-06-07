import React from 'react'
import styled from 'styled-components';
import Browny1 from '../img/browny1.png';
import Browny2 from '../img/browny2.png';
import Arrow from '../img/arrow.png';
import Ellipse from '../img/Ellipse1.png';
import { Container } from 'react-bootstrap';

const StyledMainText = styled.div`
  position: absolute;
  left: 240px;
  top: 290px;
  width: 360px;
  height: 120px;
  font-weight: bold;
  font-size: 84px;
  color: white;
  /* font-family: 'Poppins'; */
  /* font-style: normal; */
`

const StyledSubText = styled.div`
  position: absolute;
  left: 240px;
  top: 430px;
  width: 540px;
  height: 105px;
  color: white;
  font-size: 43px;
`
const StyledBrownyAbove = styled.img`
  position: absolute;
  top: 70px;
  right: 150px;
  z-index: -1;
`

const StyledBrownyDown = styled.img`
  position: absolute;
  bottom: 50px;
  right: 150px;
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  position: absolute;
  width: 380px;
  height: 100px;
  background: white;
  border-radius: 30px;
  font-size:30px;
  bottom: 200px;
  left: 240px;
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
  bottom: 0px;
  z-index: -1;
`

const HomePage = () => {
  return (
    <Container>
      <StyledMainText>Brownie</StyledMainText>
      <StyledSubText>The Best nft Collections You Can Get</StyledSubText>
      <StyledBrownyAbove src={Browny1} alt="browny-above" />
      <StyledBrownyDown src={Browny2} alt="browny-down" />
      <StyledButton>
        <div>
          <StyledArrow src={Arrow} alt="nft-arrows"/>
          <span>Explore our nfts</span>
        </div>
      </StyledButton>
      <StyledEllipse src={Ellipse} alt="ellipse"/>
    </Container>
  )
}

export default HomePage