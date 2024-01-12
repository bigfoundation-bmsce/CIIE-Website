
import React from 'react'
import Register from './components/Register/Register'
import Walkthrough from './components/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad';
import {Team} from './pages/Team.js'
export default function App() {
  return (
    <div className="App">
      <Walkthrough/>
      <Register/>
      <LaunchPad/>
      <Team />
    </div>
  )
}
