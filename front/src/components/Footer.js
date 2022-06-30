import React from 'react';
import styled from "styled-components";
import twit from "../img/footer/twit.png"
import disc from "../img/footer/disc.png"
import inst from "../img/footer/inst.png"
import tele from "../img/footer/tele.png"
import kakao from "../img/footer/kakao.png"
import kakao2 from "../img/footer/kakao2.png"
import { footerImg } from 'img/footer';

const Outer = styled.div`
    flex: 1;
    height: 320px;
    /* margin-bottom: 20px; */
    height: 120px;
    /* padding-bottom: 20px; */
    /* background: #F39798; */

    display: flex;
    align-items: flex-end;
    /* background: grey; */

    /* position : relative; */
    /* transform : translateY(-100%); */

`

const Foot = styled.div`
    /* background: blue; */
    /* background: red; */
    display: flex;
    /* bottom: 0px; */
    /* top: 100px ; */
    align-items: center;
    height: 120px;
    width: 100%;
    /* margin-top: 23px; */
    padding-left: 10%;
    padding-right: 10%;
    /* background: #F39798; */
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;


    /* background: gray; */
    /* background-image: url(${footerImg}) ; */
    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%; */
    /* background-size: auto; */
    /* padding-left: 10%; */
    /* padding-right: 10%; */
    
    img {
        width: 100%;
        height:  100%;
    }
    
    /* fContainer1 */
    .fContainer {
        /* background-color: gray; */
        width: 100%;
        /* vertical-align: middle; */
        display: flex;
        align-items: center;
        position: relative;
        /* position: absolute; */
        /* margin-top: 30px; */
        /* margin-bottom: 30px; */
        color: brown;
        font-weight: 600;
        font-size: 1vw;
        line-height: 16px;
        /* font-family: 'Walter Turncoat', cursive; */
        align-items: flex-start;
        justify-content: space-between;
    } 

    .fContainer a {
        text-decoration: none;
        color: white; 
    }

    .fContainer a:link{
        text-decoration: none;
        color: white;
    }
    
    .fContainer a:visited{
        text-decoration: none;
        color: white;
    }

    .fContainer_left{
        display: flex;
    }
    
    /* LEFT */
    .fContainer_left_content {
        margin-right: 30px;
        line-height: 40px;
    }

    /* RIGHT */
    .fContainer_right {
        /* margin-left:5%; */
        /* padding-top: 10px; */
    }

    .imgSection {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
    }

    .snsText{
        text-align: right;
    }

    .img_box {
        /* background: red; */
        /* padding-top: 20px; */
        margin-top: 20px;
        padding-left: 20px;
    }

    .sns_logo{
        width: 36px;
        height: 36px;
    }

    /* 폰트 */
    /* font-family: 'Gothic A1', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Rock Salt', cursive; */
    /* font-family: 'Walter Turncoat', cursive; */

    /* 반응형 */
    @media (max-width: 768px) {
        .fContainer {
            display: block;
        }
    }
`

const Footer = () => (
    // <Outer>
    <Foot>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&family=Kdam+Thmor+Pro&family=Walter+Turncoat&display=swap" rel="stylesheet" /> */}
        {/* <img src={footerImg} /> */}
        <div className="fContainer">
            <div className="fContainer_left">
                <div className="fContainer_left_content">
                    BROWNY PROJECT<br />
                    A browny day keeps the frownies away
                    <br />
                </div>
            </div>
            <div className="fContainer_right">
                <div className="fContainer_right_content">
                    <div className="snsText">Join our Community</div>
                    <div className="imgSection">
                        <div className="img_box">
                            <a href="https://twitter.com/DaoPirates" target="blank"><img alt="twit" className="sns_logo" src={twit}></img></a>
                        </div>
                        <div className="img_box">
                            <a href="https://discord.com/invite/Nd6xU3bN" target="blank"><img alt="disc" className="sns_logo" src={disc}></img></a>
                        </div>
                        <div className="img_box">
                            <a href="https://www.instagram.com/piratesdao/" target="blank"><img alt="inst" className="sns_logo" src={inst}></img></a>
                        </div>
                        <div className="img_box">
                            <a href="https://t.me/piratesdao" target="blank"><img alt="tele" className="sns_logo" src={tele}></img></a>
                        </div>
                        {/* <div className="img_box">
                            <a href="https://open.kakao.com/o/gzAIhHXd" target="blank"><img alt="kakao" className="sns_logo" src={kakao2} ></img></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </Foot>
    // </Outer>
)
export default Footer;