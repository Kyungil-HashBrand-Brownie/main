import React, { useEffect, useState } from 'react'
import VoteTableCard from './VoteTableCard'
import { VoteCTable, VoteCTBody, VoteCTRow } from './voteModule'
import { nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8 } from '../../img/nft'
import { Ani1, Ani2, Ani3, Apro, Ep1, Ep2, Ep3, Kp1, Kp2, Kp3 } from '../../img/vote/organizations'
import axios from 'axios'

const CommunityVoteTable = () => {
    const [data, setData] = useState(null);
    const getData = async () => {
        let result = await axios.get('/api/community/view/vote');
        setData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <VoteCTable>
            <VoteCTBody>
                {data?.map((item, index) => 
                    <VoteCTRow key={index}>
                        {item.map((data, idx) => 
                            <VoteTableCard key={data.idx} data={data} img={nft1} img1={Ani1} id={index*2 + idx + 1}/>)}
                    </VoteCTRow>
                )}
            </VoteCTBody>
        </VoteCTable>
    )
}

export default CommunityVoteTable