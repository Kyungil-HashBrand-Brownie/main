import React, { useState } from 'react'
import styled from 'styled-components';
import { StyleHomeImgCard } from './homeModule';
import HomeImgCardMain from './HomeImgCardMain';
import HomeImgCardSide from './HomeImgCardSide';
import { nft1, nft2, nft3 } from '../../img/nft'

const datas = [
  {
    id: 0,
    num: '01',
    header: 'heading',
    img: nft1,
  },
  {
    id: 1,
    num: '02',
    header: 'rabel',
    img: nft2,
  },
  {
    id: 2,
    num: '03',
    header: 'rabel',
    img: nft3,
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
      <StyleHomeImgCard >
        <div className="backColor"
          style={{
            backgroundColor:
              click === 1 ?
                "#52a2fe"
                : click === 2 ?
                  "rgb(242, 142, 70)"
                  : "#fe6652"

          }}>
          <div className="blue">
            <h2 className='blue-num'>{frontData.num}</h2>
            <div className="box_vertical" onClick={() => setClick(frontData.id)}>
              <h2>{frontData.header}</h2>
            </div>
          </div>
          <div className="home_img" >
            <ImgDivCard src={frontData.img} alt="hi" click={click} />
          </div>
          <HomeImgCardMain click={click} />
          <HomeImgCardSide getData={getData} setClick={setClick} />
        </div>
      </StyleHomeImgCard>
  )
}

export default HomeImgCard;