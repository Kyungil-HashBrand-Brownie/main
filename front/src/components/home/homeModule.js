import styled, { keyframes } from 'styled-components'
import { viliage2 } from '../../img'
import { Main2} from '../../img'

/* Home */

export const StyledMainText = styled.div`
  position: relative;
  top: 0%;
  height: 120px;
  font-weight: bold;
  font-size: 84px;
  color: black;
  left: 7%;

  @media (max-width: 992px) {
    margin-top: 10px;
    margin-left: 12%;
  }

  @media (max-width: 776px) {
    margin-left: 5%;
  }

  @media (max-width: 540px) {
    .layer:after {
      font-size: 120px;
      margin: auto;
    }
    margin: auto;
  }

`
export const StyledSubText = styled.div`
  position: relative;
  top: 20%;
  width: 540px;
  /* height: 105px; */
  color: black;
  font-size: 36px;
  padding-left: 5%;
  padding-top: 5px;
  padding-bottom: 5px;
  /* left: 5%; */
  /* background: pink; */

  @media (max-width: 992px) {
    margin-top: 120px;
    margin-left: 12%;
    /* position: static; */
  }

  @media (max-width: 776px) {
    margin-left: 5%;
  }

  @media (max-width: 540px) {
    width: 450px;
    margin: auto;
    margin-top: 120px;
    font-size: 30px;
  }
`
export const StyledMintDate = styled.div`
  /* position: relative; */
  /* top: 40px; */
  border: 8px solid rgb(26, 126, 213);
  border-radius: 10px;
  padding: 8px 0px;
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  width: 270px;
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

  @media (max-width: 540px) {
    text-align: center;
    width: 450px;
    left: -5%;
  }

  @media (max-width: 776px) {
    left: -8%;
    width: 480px;
  }

  @media (max-width: 992px) {
    left: -7%;
    margin-top: 80px;
  }
`
export const StyledButton = styled.div`
  position: relative;
  top: 45%;
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

  @media (max-width: 992px) {
    margin-top: 150px;
    margin-left: 20%;
  }

  @media (max-width: 776px) {
    margin-left: 13%;
  }

  @media (max-width: 540px) {
    margin: auto;
    margin-top: 150px;
  }
`
export const StyledArrow = styled.img`
  width: 60px;
  margin-right: 10px;
`

/* HomeImgCard */

