import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import EndVote from 'components/EndVote'
import { useSelector } from 'react-redux'

const Main_Community_button = styled.div`
  display:flex ;
  justify-content: flex-end;
  width: 90%;
`


const PostButton = styled.button`
  /* position: absolute; */
  /* right: 24%; */
  /* top: 36%; */
  border-radius: 5px;
  &:hover {
      background: lightgray;
  }
  margin-bottom: 2px;
`

const LayOut_button_EndVote = styled.div`
  /* margin-left: 10px ; */
`



const CommunityPostButton = () => {
  const navigate = useNavigate();
  const { isDeployer } = useSelector(state => state.main)
  console.log("is deploy" , isDeployer)  // true 


  
  return (
    <>
    <Main_Community_button>
      <div>
        <PostButton onClick={() => navigate('/write')}>글 등록</PostButton>
      </div>
    </Main_Community_button>
    </>
  )
}

export default CommunityPostButton