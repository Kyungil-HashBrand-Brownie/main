import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './page/HomPage';
import Mint from './page/Mint';
import Header from './components/Header';
import Footer from './components/Footer'
import WhiteList from './page/WhiteList';
import AdminPage from './page/AdminPage';
import Testpage from './page/Testpage';
import { useDispatch } from 'react-redux';
import contractAbi from "./abi.json";


function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
    let myContract = new window.caver.klay.Contract(contractAbi.output.abi ,"0xe17fafe9ffbacce005f271216e764d86ff1e7bc3");
    dispatch({type: "CONTRACT_SUCCESS", payload: myContract});
  }, [])
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/mint" element={<Mint/>} /> 
          {/* <Route path="/whitelist" element={<WhiteList/>} />  */}
          <Route path="/admin" element={<AdminPage/>} /> 
          <Route path="/test" element={<Testpage/>} /> 
        </Routes>
        <Footer />
      </>
    );
}

export default App;