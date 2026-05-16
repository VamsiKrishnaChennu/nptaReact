import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Game from './components/Game';
import Mode from './components/Mode';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>

      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/mode' element={<Mode />} />
      <Route path='/game' element={<Game/>}/>

     </Routes>    
     </BrowserRouter>

    </>
  )
}

export default App
