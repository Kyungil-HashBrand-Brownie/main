import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { img1 } from '../img';
import styled, { keyframes } from 'styled-components';




const StyleDiv1 = styled.div`
    width:100% ;
    background-color: #E5E3D7;
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;

    .backgray{
      background-color: #9EB5C1;
      width:70% ;
      height: 340px;
      display: flex;
      /* position: relative; */
      margin-top: 150px;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    

    .box_vertical {
      writing-mode: vertical-lr;
    }

    .box_vertical2 {
      /* writing-mode: vertical-lr; */
      background-color: black;
      height:400px ;
      color: white;
      /* margin-bottom: 100px; */
      margin-top: -60px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }

    .box_vertical2 h2{
        writing-mode: vertical-lr;
    }

    .box_vertical3 {
      height:450px ;
      background-color: pink;
      margin-top: -110px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    
    .box_vertical3 h2{
        writing-mode: vertical-lr;
    }

    .home_img {
      width: 600px;
      height: 350px;
      /* position: relative; */
      /* padding-bottom: 100px; */
      /* margin-bottom: 10px; */
      margin-top: -50px;
      
    }

    .home_img img{
      width:100%;
      height: 100%;
      border-radius: 30px;
      border: 5px solid #9EB5C1;
    }

    /* .blue {
      background-color: blue;
    } */

`

const HomeImgCard = () => {
  return (
    <div>
        
      <StyleDiv1 >
        <div className="backgray">
          <div className="blue">
            <h2>01</h2>
            <div className="box_vertical">
              <h2>Heading</h2>
            </div>
          </div>
          <div className="home_img">
            <img src={img1} />
          </div>
          <Container>
            <h2>#666</h2>
            <span> Owned By Suh</span>
            <Row>
              <Col>아 </Col>
              <Col>무</Col>
            </Row>
            <Row>
              <Col>내</Col>
              <Col>용</Col>
            </Row>
          </Container>
          <div className="box_vertical2">
            <h1>02</h1>
            <h2>ox</h2>
          </div>
          <div className="box_vertical3">
            <h1>03</h1>
            <h2>oq</h2>
          </div>
        </div>
      </StyleDiv1>
    </div>
  )
}

export default HomeImgCard