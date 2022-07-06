import React from 'react'
import styled from 'styled-components'
import VoteTableCard from './VoteTableCard'
import { nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8 } from '../../img/nft'
import { Ani1, Ani2, Ani3, Apro, Ep1, Ep2, Ep3, Kp1, Kp2, Kp3 } from '../../img/vote/organizations'

const VoteCTable = styled.div`
    width: 1200px;
    height: 800px;
    background: white;
`
const VoteCTHeader = styled.div`
    background: red;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
`
const VoteCTBody = styled.div`
    width: 100%;
    /* height: 1700px; */
    /* background: blue; */
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    margin: auto;
`
const VoteCTRow = styled.div`
    display: flex;
    /* background: yellow; */
    width: 95%;
    margin: auto;
    margin-bottom: 10px;
`

const CommunityVoteTable = () => {
    return (
        <VoteCTable>
            <VoteCTHeader>CommunityVoteTable</VoteCTHeader>
            <VoteCTBody>
                <VoteCTRow>
                    <VoteTableCard img={nft1} img1={Ani1}/>
                    <VoteTableCard img={nft2} img1={Ani2}/>
                </VoteCTRow>
                <VoteCTRow>
                    <VoteTableCard img={nft3} img1={Ani3}/>
                    <VoteTableCard img={nft4} img1={Apro}/>
                </VoteCTRow>
                {/* <VoteCTRow>
                    <VoteTableCard img={nft5}/>
                    <VoteTableCard img={nft6}/>
                </VoteCTRow>
                <VoteCTRow>
                    <VoteTableCard img={nft7}/>
                    <VoteTableCard img={nft8}/>
                </VoteCTRow> */}
            </VoteCTBody>
        </VoteCTable>
    )
}

export default CommunityVoteTable