import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Appointmnet from './components/Appointment'
import Header from './components/Header'
import Treatment from './components/Treatment'
import Teams from './components/Teams'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from './Footer'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  

  return (
    <>
    
     <Header/>
      
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/appointment' element={<Appointmnet/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/treatment' element={<Treatment/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
    <Footer/>
    </>
  )
}

export default App
