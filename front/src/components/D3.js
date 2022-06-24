import React from 'react';
import "../scss/style.css";
import styled from 'styled-components';

const StyleD = styled.div`
  min-height: 350px;
  /* height: 40vh; */
  margin: 0;
  background:radial-gradient(circle, darken(dodgerblue, 10%),#1f4f96, #1b2949, #000);
  /* position:absolute; */
  /* transform : translate(500px); */
  /* position: fixed; */
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
  z-index: 0;
`

const D3 = () => {
  return (
    <div>
        <div className="stage">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
    </div>
  )
}

export default D3