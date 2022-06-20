import React from 'react'
import QuitMint from '../components/QuitMint'
import QuitVote from '../components/QuitVote'
import EarthVote from '../components/EarthVote'
import WhiteListMember from '../components/WhiteListMember'
import { useState } from 'react'
// import QuitVote from '../components/QuitVote'


const AdminPage = () => {
  const [click, setClick] = useState(0);

  const click1 = (item) => {
    setClick(item)
  }

  return (
      <div >
        <button className='admin-outer-box' onClick={()=>click1(0)}>화이트키</button>
        <button className='admin-outer-box' onClick={()=>click1(1)}>mint</button>
        <button className='admin-outer-box' onClick={()=>click1(2)}>자선단체 </button>

        {
          click == 0 ? <WhiteListMember /> : click == 1 ? <QuitMint /> : <QuitVote/>
        }

          {/* <EarthVote /> */}
          {/* <QuitVote /> */}
      </div>
  )
}

export default AdminPage;