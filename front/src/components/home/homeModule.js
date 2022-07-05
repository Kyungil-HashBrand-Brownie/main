import styled, { keyframes, css } from 'styled-components'
import { viliage2 } from '../../img'
import { Main1, Main2, Main3 } from '../../img'

/* Home */

export const StyledMainText = styled.div`
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
export const StyledSubText = styled.div`
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
export const StyledMintDate = styled.div`
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
export const DisplayAnimation = keyframes`
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
export const StyledBrownyAbove = styled.img`
  position: relative;
  top: 8%;
  left: 10%;
  width: 500px;
  margin: 0px 50px;
  z-index: -1;
  animation-name: ${DisplayAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  // background-color: lightcyan;
  border-radius: 20px;
`
export const StyledButton = styled.div`
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
export const StyledArrow = styled.img`
  width: 60px;
  margin-right: 10px;
`

/* HomeImgCard */

export const StyleHomeImgCard = styled.div`
    width:100% ;
    background-color: #CDF0EA;
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top:50px;
    .backColor{
      background-color: #F6C6EA;
      width:70% ;
      height: 340px;
      display: flex;
      margin-top: 150px;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    .back{
      background-color: #F6C6EA;
      width:70% ;
      height: 340px;
      display: flex;
      margin-top: 150px;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    .backColor{
      background-color: #F6C6EA;
      width:70% ;
      height: 340px;
      display: flex;
      margin-top: 150px;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    .box_vertical {
      writing-mode: vertical-lr;
      cursor: alias;
    }
    .box_vertical2 {
      background-color: #FAF4B7;
      height:400px ;
      color: black;
      margin-top: -60px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }
    .box_vertical2 h2{
        writing-mode: vertical-lr;
    }
    .box_vertical2:hover {
      height: 410px;
      margin-top: -70px;
      transform: scale(1.0);
      cursor: alias;
    }
    .box_vertical3 {
      height:450px ;
      background-color: #F9F9F9;
      margin-top: -110px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }

    .box_vertical3:hover {
      height: 460px;
      margin-top: -120px;
      transform: scale(1.0);
      cursor: alias;
    }
    
    .box_vertical3 h2{
        writing-mode: vertical-lr;
    }

    .home_img {
      width: 600px;
      height: 350px;
      position: relative;
      margin-top: -50px;
    };

    /* .grid-template{
      grid-template-rows: repeat(3, minmax(100px, auto));
    } */
`

/* SlideShow */

export const ImageContainer = styled.div`
    position: relative;
    color: white;
    margin: 10px;
    margin-top: 10px;
    margin-bottom:10px;
  `
export const Image = styled.img`
    width:100%;
    border-radius: 20px ;
    border: 5px solid white;
    cursor: pointer;
  `
export const BottomLeft = styled.div`
    position: absolute;
    font-size: 5px;
    bottom: 8px;
    left: 16px;
  `
export const SliderPosition = styled.div`
    display:flex ;
    text-align: center;
    width: 700px;
    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 70px 04px */
                  /* inset rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
    box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.45),
                0px -15px 15px -10px rgba(0, 0, 0, 0.45);
    
    .slider_padding_containner{
      width: 100px;
    }
    button {
      display: none;
    }
    .slick-prev{
      display: none;
    }
  `

/* Team */

export const TeamOuter = styled.div `
    margin: 100px 0;
`
export const TeamBrowny = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const TeamText = styled.div `
    text-align: center;
    font-size: 40px;
    margin: 40px 0;
`

/* TeamCard */

export const Img = styled.img `
    width: 300px;
    border-top-left-radius: 300px;
    border-top-right-radius: 300px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`
export const TeamImgOuter = styled.div`
    margin: auto;
    border: 4px solid white;
    background: white;
    border-radius: 300px;
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`
export const TeamInfoName = styled.div`
    font-size: 24px;
    text-align: center;
`
export const TeamInfoPos = styled.div`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`

/* Village */

export const StyledViliage = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 200px;
    margin-bottom: 100px;

    .village {
        background-color: pink ;
        position: absolute;
        width: 100%;
        height: 400px;
        opacity: 0.3;
        z-index:-1;
    }
`
export const HomeBackImgPosition = styled.div`
    width: 100%;
    height: 400px;
    /* background-image: url(/${viliage2}); */
    background-image: url(${Main2});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    z-index: -2;
`