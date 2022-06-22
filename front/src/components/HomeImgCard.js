import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { img1 } from '../img';
import styled, { keyframes } from 'styled-components';




const StyleDiv1 = styled.div`
    width:100% ;
    background-color: #CDF0EA;
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;

    .backgray{
      background-color: #F6C6EA;
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
      background-color: #FAF4B7;
      height:400px ;
      color: black;
      /* margin-bottom: 100px; */
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
      border: 5px solid #F6C6EA;
    }

`

const HomeImgCard = () => {

  // const [rabelState, setRabelState] = useState(0)
  // const [rabelYellow, setRabelYellow] = useState(1)
  // const [rabelWhite, setRabelWhite] = useState(2)

  const [click, setClick] = useState(0)

  const buttonA = () => {
    console.log("test")

    if (click === 1) {
      setClick(click)
      console.log("rabel 02")
    }else if (click === 2) {
      setClick(click)
      console.log("rabel 03")
    }else {

    }
  }

  // useEffect(() => {
  //   buttonA()
  // })

  return (
    <div>
        
      <StyleDiv1 >
        <div className="backgray">
          <div className="blue">
            <h2>01</h2>
            <div className="box_vertical" onClick={()=>setClick(0)}>
              <h2>Heading</h2>
            </div>
          </div>
          <div className="home_img">
            <img src={img1} />
          </div>
          <Container>

            {
              click ===1 ?
              <div>
                <h1>우리들의 일그러진 영웅</h1>
                <b> Warior Browny</b>
                브라우니의 제조법은 보스턴 요리학교 요리기본서("The Boston Cooking School Cook Book")의 1906년판에 최초로 등장하였다. 이 제조법에 따른 초기의 브라우니는 케이크형이며 부드러운 맛이었다. "브라우니"라는 이름은 1896년판의 책에서 처음으로 등장했으나 이것은 양철 틀에 구운 당밀 케이크였다. 즉, 현재의 브라우니는 아니었다.
              </div>
              : click ===2 ?
              <div>
                <h1>우리들의 희망</h1>
                <b> Got Browny</b>
                브라우니의 제조법은 보스턴 요리학교 요리기본서("The Boston Cooking School Cook Book")의 1906년판에 최초로 등장하였다. 이 제조법에 따른 초기의 브라우니는 케이크형이며 부드러운 맛이었다. "브라우니"라는 이름은 1896년판의 책에서 처음으로 등장했으나 이것은 양철 틀에 구운 당밀 케이크였다. 즉, 현재의 브라우니는 아니었다.
              </div>
              :<div>
                <h1>#666</h1>
                <b> Owned By Suh</b>
                초콜릿 브라우니(영어: chocolate brownie)는 사각 형태로 잘린 진한 초콜릿 케이크이다. 브라우니라고 줄여서 부르기도 한다. 퍼지인가 케이크형인가, 맛의 농도, 견과, 아이싱, 크림 치즈, 초콜릿 칩 등 재료의 포함 등에 따라 다양한 형태의 브라우니가 만들어지고 있다. 초콜릿은 넣지 않고 갈색 설탕을 첨가해 제조한 브라우니는 블론디로 불린다. 브라우니는 흔히 크림과 함께 내놓기도 하며 식당에서는 커피나 우유와 함께 디저트로 곁들여 내오기도 한다.
              </div>
            }
          </Container>
          <div className="box_vertical2" onClick={()=>setClick(1)}>
            <h1>02</h1>
            <h2>rabel</h2>
          </div>
          <div className="box_vertical3" onClick={()=>setClick(2)}>
            <h1>03</h1>
            <h2>rabel</h2>
          </div>
        </div>
      </StyleDiv1>
    </div>
  )
}

export default HomeImgCard