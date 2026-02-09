// App.tsx
"use client"

import { useState, useEffect } from "react"
import Preloader from "./components/Preloader"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/AboutSection"



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
    <main className="min-h-screen bg-blue-400">
      <Preloader />
      
      {/* Conteúdo principal - só aparece depois do preloader */}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <HeroSection />
        <AboutSection />
       
      
      </div>
    </main>
  )
}