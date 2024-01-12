import React from 'react'
import Register from './Components/Register/Register'
import Walkthrough from './Components/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad';
import Team from './Components/Team';

export default function App() {
  return (
    <div className="App">
      <Walkthrough/>
      <Register/>
      <LaunchPad/>
       <Team/>
    </div>
  )
}
