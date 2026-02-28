import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Acqualife from "./Pages/Acqualife"

const App = () => {
  return (
    <div>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Acqualife" element={<Acqualife />} />
    </Routes>
      
    </div>
  )
}

export default App

