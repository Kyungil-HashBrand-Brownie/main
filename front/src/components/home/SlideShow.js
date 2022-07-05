import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NFTs } from '../../img/nft';
import { useNavigate } from 'react-router-dom';
import { ImageContainer, SliderPosition, Image, BottomLeft } from './homeModule';

const data = NFTs.map((item, index) => {
  let d = {};
  d.id = index;
  d.img = item;
  d.caption = `Cute browny${index}`;
  return d;
})

const SlideShow = () => {

  const navigate = useNavigate();

  const settings = {
    // dots: false,
    infinite: true,             //무한 반복 옵션
    slidesToShow: 3,            // 한 화면에 보여질 컨텐츠 개수
    // slidesToScroll: 1,
    autoplay: true,             // 자동 스크롤 사용 여부
    speed: 6000,                // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: false,
    // draggable : true,
    // setPosition: 0,
    vertical: true,		// 세로 방향 슬라이드 옵션
    // verticalSwiping: true,
    rtl: true,                  //slider 방향을 오른쪽에서 왼쪽으로 변경 -default:false

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2
        }
      }
    ]
  };

  const settings2 = {
    ...settings,
    rtl: false,
  };

  const mapping = [settings, settings2, settings];

  return (
    <SliderPosition>
      {mapping.map((mapItem, index) =>
        <Slider {...mapItem} key={index}>
          {data.map(item => {
            return (
                <ImageContainer key={item.caption}>
                  <Image onClick={() => navigate('/mint')} src={item.img} />
                  <BottomLeft>{item.caption}</BottomLeft>
                </ImageContainer>
            );
          })}
        </Slider>
      )}
    </SliderPosition>
  )
}

export default SlideShow