import React, { useState } from "react";
import styled from "styled-components";
// import "./style.css"

const Main = styled.div`
  font-size: 20px;
`;

const SlideTest = () => {
  const [click, setClick] = useState(false);

  const a = [1, 2, 3, 4, 5];

  const buttonA = (e) => {
    setClick(!click);
  };
  /* 
    1. 전체 데이터 가져오기
    2. 클릭하는것이 true값이 바뀐다.
    3. 나머지는 false값으로 바꾼다.
  */

  return (
    <>
    <div className="mkt-3dSlider py-6">
    <div className="container">
        <h1 className="mkt-3dSlider-title">Section Title</h1>
    <p className="mkt-3dSlider-description">a description can be here</p>
    <section id="slider">
    
    
    <input className="card-slider" type="radio" name="slider" id="s1"/>
    <input className="card-slider" type="radio" name="slider" id="s2"/>
    <input className="card-slider" type="radio" name="slider" id="s3" checked/>
    <input className="card-slider" type="radio" name="slider" id="s4"/>
    <input className="card-slider"type="radio" name="slider" id="s5"/>
    <label for="s1" id="slide1" className="card-slider"> 1   
    </label>
    <label for="s2" id="slide2" className="card-slider">2</label>
    <label for="s3" id="slide3" className="card-slider">3</label>
    <label for="s4" id="slide4" className="card-slider">4</label>
    <label for="s5" id="slide5" className="card-slider">5</label>
    </section>
        <input type="button">View All</input>
    </div>
    </div>
    </>
  );
};

export default SlideTest;
