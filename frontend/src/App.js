import Home from './Components/Home';
import React from 'react'
import Register from './pages/Register/Register'
import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad/LaunchPad';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team';
import Devwing from './pages/Devwing/Devwing';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      {/*<Home />
      <Walkthrough/>
      <Contact/>
      <Register/>
      <LaunchPad/>
      <Team/>
  <Devwing/>*/}


 
  <Header />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/walkthrough' element={<Walkthrough />} />
          <Route path='/LaunchPad' element={<LaunchPad />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Devwing' element={<Devwing />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer/>

    </div>
  )
}
