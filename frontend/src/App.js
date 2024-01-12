import Home from './Components/Home';
import React from 'react'
import Register from './pages/Register/Register'
import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad/LaunchPad';
import Team  from './pages/Team/Team';
export default function App() {
  return (
    <div className="App">
      <Home />
      <Walkthrough/>
      <Register/>
      <LaunchPad/>
       <Team/>
    </div>
  )
}
