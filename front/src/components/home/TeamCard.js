import React from 'react'
import styled from 'styled-components';

const Img = styled.img `
    width: 300px;
    border-top-left-radius: 300px;
    border-top-right-radius: 300px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`
const TeamImgOuter = styled.div`
    margin: auto;
    border: 4px solid white;
    background: white;
    border-radius: 300px;
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`
const TeamInfoName = styled.div`
    font-size: 24px;
    text-align: center;
`
const TeamInfoPos = styled.div`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`

const TeamCard = ({ info }) => {
    const { id, img, name, pos } = info;

    const LinkTo = () => {
        window.open('https://github.com/Kyungil-HashBrand-Brownie/main', '_blank')
    }

    return (
        <TeamImgOuter onClick={LinkTo}>
            <Img src={img} />
            <TeamInfoPos>{pos}</TeamInfoPos>
            <TeamInfoName>{name}</TeamInfoName>
        </TeamImgOuter>
    )
}

export default TeamCard