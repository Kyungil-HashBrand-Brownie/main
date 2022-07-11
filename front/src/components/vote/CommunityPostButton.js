import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const PostButton = styled.button`
  float: right;
  border-radius: 5px;
  &:hover {
      background: lightgray;
  }
  margin-bottom: 2px;
`

const CommunityPostButton = ({ state }) => {
  const navigate = useNavigate();
  return (
      <PostButton onClick={() => 
        state ? navigate('/write/0') : navigate('/write/1')}>글 등록</PostButton>
  )
}

export default CommunityPostButton