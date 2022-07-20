import React from 'react';
import styled from "styled-components";
import { Foot } from './module'
import { twit, disc, inst, tele, footerImg } from '../img/footer'

const names = ['twit', 'disc', 'inst', 'tele']
const refs = [
    'https://twitter.com/DaoPirates', 'https://discord.com/invite/Nd6xU3bN',
    'https://www.instagram.com/piratesdao/', 'https://t.me/piratesdao'
]
const srcs = [twit, disc, inst, tele]
const datas = names.map((name, index) => {
    return {
        name: name,
        ref: refs[index],
        src: srcs[index]
    }
})

const Outer = styled.div`
    flex: 1;
    height: 120px;
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: flex-end;

`

const Footer = () => (
    <Outer>
        <img className='foot-img' src={footerImg} alt='footer'/>
        <Foot>
            <div className="fContainer">
                <div className="fContainer_left">
                    <div className="fContainer_left_content">
                        <div>BROWNY PROJECT</div>
                        <div>A browny day keeps the frownies away</div>
                    </div>
                </div>
                <div className="fContainer_right">
                    <div className="fContainer_right_content">
                        <div className="snsText">Join our Community</div>
                        <div className="imgSection">
                            {datas.map(data => 
                                <div key={data.name} className='img_box'>
                                    <a href={data.ref} target='blank'><img alt={data.name} className='sns_logo' src={data.src}/></a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Foot>
    </Outer>
)
export default Footer;