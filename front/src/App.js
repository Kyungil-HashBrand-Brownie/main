import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/HomePage';
import Mint from './page/Mint';
import Header from './components/Header';
import Footer from './components/Footer'
import AdminPage from './page/AdminPage';
import Testpage from './page/Testpage';
import { useDispatch, useSelector } from 'react-redux';
import LeftImg3 from './img/chocolate/choco3.png';
import RightImg from './img/chocolate/choco4.png';
import Swap from './page/Swap';
import NftList from './page/NftList';

function App() {
  const {isDeployer} = useSelector(state=>state.nft)
  return (
    <>
    <div className='wrapper'>
      <Header />
      {/* <img
        className='backG-left-img'
        src={LeftImg3}
      /> */}
      {/* <img 
          className='backG-right-img'
          src={RightImg}
        /> */}
      {/* <img
        className='backG-right-img2'
        src={RightImg}
      /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        {/* <Route path="/whitelist" element={<WhiteList/>} />  */}
        {isDeployer
        ?
        <Route path="/admin" element={<AdminPage />} />
        : null
        }
        <Route path="/test" element={<Testpage />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/nftlist" element={<NftList />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;