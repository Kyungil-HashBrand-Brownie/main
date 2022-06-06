import './App.css';
import { Routes , Route} from 'react-router-dom';
import HomPage from './page/HomPage';
import Mint from './page/Mint';
import Header from './components/Header';
import WhiteList from './page/WhiteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MintPage from './page/MintPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/mint" element={<Mint/>} /> 
          <Route path="/whitelist" element={<WhiteList/>} /> 
        </Routes>
    </div>
  );
}

export default App;
