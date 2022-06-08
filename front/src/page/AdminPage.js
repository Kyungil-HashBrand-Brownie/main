import React from 'react'
import QuitMint from '../components/QuitMint'
import QuitVote from '../components/QuitVote'
import EarthVote from '../components/EarthVote'
import WhiteListMember from '../components/WhiteListMember'


const AdminPage = () => {
  return (
    <div>
        <WhiteListMember />
        <QuitMint />
        <EarthVote />
        <QuitVote />
    </div>
  )
}

export default AdminPage