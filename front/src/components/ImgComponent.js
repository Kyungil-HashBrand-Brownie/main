import React from 'react'
import { degreeC1,degreeC2,degreeC3,degreeC4,degreeC5,degreeC6,degreeC7,degreeC8,degreeC9 } from 'img/degreecharactor'
import styled from 'styled-components'


const ImgContanier_LayOut1 = styled.img`
    position: absolute; 
    right: 20%;
    top: 18%;
    z-index: -1;
`
const ImgContanier_LayOut2 = styled.img`
    position: absolute;
    right: 12%;
    top: 65%;
    z-index: -1;

`
const ImgContanier_LayOut3 = styled.img`
    position: absolute; 
    right: 50%;
    top: 35%;
    z-index: -1;
`
const ImgContanier_LayOut4 = styled.img`
    position: absolute; 
    left : 7%;
    top: 60%;
    z-index: -1;
    
`
const ImgContanier_LayOut5 = styled.img`
    position: absolute;
    left: 20%; 
    z-index: -1;
    
`
const ImgContanier_LayOut6 = styled.img`
    position: absolute; 
    right: 42%;
    top: 70%;
    z-index: -1;
`
const ImgContanier_LayOut7 = styled.img`
    position: absolute; 
    left:2%;
    top:20%;
    z-index: -1;
    
`
const ImgContanier_LayOut8 = styled.img`
    position: absolute; 
    right: 4%;
    top: 8%;
    z-index: -1;
`
const ImgContanier_LayOut9 = styled.img`
    position: absolute; 
    right: 3%;
    top: 40%;
    z-index: -1;
`

const ImgComponent = () => {


  return (
    <div>
        <ImgContanier_LayOut1 src ={degreeC1} width="200px"/>
        <ImgContanier_LayOut2 src ={degreeC2} width="200px"/>
        <ImgContanier_LayOut3 src ={degreeC3} width="200px"/>
        <ImgContanier_LayOut4 src ={degreeC4} width="200px"/>
        <ImgContanier_LayOut5 src ={degreeC5} width="200px"/>
        <ImgContanier_LayOut6 src ={degreeC6} width="200px"/>
        <ImgContanier_LayOut7 src ={degreeC7} width="200px"/>
        <ImgContanier_LayOut8 src ={degreeC8} width="200px"/>
        <ImgContanier_LayOut9 src ={degreeC9} width="200px"/>
    </div>
  )
}

export default ImgComponent