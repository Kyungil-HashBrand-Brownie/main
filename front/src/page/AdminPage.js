import React from 'react'
import QuitMint from '../components/QuitMint'
import QuitVote from '../components/QuitVote'
import EarthVote from '../components/EarthVote'
import WhiteListMember from '../components/WhiteListMember'
import { useState } from 'react'


const AdminPage = () => {
  const [click, setClick] = useState(false);

  const click1 = () => {
    setClick(!click)
  }

  return (
      <div>
        <button onClick={click1}>화이트키</button>
        <button onClick={click1}>mint</button>

        {
          !click ? <WhiteListMember /> : <QuitMint /> 
        }

          {/* <EarthVote /> */}
          {/* <QuitVote /> */}
      </div>
  )
}

export default AdminPage;