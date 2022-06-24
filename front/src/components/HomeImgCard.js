import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { img1 } from '../img';
import styled, { keyframes } from 'styled-components';
import D3 from './D3';

const datas = [
  {
     id: 0,
     num: '01',
     header: 'heading',
 },
 {
     id: 1,
     num: '02',
     header: 'rabel',  
 },
 {
     id: 2,
     num: '03',
     header: 'rabepl'  
 }]


const StyleDiv1 = styled.div`
    width:100% ;
    background-color: #CDF0EA;
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;

    .backColor{
      background-color: #F6C6EA;
      width:70% ;
      height: 340px;
      display: flex;
      /* position: relative; */
      margin-top: 150px;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    
    .back{
      background-color: #F6C6EA;
      width:70% ;
      height: 340px;
      display: flex;
      /* position: relative; */
      margin-top: 150px;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    .backColor{
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

  // 처음부터 끝까지 배열 값을 읽는다
  let getData = datas.filter((item) => item.id !== click)
  // 처음부터 읽는데 값을 찾으면 빠져 나온다.
  let frontData = datas.find(item => item.id === click)

  return (
    <div>
        
      <StyleDiv1 >
        <div className="backColor"
        style={{backgroundColor:
                                 click === 1 ?
                                 "#FAF4B7"
                                 :click === 2 ?
                                 "#F9F9F9"
                                 :"#F6C6EA"
                                
        }}>
          <div className="blue">
            <h2>{frontData.num}</h2>
            <div className="box_vertical" onClick={()=>setClick(frontData.id)}>
              <h2>{frontData.header}</h2>
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
                <div>브라우니의 제조법은 보스턴 요리학교 요리기본서("The Boston Cooking School Cook Book")의 1906년판에 최초로 등장하였다. 이 제조법에 따른 초기의 브라우니는 케이크형이며 부드러운 맛이었다. "브라우니"라는 이름은 1896년판의 책에서 처음으로 등장했으나 이것은 양철 틀에 구운 당밀 케이크였다. 즉, 현재의 브라우니는 아니었다.</div>
              </div>
              : click ===2 ?
              <div>
                <h2>황무화 된 땅에서  희망</h2>
                <b> Got Browny</b>
                <div>브라우니의 제조법은 보스턴 요리학교 요리기본서("The Boston Cooking School Cook Book")의 1906년판에 최초로 등장하였다. 이 제조법에 따른 초기의 브라우니는 케이크형이며 부드러운 맛이었다. "브라우니"라는 이름은 1896년판의 책에서 처음으로 등장했으나 이것은 양철 틀에 구운 당밀 케이크였다. 즉, 현재의 브라우니는 아니었다.</div>
              </div>
              :<div>
                <h1>#666</h1>
                <b> Owned By Suh</b>
                초콜릿 브라우니(영어: chocolate brownie)는 사각 형태로 잘린 진한 초콜릿 케이크이다. 브라우니라고 줄여서 부르기도 한다. 퍼지인가 케이크형인가, 맛의 농도, 견과, 아이싱, 크림 치즈, 초콜릿 칩 등 재료의 포함 등에 따라 다양한 형태의 브라우니가 만들어지고 있다. 초콜릿은 넣지 않고 갈색 설탕을 첨가해 제조한 브라우니는 블론디로 불린다. 브라우니는 흔히 크림과 함께 내놓기도 하며 식당에서는 커피나 우유와 함께 디저트로 곁들여 내오기도 한다.
              </div>
            }
          </Container>
          {
            getData.map((item, index) => 
              // css 적용시키기 위해 위치 고정을 위해서 index ===0 을 사용한다? 
              <div key={index} className={index === 0 ? 'box_vertical2' : 'box_vertical3'} 
              style={{backgroundColor:
                item.id === 1 ?
                "#FAF4B7"
                :item.id === 2 ?
                "#F9F9F9"
                :"#F6C6EA"
              }}
              onClick={()=>setClick(item.id)}>
                <h1>{item.num}</h1>
                <h2>{item.header}</h2>
              </div>
            )
          }
        </div>
      </StyleDiv1>
    </div>
  )
}

export default HomeImgCard;