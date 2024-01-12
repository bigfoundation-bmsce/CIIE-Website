
import React from 'react'
import Register from './pages/Register/Register'
import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad';

export default function App() {
  return (
    <div className="App">
      <Walkthrough/>
      <Register/>
      {/* <LaunchPad/> */}
    </div>
  )
}
