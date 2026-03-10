import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./Pages/Home"
import Acqualife from "./Pages/Acqualife"
import Healthy from "./Pages/Healthy"
import Disaster from "./Pages/Disaster"
import Portfolio from "./Pages/Portfolio"

import Header from "./components/header"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {

  const location = useLocation()

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Header />

          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Acqualife" element={<Acqualife />} />
            <Route path="/Healthy" element={<Healthy />} />
            <Route path="/Disaster" element={<Disaster />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </AnimatePresence>
    </>
  )
}

export default App