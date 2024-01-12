import Home from './Components/Home';
import React from 'react'
import Register from './pages/Register/Register'
import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad/LaunchPad';
import Team  from './pages/Team/Team';
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/team' element={<Team/>}/>
          <Route path='/walkthrough' element={<Walkthrough/>}/>
          <Route path='/LaunchPad' element={<LaunchPad/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
