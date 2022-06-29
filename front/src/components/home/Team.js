import React from 'react'
import styled from 'styled-components';
import { nft1, nft2, nft3, nft4, nft5 } from '../../img/nft';
import TeamCard from './TeamCard';

const teamInfo = [
    {   
        id: 1,
        name: 'WSJ',
        img: nft1,
        pos: 'Backend(Leader)'
    },
    {
        id: 2,
        name: 'PSJ',
        img: nft2,
        pos: 'Frontend'
    },
    {
        id: 3,
        name: 'NJH',
        img: nft3,
        pos: 'Blockchain'
    }, 
    {
        id: 4,
        name: 'SKY',
        img: nft4,
        pos: 'Frontend'
    }, 
    {
        id: 5,
        name: 'PIS',
        img: nft5,
        pos: 'Backend'
    },
]

const TeamOuter = styled.div `
    margin: 100px 0;
`

const TeamBrowny = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const TeamText = styled.div `
    text-align: center;
    font-size: 40px;
    margin: 40px 0;
`

const Team = () => {
  return (
    <TeamOuter>
        <TeamText>Team</TeamText>
        <TeamBrowny>
            {teamInfo.map((info, index) => <TeamCard key={index} info={info}/>)}
        </TeamBrowny>
    </TeamOuter>
  )
}

export default Team