import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomePage from './components/Welcome';
import Gethash from './components/Gethash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Verify from './components/Verify';
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0);
  axios.defaults.baseURL = 'http://localhost:3001';

  return (
    <>
      {/* <WelcomePage /> */}
      {/* <Gethash /> */}
      {/* <Verify />   */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/gethash" element={<Gethash />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
