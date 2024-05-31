import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import Authetication from './Components/Authentication/Authentication';
import './App.css';

function App() {
  return (
    <div className="">  

    <Routes>
      <Route path="/*" element={true?<HomePage/>:<Authetication/>}>

      </Route>
    </Routes>

    </div>
  );
}

export default App;
