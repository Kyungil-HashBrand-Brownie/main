import React,{useState, useEffect} from 'react'
import { baking, baking2 , baking3 ,Group2, img1 ,group , WhiteImg , browny1 , Apro , Epro , ModalKpro } from '../img'
import styled from 'styled-components';


const data = [{
        id: 1, 
        img: baking
    }, {
        id: 2, 
        img: baking2
    }, {
        id: 3, 
        img: baking3
    }, {
        id: 4, 
        img: group
    }, {
        id: 5, 
        img: Group2
    }, {
        id: 6,
        img: Apro
    }, {
        id: 7,
        img: ModalKpro
    }];

const ImgCardDiv = styled.div`
    display: flex;
    justify-content: center;

    .imgContainer1 { 
        display: flex-end;
        width: 200px;
        height: 200px;
        margin: 10px ;
        background-color: red;
    }

    .imgContainer1 img{
        width: 100%;
        height: 100%;
    }
`

const ImgCard1 = styled.img`
    margin: 10px;
    /* flex-direction: row-reverse; */
    /* flex : 1; */
    /* align-items: flex-start; */
    /* display: inline-block; */
    /* white-space:nowrap; */
`

/* 
    1. map으로 이미지 리스트 만들기
    2. map 으로 뽑기
    3. 
*/

const SlideShow = () => {

    const [slide, setSlide] = useState(data)
    const [count, setCount] = useState(1)

    const button = () => {
        setCount(count + 1)
    }

  return (
    <div>
        {slide?.map((item, index) => {
            return <ImgCard1 src={item.img}  width="400px" height="400px"/>
        })}

        <button onClick={() => button()} > click </button>
    </div>
  )
}

export default SlideShow