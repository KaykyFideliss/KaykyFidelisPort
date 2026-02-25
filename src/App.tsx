"use client"

import { useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Timer do preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  // 🔥 Travar / liberar scroll
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto"
  }, [isLoading])

  // 🔥 Refresh GSAP após loading
  useEffect(() => {
    if (!isLoading) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }
  }, [isLoading])

  return (
    <main className="relative min-h-screen bg-blue-400">

      {isLoading && <Preloader />}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
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