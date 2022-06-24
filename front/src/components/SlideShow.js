import React,{useState, useEffect} from 'react'
import { baking, baking2 , baking3 ,Group2, img1 ,group , WhiteImg , browny1 , Apro , Epro , ModalKpro } from '../img'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8, nft9, nft10, nft11, nft12, nft13, nft14, nft15, nft16 } from '../img/nft';


const data = [{
        id: 1, 
        img: nft1,
        caption: "Cute browny1"
    }, {
        id: 2, 
        img: nft2,
        caption: "Cute browny2"
    }, {
        id: 3, 
        img: nft3,
        caption: "Cute browny3"
    }, {
        id: 4, 
        img: nft4,
        caption: "Cute browny4"
    },
    {
        id: 5, 
        img: nft5,
        caption: "Cute browny5"
    }, {
        id: 6,
        img: nft6,
        caption: "Cute browny6"
    }, {
        id: 7,
        img: nft7,
        caption: "Cute browny7"
    },{
        id: 8,
        img: nft8,
        caption: "Cute browny8"
    },{
        id: 9,
        img: nft9,
        caption: "Cute browny9"
    },{
        id:10,
        img: nft10,
        caption: "Cute browny10"
    },{
        id: 11,
        img: nft11,
        caption: "Cute browny11"
    },{
        id: 12,
        img: nft12,
        caption: "Cute browny12"
    },{
        id: 13,
        img: nft13,
        caption: "Cute browny"
    },{
        id: 14,
        img: nft14,
        caption: "Cute browny"
    } 

];

const Container = styled.div`
    min-height: 400px;
    background: #1ab394; 
  `,
  StyledSlider = styled(Slider)`
    & .slick-slide img {
    min-height: 400px;
    }
  `,
  ImageContainer = styled.div`
    position: relative;
    color: white;
    margin: 10px;
    /* margin:auto ; */
    margin-top: 50px;
    margin-bottom:50px;
  `,
  Image = styled.img`
    width:400px;
    border-radius: 20px ;
    border: 5px solid white;
  `,
  BottomLeft = styled.div`
    position: absolute;
    font-size: 40px;
    bottom: 8px;
    left: 16px;
  `;



const SlideShow = () => {

    const [slide, setSlide] = useState(data)

    const settings = {
        dots: false,
        infinite: true,             //무한 반복 옵션
        slidesToShow: 3,            // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,
        autoplay: true,             // 자동 스크롤 사용 여부
        speed: 6000,                // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        autoplaySpeed: 1,
        cssEase: "linear",
        // draggable : true,
        // setPosition: 0,
        // vertical : false,		// 세로 방향 슬라이드 옵션
        // verticalSwiping: true,
        rtl: true,                  //slider 방향을 오른쪽에서 왼쪽으로 변경 -default:false

        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 960, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3 
						} 
					},
					{ 
						breakpoint: 480, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:2 
						} 
					}
				]
      };

      const settings2 = {
          ...settings,
          rtl: false,
      };

  return (
    <>
        <Slider {...settings}>
            {/* {slide?.map((item, index) => {
                return <ImgCard1 src={item?.img} key={index}  />
            })} */}

            {slide.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.img} />
                  <BottomLeft>{item.caption}</BottomLeft>
                </ImageContainer>
              </div>
            );
          })}
        </Slider>
        
        <Slider {...settings2}>
            {/* {slide?.map((item, index) => {
                return <ImgCard1 src={item?.img} key={index}  />
            })} */}

            {slide.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.img} />
                  <BottomLeft>{item.caption}</BottomLeft>
                </ImageContainer>
              </div>
            );
          })}
        </Slider>

    </>
  )
}

export default SlideShow