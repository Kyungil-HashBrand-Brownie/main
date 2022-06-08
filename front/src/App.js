import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './page/HomPage';
import Mint from './page/Mint';
import Header from './components/Header';
import WhiteList from './page/WhiteList';
import AdminPage from './page/AdminPage';
import Testpage from './page/Testpage';

function App() {
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
    </>
  );
}

export default App;