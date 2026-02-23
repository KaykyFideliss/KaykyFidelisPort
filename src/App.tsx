// App.tsx
"use client"

import { useState, useEffect } from "react"
import Preloader from "./components/Preloader"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/AboutSection"
import Projects from "./components/Projects"
import Gallery from "./components/Gallery"
import Stacks from "./components/frase"
import Footer from "./components/Footer"
import WorkTogether from "./components/WorkTogether"
import HorizontalScroll from "./components/HorizontalScroll"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Opção 1: Timer simples (como você já tem)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // Tempo do preloader + animação de saída

    return () => clearTimeout(timer)
  }, [])


  return (
 <main className="relative min-h-screen bg-blue-400">
  
  {isLoading && <Preloader />}

  <div
    className={`transition-opacity duration-500 ${
      isLoading ? "opacity-0" : "opacity-100"
    }`}
  >
    <Header />

    <div className="relative">
      <HeroSection />
      <AboutSection />
      <Projects />
      <Gallery />
      <Stacks />
      <HorizontalScroll />
      <WorkTogether />
      <Footer />
    </div>
  </div>
</main>
  )
}