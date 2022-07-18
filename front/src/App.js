import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import DetailCollecion from './components/collection/DetailCollecion';
import { PrivateRoute, CommunityWriteRoute, CommunityReadRoute} from './route';
import { Home, Mint, AdminPage, Testpage, 
  Swap, NoPage, NftList, Collection, 
  DifNetwork, Community } from './page'
import CommunityApproval from 'components/vote/CommunityApproval';

const paths = ['/', '/mint', '/test', '/collection',
  '/community', '/community/:id', '/community/read/:type/:id',
  '/write/:id', '/detailcollection/:edition', '*']
  
const elements = [<Home />, <Mint />, <Testpage />, <Collection />, 
  <Community />, <PrivateRoute />, <CommunityReadRoute />,
  <CommunityWriteRoute />, <DetailCollecion />, <NoPage />
]

// asdfnjkasdnfkjnasdkjfn;kasdjn;kjdsan

function App() {
  const {isDeployer} = useSelector(state=>state.main)

  const [isBaobab,setIsBaobab] = useState(false)

  useEffect(()=>{
    if(window.klaytn){
      if(window.klaytn.networkVersion === 1001) setIsBaobab(true)
      else setIsBaobab(false)

      window.klaytn.on('networkChanged', async function(network) {
        if(network === 1001) setIsBaobab(true)
        else setIsBaobab(false)
      })
    }
},[])

  return (
    <>
    <div className='wrapper'>
      <Header />

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
            <Route path="/nftlist" element={<NftList />} />
          </>
          :
          <>
          <Route path='/swap' element={<DifNetwork />}/>
          <Route path='/nftlist' element={<DifNetwork />}/>
          </>
        }
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;