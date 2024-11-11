import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePage from './components/Welcome'
import Gethash from './components/Gethash'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from './components/Verify'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <WelcomePage /> */}
    {/* <Gethash /> */}
    {/* <Verify />   */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
        </Route>
        <Route path="/gethash" element={<Gethash />}>
        </Route>
        <Route path="/verify" element={<Verify />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
