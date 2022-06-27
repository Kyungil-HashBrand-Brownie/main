import React from 'react'
import styled from 'styled-components'
import { viliage2 } from '../img'

const StyledViliage = styled.div`

    width: 100%;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 100px;
    /* position: relative; */

    .div1 {
        background-color: pink ;
        position: absolute;
        width: 100%;
        height: 400px;
        opacity: 0.3;
        z-index:-1;
    }

`
const HomeBackImgPosition = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${viliage2});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    z-index: -2;
`

const Viliage = () => {
  return (
    <div>
        <StyledViliage>
            <div className="div1">
                <HomeBackImgPosition>
                </HomeBackImgPosition>
            </div>
        </StyledViliage>
    </div>
  )
}

export default Viliage