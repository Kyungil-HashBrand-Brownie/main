import React, { useState } from 'react'
import { Img1 } from '../../img/browny';
import styled from 'styled-components';
import { StyleHomeImgCard } from './homeModule';
import HomeImgCardMain from './HomeImgCardMain';
import HomeImgCardSide from './HomeImgCardSide';

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
    header: 'rabel'
  }]

const ImgDivCard = styled.img`
      width:100%;
      height: 100%;
      border-radius: 30px;
      border: ${props => props.click === 1 ?
    '5px solid #FAF4B7'
    : props.click === 2 ?
      '5px solid #F9F9F9'
      : "5px solid #F6C6EA"
  };
`

const HomeImgCard = () => {
  const [click, setClick] = useState(0)

  // 처음부터 끝까지 배열 값을 읽는다
  let getData = datas.filter((item) => item.id !== click)
  // 처음부터 읽는데 값을 찾으면 빠져 나온다.
  let frontData = datas.find(item => item.id === click)

  return (
    <div>

      <StyleHomeImgCard >
        <div className="backColor"
          style={{
            backgroundColor:
              click === 1 ?
                "#FAF4B7"
                : click === 2 ?
                  "#F9F9F9"
                  : "#F6C6EA"

          }}>
          <div className="blue">
            <h2>{frontData.num}</h2>
            <div className="box_vertical" onClick={() => setClick(frontData.id)}>
              <h2>{frontData.header}</h2>
            </div>
          </div>
          <div className="home_img" >
            <ImgDivCard src={Img1} alt="hi" click={click} />
          </div>
          <HomeImgCardMain click={click} />
          <HomeImgCardSide getData={getData} setClick={setClick} />
        </div>
      </StyleHomeImgCard>
    </div>
  )
}

export default HomeImgCard;