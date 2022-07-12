import React from 'react'
import VoteTableCard from './VoteTableCard'
import { VoteCTable, VoteCTBody, VoteCTRow } from './voteModule'
import { nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8 } from '../../img/nft'
import { Ani1, Ani2, Ani3, Apro, Ep1, Ep2, Ep3, Kp1, Kp2, Kp3 } from '../../img/vote/organizations'

const CommunityVoteTable = () => {
    return (
        <VoteCTable>
            <VoteCTBody>
                <VoteCTRow>
                    <VoteTableCard img={nft1} img1={Ani1} />
                    <VoteTableCard img={nft2} img1={Ani2} />
                </VoteCTRow>
                <VoteCTRow>
                    <VoteTableCard img={nft3} img1={Ani3} />
                    <VoteTableCard img={nft4} img1={Apro} />
                </VoteCTRow>
            </VoteCTBody>
        </VoteCTable>
    )
}

export default CommunityVoteTable