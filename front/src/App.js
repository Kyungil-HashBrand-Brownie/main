import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './page/HomePage';
import Mint from './page/Mint';
import Header from './components/Header';
import Footer from './components/Footer'
import WhiteList from './page/WhiteList';
import AdminPage from './page/AdminPage';
import Testpage from './page/Testpage';
import { useDispatch } from 'react-redux';
import contractAbi from "./abi.json";
import LeftImg3 from './img/chocolate/choco3.png';
import RightImg from './img/chocolate/choco4.png';
import Swap from './page/Swap';
import NftList from './page/NftList';

function App() {
  const dispatch = useDispatch();


  const setReducer = async () => {
    let brownieContract = new window.caver.klay.Contract(contractAbi.output.abi ,"0xB965D7Ba9814BaF32EE004c165288365BA65eCb5");
    dispatch({type: "CONTRACT_SUCCESS", payload: brownieContract});

    // 토큰 인스턴스 주소
    const btkInstanceAddr = await brownieContract.methods.viewIns().call()
    let btkInstance = window.caver.kct.kip7.create(btkInstanceAddr)
    dispatch({type: "BTK_INSTANCE", payload: btkInstance});
  }

  useEffect(() => { 
   setReducer()
  }, [])

  return (
    <>
        <Header />
        <img 
          className='backG-left-img'
          src={LeftImg3}
        />
        {/* <img 
          className='backG-right-img'
          src={RightImg}
        /> */}
        <img 
          className='backG-right-img2'
          src={RightImg}
        />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/mint" element={<Mint/>} /> 
          {/* <Route path="/whitelist" element={<WhiteList/>} />  */}
          <Route path="/admin" element={<AdminPage/>} /> 
          <Route path="/test" element={<Testpage/>} /> 
          <Route path="/swap" element={<Swap/>} /> 
          <Route path="/nftlist" element={<NftList/>} /> 
        </Routes>
        <Footer />
      </>
    );
}

export default App;