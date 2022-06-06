import React from 'react'
import Header from '../components/Header'
import styled from "styled-components";


const MintPage = () => {

    const Main = styled.div`
        display: flex ;
        height : 1000px ;
        background-color : red ;
    `

    const Div1 = styled.div`
        width:  50%;
        background-color: blue;
        height: 100% ;
    `;

    const Div2 = styled.div`
        width:  50%;
        background-color: pink;
        height: 100% ;
    `;    

    const DivA = styled.div`
        width: 280px;
        font-size: 1rem;
        line-height: 1.5;
        /* color: pink; */
        border-radius: 0.25rem;
        background-color: white;
        border: 1px solid lightgray;
        text-align: center;
        display:flex ;
        flex-wrap: wrap;
        justify-content:center ;
    `;

  return (
    <>
        <Header />
        <Main>
            <Div1>hi </Div1>
            <Div2>bye </Div2>
        </Main>
    </>
  )
}

export default MintPage