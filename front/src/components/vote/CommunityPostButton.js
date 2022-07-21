import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import EndVote from 'components/EndVote'


const PostButton = styled.button`
  position: absolute;
  right: 24%;
  top: 36%;
  border-radius: 5px;
  &:hover {
      background: lightgray;
  }
  margin-bottom: 2px;
`

const LayOut_button_EndVote = styled.div`
  margin-left: 10px ;
`

const CommunityPostButton = () => {
  const navigate = useNavigate();
  return (
    <>
    {
      
    }
    <LayOut_button_EndVote>
      <EndVote />
    </LayOut_button_EndVote>
    <PostButton onClick={() => navigate('/write')}>글 등록</PostButton>
    </>
  )
}

export default CommunityPostButton