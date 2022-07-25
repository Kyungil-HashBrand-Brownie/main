import React, { useState } from 'react'
import styled from 'styled-components';
import { StyleHomeImgCard } from './homeModule';
import HomeImgCardMain from './HomeImgCardMain';
import HomeImgCardSide from './HomeImgCardSide';
import { nft1, nft2, nft3 } from '../../img/nft'
import { viliage2 } from 'img';

const datas = [
  {
    id: 0,
    num: '01',
    header: 'Creation',
    img: nft1,
  },
  {
    id: 1,
    num: '02',
    header: 'Vision',
    img: nft2,
  },
  {
    id: 2,
    num: '03',
    header: 'Enjoyment',
    img: nft3,
  }]

const ImgDivCard = styled.img`
      width:100%;
      height: 100%;
      border-radius: 30px;
      border: ${props => props.click === 1 ?
    '5px solid #ABC9FF'
    : props.click === 2 ?
      '5px solid #FF8B8B'
      : "5px solid #EB4747"
  };


  /* @media (max-width: 784px) {
    width: 80%;
    height: 80%;
  } */
`

const BackImg_viliage = styled.div`
  position:absolute ;
  width:100% ;
  /* background-color: coral ; */
  z-index: -1;
  transform: translateY(-30px);
  
  img {
    width: 100%;
    height: 600px ;
    opacity: 0.35;
  }
`

const HomeImgCard = () => {
  const [click, setClick] = useState(0)

  // 처음부터 끝까지 배열 값을 읽는다
  let getData = datas.filter((item) => item.id !== click)
  // 처음부터 읽는데 값을 찾으면 빠져 나온다.
  let frontData = datas.find(item => item.id === click)

  return (
      <StyleHomeImgCard >
        <BackImg_viliage >
          <img src={viliage2} />
        </BackImg_viliage>
        <div className="backColor"
          style={{
            backgroundColor:
              click === 1 ?
                "#ABC9FF"
                : click === 2 ?
                  "#FF8B8B"
                  : "#EB4747"

          }}>
          <div className="blue">
            <div className='blue-num'>{frontData.num}</div>
            <div className="box_vertical" onClick={() => setClick(frontData.id)}>
              <h2 className='tapestry-header0'>{frontData.header}</h2>
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