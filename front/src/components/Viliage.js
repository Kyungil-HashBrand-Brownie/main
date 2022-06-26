import React from 'react'
import styled from 'styled-components'
import { viliage2 } from '../img'

const StyledViliage = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    opacity: 0.8;

    img {
        width: 100%;
    }
    .div1 {
        background-color: pink ;
        position: absolute;
        width: 100%;
        height: 1000px;
        opacity: 0.3;
        z-index:1;
    }
    .div1::before{
        background: linear-gradient(to right, black, transparent) ;
    }
`
const Viliage = () => {
  return (
    <div>
        <StyledViliage>
        <div className="div1">
        {/* <img src={viliage2} /> */}
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <img src={viliage2} />

        </StyledViliage>

    </div>
  )
}

export default Viliage