import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Acqualife from "./Pages/Acqualife"
import Header from './components/header'
import Healthy from './Pages/Healthy'
const App = () => {
  return (
    <div>

  <Header />

  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Acqualife" element={<Acqualife />} />
      <Route path="/Healthy" element={<Healthy />} />
    </Routes>
      
    </div>
  )
}

export default App

