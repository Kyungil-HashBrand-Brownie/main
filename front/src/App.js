import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import DetailCollecion from './components/collection/DetailCollecion';
import { PrivateRoute, CommunityReadRoute } from './route';
import {
  Home, Mint, AdminPage, Testpage,
  Swap, NoPage, Staking, Collection,
  DifNetwork, Community, VoteWrite
} from './page'
import CommunityApproval from 'components/vote/CommunityApproval';

const paths = ['/', '/mint', '/test', '/collection',
  '/community', '/community/:id', '/community/read/:type/:id',
  '/write', '/detailcollection/:edition', '*']

const elements = [<Home />, <Mint />, <Testpage />, <Collection />,
<Community />, <PrivateRoute />, <CommunityReadRoute />,
<VoteWrite />, <DetailCollecion />, <NoPage />
]

function App() {
  const { isDeployer } = useSelector(state => state.main)

  const [isBaobab, setIsBaobab] = useState(false)

  useEffect(() => {
    if (window.klaytn) {
      if (window.klaytn.networkVersion === 1001) setIsBaobab(true)
      else setIsBaobab(false)

      window.klaytn.on('networkChanged', async function (network) {
        if (network === 1001) setIsBaobab(true)
        else setIsBaobab(false)
      })
    }
  }, [])

  return (
    <>
      <Header />

      <div className='wrapper'>
        <Routes>
          {paths.map((path, index) => <Route key={path} path={path} element={elements[index]} />)}
          {
            isBaobab
              ?
              <>
                {isDeployer
                  ?
                  <>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/community/approval/:id" element={<CommunityApproval />} />
                  </>
                  : null
                }
                <Route path="/swap" element={<Swap />} />
                <Route path="/staking" element={<Staking />} />
              </>
              :
              <>
                <Route path='/swap' element={<DifNetwork />} />
                <Route path='/staking' element={<DifNetwork />} />
              </>
          }
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;