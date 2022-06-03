import './App.css';
import { Routes , Route} from 'react-router-dom';
import HomPage from './page/HomPage';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import Mint from './components/MintCard';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mint/>} /> 
        </Routes>
    </div>
  );
}

export default App;
