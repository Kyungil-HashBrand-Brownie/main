import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'


const Main = styled.div`
    border: 1px solid;
    margin-top: 100px;
`

const StakingList = () => {

    const dispatch = useDispatch();

    const {nftList} = useSelector(state => state.nft)

  return (
      <>
        <Main>
            <h2>Staking</h2>



        </Main>
     </>
  )
}

export default StakingList