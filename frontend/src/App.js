import Home from './Components/Home';
import React from 'react'
import Register from './pages/Register/Register'
import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad/LaunchPad';
import Contact from './pages/Contact/Contact';
import Team  from './pages/Team/Team';
import Devwing from './pages/Devwing/Devwing';
import About from './pages/About/About';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Devwing from './pages/Devwing/Devwing';
export default function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>

          <Route path='/' element={<Home/>} exact />
          <Route path='/team' element={<Team/>}/>
          {/* <Route path='/contact' element={<Contact/>}/> */}
          {/* <Route path='/LaunchPad' element={<LaunchPad/>}/> */}
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/Devwing' element={<Devwing/>}/> */}

        </Routes>
        <Footer/>
    </div>

  )
}
