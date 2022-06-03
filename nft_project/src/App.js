import './App.css';
import { Routes , Route} from 'react-router-dom';
import HomPage from './page/HomPage';
import Mint from './page/Mint';

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
