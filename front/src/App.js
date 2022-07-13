import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/HomePage';
import Mint from './page/Mint';
import Header from './components/Header';
import Footer from './components/Footer'
import AdminPage from './page/AdminPage';
import Testpage from './page/Testpage';
import { useDispatch, useSelector } from 'react-redux';
import Swap from './page/Swap';
import NftList from './page/NftList';
import NoPage from 'page/NoPage';
import Collection from 'page/Collection';
import Voting from 'page/Voting';
import DetailCollecion from 'components/collection/DetailCollecion';
import Community from 'page/Community';
import VoteDetail from 'components/vote/VoteDetail';
import PrivateRoute from 'route/PrivateRoute';
import CommunityWriteRoute from 'route/CommunityWriteRoute';
import DifNetwork from 'page/DifNetwork';
import CommunityRead from 'components/vote/CommunityRead';
import CommunityReadRoute from 'route/CommunityReadRoute';
import CommunityApproval from 'components/vote/CommunityApproval';

function App() {
  const {isDeployer} = useSelector(state=>state.nft)

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
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/test" element={<Testpage />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/voting' element={<Voting />} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/:id' element={<PrivateRoute />} />
        <Route path='/community/read/:type/:id' element={<CommunityReadRoute />} />
        <Route path='/write/:id' element={<CommunityWriteRoute />} />
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
        {/* <Route path="/whitelist" element={<WhiteList/>} />  */}
        <Route path='/detailcollection/:edition' element={<DetailCollecion />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;