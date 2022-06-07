import './App.css';
import { Routes , Route} from 'react-router-dom';
import HomPage from './page/HomPage';
import Mint from './page/Mint';
import Header from './components/Header';
import WhiteList from './page/WhiteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MintPage from './page/MintPage';
import AdminPage from './page/AdminPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomPage/>} /> 
          <Route path="/mint" element={<Mint/>} /> 
          <Route path="/whitelist" element={<WhiteList/>} /> 
          <Route path="/admin" element={<AdminPage/>} /> 
        </Routes>
    </div>
  );
}

export default App;