import React from 'react';
import styled from "styled-components";
import twit from "../img/footer/twit.png"
import disc from "../img/footer/disc.png"
import inst from "../img/footer/inst.png"
import tele from "../img/footer/tele.png"
import { footerImg } from 'img/footer';

const Outer = styled.div`
    flex: 1;
    height: 120px;
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: flex-end;
`

const Foot = styled.div`
    display: flex;
    align-items: center;
    height: 120px;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;

    img {
        width: 100%;
        height:  100%;
    }
    /* fContainer1 */
    .fContainer {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        color: black;
        text-shadow: -2px -1px 6px white, 1rem 1rem 2em pink;
        font-weight: 800;
        font-size: 1.1vw;
        line-height: 16px;
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
        margin-top: 20px;
        padding-left: 20px;
    }
    .sns_logo{
        width: 36px;
        height: 36px;
    }

    /* 반응형 */
    @media (max-width: 768px) {
        .fContainer {
            display: block;
        }
    }
`

const Footer = () => (
    <Outer>
        <img className='foot-img' src={footerImg} alt='footer'/>
    <Foot>
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
                    </div>
                </div>
            </div>
        </div>
    </Foot>
    </Outer>
)
export default Footer;