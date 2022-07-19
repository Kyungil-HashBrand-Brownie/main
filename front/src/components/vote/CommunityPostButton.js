import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const PostButton = styled.button`
  position: absolute;
  right: 24%;
  top: 46%;
  border-radius: 5px;
  &:hover {
      background: lightgray;
  }
  margin-bottom: 2px;
`

const CommunityPostButton = () => {
  const navigate = useNavigate();
  return (
      <PostButton onClick={() => navigate('/write')}>글 등록</PostButton>
  )
}

export default CommunityPostButton