import React from 'react'
import { Routes, Route, Router } from "react-router-dom"
import Home from "./Pages/Home"
import Acqualife from "./Pages/Acqualife"
import Header from './components/header'
import Healthy from './Pages/Healthy'
import Disaster from './Pages/Disaster'
import Portfolio from './Pages/Portfolio'

const App = () => {
  return (
    <div>

  <Header />

  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Acqualife" element={<Acqualife />} />
      <Route path="/Healthy" element={<Healthy />} />
      <Route path='/Disaster' element={<Disaster />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
      
    </div>
  )
}

export default App