export const StyleHomeImgCard = styled.div`
    width:100% ;
    background-color: rgb(249, 245, 240, 0.9);
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top:50px;
    opacity: 0.9;

    .blue-num {
      text-align: center;
      margin-top: 5px;
      font-size: 40px;
    }
    .backColor{
      background-color: #F6C6EA;
      width: 70% ;
      height: 380px;
      display: flex;
      border-radius: 30px;
      margin-top: 80px;
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

    .box_vertical {
      margin-top: 30px;
      writing-mode: vertical-lr;
      cursor: alias;
    }
    .box_vertical2 {
      background-color: #FAF4B7;
      height:440px ;
      color: black;
      margin-top: -35px;
      border-radius: 30px;
      /* border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px; */
    }
    .box_vertical2 h2{
        writing-mode: vertical-lr;
    }
    .tapestry-header0 {
      letter-spacing: 1px;
      /* background: white; */
      border-radius: 20px;
      padding: 10px 2px;
    }
    .tapestry-side-header1 {
      margin-top: 40px;
      letter-spacing: 1px;
    }
    .tapestry-side-header2 {
      margin-top: 60px;
      letter-spacing: 1px;
    }

    .box_vertical2:hover {
      /* height: 410px; */
      margin-top: -60px;
      /* transform: scale(1.0); */
      cursor: alias;
    }
    .box_vertical3 {
      height:470px ;
      background-color: #F9F9F9;
      margin-top: -65px;
      border-radius: 30px;
    }

    .box_vertical3:hover {
      /* height: 460px; */
      margin-top: -90px;
      /* transform: scale(1.0); */
      cursor: alias;
    }
    
    .box_vertical3 h2{
        writing-mode: vertical-lr;
    }

    .home_img {
      width: 600px;
      height: 350px;
      position: relative;
      margin-top: -30px;
    };

    .tapestry-header {
      margin-top: 9px;
      font-size: 35px;
    }
    .tapestry-subheader {
      padding-left: 5px;
      font-size: 20px;
    }
    .grid-template {
      padding-left: 5px;
      margin-top: 20px;
      font-size: 18px;
      background: white;
      border-radius: 20px;
      padding: 0 5px;
      height: 260px;
      display: table-cell;
      vertical-align: middle;
      /* align-items: center; */
    }
    .tapestry-span {
      color: rgb(2, 165, 2);
      font-weight: bold;
      font-size: 24px;
    }

    @media (max-width: 1715px) {
      .tapestry-header {
        font-size: 30px;
      }
      .tapestry-subheader {
        font-size: 18px;
      }
      .tapestry-span {
        font-size: 18px;
      }
      .grid-template {
        font-size: 16px;
      }
    }

    @media (max-width: 1560px) {
      .tapestry-header {
        font-size: 26px;
      }
      .tapestry-subheader {
        font-size: 17px;
      }
      .grid-template {
        font-size: 15px;
      }
      .tapestry-span {
        font-size: 17px;
      }
    }

    @media (max-width: 1497px) {
      .grid-template { 
        font-size: 14px;
      }
      .tapestry-span {
        font-size: 14px;
      }
    }

    @media (max-width: 1174px) {
      .grid-template {
        font-size: 13px;
      }
    }

    @media (max-width: 1090px) {
      .grid-template {
        font-size: 12px;
      }
    }

    @media (max-width: 1015px) {
      .backColor {
        width: 95%;
      }
      .grid-template {
        font-size: 15px;
      }
    }
    
    @media (max-width: 954px) {
      .grid-template {
        font-size: 14px;
      }
    }

    @media (max-width: 844px) {
      .grid-template {
        font-size: 13px;
      }
    }

    @media (max-width: 784px) {
      .tapestry-main {
        width: 400px;
      }
      .home_img {
        width: 150px;
        height: 200px;
        margin-top: 50px;
      }
      .box_vertical2 {
        width: 50px;
      }
      .box_vertical3 {
        width: 60px;
      }
      .blue {
        width: 80px;
      }
      .box_vertical {
        padding-top: 10px;
      }
      .grid-template {
        font-size: 15px;
      }
      .tapestry-span {
        font-size: 15px;
      }
    }

    @media (max-width: 695px) {
      .backColor {
        /* height: 400px; */
      }

      .home_img {
        display: none;
      }
      .grid-template {
        font-size: 14px;
      }
      .tapestry-span {
        font-size: 14px;
      }
    }
    
    @media (max-width: 536px) {
      .grid-template {
        font-size: 13px;
      }
    }
`

/* SlideShow */

export const ImageContainer = styled.div`
    position: relative;
    color: white;
    /* margin: 10px; */
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
    color: black;
    background: white;
    border-radius: 5px;
  `
export const SliderPosition = styled.div`
    display:flex ;
    text-align: center;
    /* margin: auto; */
    justify-content: center;
    /* width: 700px; */
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

    @media (max-width: 800px) {
      width: 600px;
    }

    @media (max-width: 768px) {
      width: 450px;
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
    font-size: 65px;
    font-weight: 10;
    margin: 40px 0;
    text-shadow: 2px 2px 2px white;
`

/* TeamCard */

export const Img = styled.img `
    width: 300px;
    border-top-left-radius: 300px;
    border-top-right-radius: 300px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    @media (max-width: 1540px) {
      width: 200px;
      border-top-left-radius: 200px;
      border-top-right-radius: 200px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
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
        transform: scale(1.03);
    }

    @media (max-width: 1540px) {
      margin-bottom: 10px;
    }
`
export const TeamInfoName = styled.div`
    font-size: 24px;
    text-align: center;

    @media (max-width: 1540px) {
      font-size: 12px;
    }
`
export const TeamInfoPos = styled.div`
    font-weight: bold;
    font-size: 30px;
    text-align: center;

    @media (max-width: 1540px) {
      font-size: 15px;
    }
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