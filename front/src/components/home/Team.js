import React from 'react'
import { nft1, nft2, nft3, nft4, nft5 } from '../../img/nft';
import TeamCard from './TeamCard';
import { TeamOuter, TeamBrowny, TeamText } from './homeModule';

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