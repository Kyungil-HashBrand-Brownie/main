import React,{useState, useEffect} from 'react'
import { baking, baking2 , baking3 ,Group2, img1 ,group , WhiteImg , browny1 , Apro , Epro , ModalKpro } from '../img'


const data = {
    slide: [{
        id: 1, 
        img: {baking}
    }, {
        id: 2, 
        img: {baking2}
    }, {
        id: 3, 
        img: {baking3}
    }, {
        id: 4, 
        img: {group}
    }, {
        id: 5, 
        img: {Group2}
    }, {
        id: 6,
        img: {Apro}
    }, {
        id: 7,
        img: {ModalKpro}
    }]
}

const SlideShow = () => {

    const [slide, setSlide] = useState(data)
    const [count, setCount] = useState(1)

    const button = () => {
        setCount(count + 1)
    }

    /* 
        1. map으로 이미지 리스트 만들기
        2. map 으로 뽑기
        3. 
    */


  return (
    <div>
        {/* {
            count
        } */}

        <button onClick={setCount()} > click </button>
    </div>
  )
}

export default SlideShow