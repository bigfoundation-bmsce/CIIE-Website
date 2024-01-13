import Home from './Components/Home';
import React from 'react'
import Register from './pages/Register/Register'
import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad/LaunchPad';
import Team  from './pages/Team/Team';
import Devwing from './pages/Devwing/Devwing';
import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Walkthrough/> */}
      {/* <Register/> */}
      {/* <LaunchPad/> */}
      {/* <Team/> */}
      {/* <BrowserRouter> */}
      <Devwing/>
      <Team/>
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<Home/>} exact /> */}
          {/* <Route path='/team' element={<Team/>}/> */}
          {/* <Route path='/walkthrough' element={<Walkthrough/>}/> */}
          {/* <Route path='/LaunchPad' element={<LaunchPad/>}/> */}
          {/* <Route path='/register' element={<Register/>}/> */}
          {/* <Route path='/Devwing' element={<Devwing/>}/> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
        {/* </Routes> */}
       {/* </BrowserRouter> */}
    </div>
  )
}
