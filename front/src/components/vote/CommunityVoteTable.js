import React, { useEffect, useState } from 'react'
import VoteTableCard from './VoteTableCard'
import { VoteCTable, VoteCTBody, VoteCTRow } from './voteModule'
import axios from 'axios'
import Pagination from './Pagination'

const CommunityVoteTable = () => {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const getData = async () => {
        let result = await axios.get('/api/community/view/vote');
        console.log(result.data);
        setData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <VoteCTable>
            <VoteCTBody>
                {data!=null && data.slice(2*page-2, 2*page).map((item, index) => 
                    <VoteCTRow key={index}>
                        {item.map((data) => 
                            <VoteTableCard key={data.idx + 1000} data={data} />)}
                    </VoteCTRow>
                )}
            </VoteCTBody>
            <Pagination total={data} page={page} setPage={setPage}/>
        </VoteCTable>
    )
}

export default CommunityVoteTable