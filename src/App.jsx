import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Education from './Pages/Education'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Home1 from './Pages/Home1'
import About from './Pages/About'
import Skills from './Pages/Skills'


function App() {
  

  return (
    <>
   
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
