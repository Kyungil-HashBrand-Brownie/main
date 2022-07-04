import React from 'react'
import styled from 'styled-components'

const PostButton = styled.button`
    border-radius: 5px;
    &:hover {
        background: lightgray;
    }
`

const CommunityPostButton = () => {
  return (
    <PostButton>글 등록</PostButton>
  )
}

export default CommunityPostButton