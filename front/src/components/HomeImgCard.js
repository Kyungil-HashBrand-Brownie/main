import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { img1 } from '../img';
import styled, { keyframes } from 'styled-components';




const StyleDiv1 = styled.div`
    width:100% ;
    background-color: #E5E3D7;
    height: 400px;
    display: flex;
    justify-content: center;
    position: relative;

    .backgray{
      background-color: #9EB5C1;
      width:80% ;
      height: 300px;
      display: flex;
      position: relative;
      margin-top: 50px;
      border-radius: 30px;
    }
    

    .box_vertical {
      writing-mode: vertical-lr;
    }

    .box_vertical2 {
      writing-mode: vertical-lr;
      background-color: black;
      height:350px ;
      color: white;
      /* margin-bottom: 100px; */
      margin-top: -50px;
      border-radius: 30px;

    }

    .box_vertical3 {
      writing-mode: vertical-lr;
      height:400px ;
      background-color: pink;
      margin-top: -100px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;

    }

    .home_img {
      width: 500px;
      height: 300px;
      /* position: relative; */
      /* padding-bottom: 100px; */
      /* margin-bottom: 10px; */
      margin-top: -30px;
      
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
            <div class="box_vertical">
              <h2>Heading</h2>
            </div>
          </div>
          <div class="home_img">
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
          <div class="box_vertical2">
            <h2>ox</h2>
          </div>
          <div class="box_vertical3">
            <h2>oq</h2>
          </div>
        </div>
      </StyleDiv1>
    </div>
  )
}

export default HomeImgCard