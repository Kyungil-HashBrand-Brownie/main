import React from 'react'
import QuitMint from '../components/QuitMint'
import QuitVote from '../components/QuitVote'
import Vote from '../components/Vote'
import WhiteListMember from '../components/WhiteListMember'


const AdminPage = () => {
  return (
    <div>
        <WhiteListMember />
        <QuitMint />
        <Vote />
        <QuitVote />
    </div>
  )
}

export default AdminPage