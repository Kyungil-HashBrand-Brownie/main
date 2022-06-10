import React from 'react'
import QuitMint from '../components/QuitMint'
import QuitVote from '../components/QuitVote'
import EarthVote from '../components/EarthVote'
import WhiteListMember from '../components/WhiteListMember'
import { useState } from 'react'


const AdminPage = () => {
  const [click, setClick] = useState(0);

  const click1 = (item) => {
    setClick(item)
  }

  return (
      <div>
        <button onClick={()=>click1(0)}>화이트키</button>
        <button onClick={()=>click1(1)}>mint</button>

        {
          click == 0 ? <WhiteListMember /> : <QuitMint /> 
        }

          {/* <EarthVote /> */}
          {/* <QuitVote /> */}
      </div>
  )
}

export default AdminPage;