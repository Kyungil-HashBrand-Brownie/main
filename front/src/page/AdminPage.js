import React from 'react'
import QuitMint from '../components/QuitMint'
import QuitVote from '../components/QuitVote'
import Vote from '../components/Vote'


const AdminPage = () => {
  return (
    <div>
        <QuitMint />
        <Vote />
        <QuitVote />
    </div>
  )
}

export default AdminPage