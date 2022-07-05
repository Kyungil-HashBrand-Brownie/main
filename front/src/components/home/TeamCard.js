import React from 'react'
import { Img, TeamImgOuter, TeamInfoPos, TeamInfoName } from './homeModule'

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