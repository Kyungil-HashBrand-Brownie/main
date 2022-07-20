import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
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

const paths = ['/test', '/collection',
  '/community', '/community/:id', '/community/read/:type/:id',
  '/write', '/detailcollection/:edition', '*']

const elements = [<Testpage />, <Collection />,
<Community />, <PrivateRoute />, <CommunityReadRoute />,
<VoteWrite />, <DetailCollecion />, <NoPage />
]

const Wrapper = styled.div`
  position: relative;
  min-height: 88vh;

  @media screen and (min-width: 1830px) {
      min-height: 1100px;
  }
`

function App() {
  const { isDeployer } = useSelector(state => state.main)
  const { myAddress } = useSelector(state => state.nft);

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
      <Wrapper>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />

          {myAddress != '' &&
            paths.map((path, index) => <Route key={path} path={path} element={elements[index]} />)
          }
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
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;