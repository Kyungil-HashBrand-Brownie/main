import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './page/HomPage';
import Mint from './page/Mint';
import Header from './components/Header';
import WhiteList from './page/WhiteList';
import MintPage from './page/MintPage';
import AdminPage from './page/AdminPage';

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/mint" element={<Mint/>} /> 
          <Route path="/whitelist" element={<WhiteList/>} /> 
          <Route path="/admin" element={<AdminPage/>} /> 
        </Routes>
    </>
  );
}

export default App;