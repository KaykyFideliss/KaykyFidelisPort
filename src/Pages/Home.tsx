"use client"
import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "../components/header"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/AboutSection"
import Projects from "../components/Projects"
import Gallery from "../components/Gallery"
import Frase from "../components/frase"
import Stacks from "../components/Stacks"
import Footer from "../components/Footer"
import WorkTogether from "../components/WorkTogether"

import Loader from "../components/ui/Loader"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)

  // Preloader sempre roda ao entrar na Home
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  // Travar / liberar scroll
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto"
  }, [isLoading])

  // Refresh ScrollTrigger depois do loader
  useEffect(() => {
    if (!isLoading) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }
  }, [isLoading])

  useEffect(() => {
  if (!isLoading && location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo)

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }
}, [isLoading, location])

  return (
    <main className="relative min-h-screen bg-blue-400">

      <Loader isReady={!isLoading} />

      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />

        <div className="relative">
          <HeroSection />
          <AboutSection />
          <Projects />
          <div id="galleryy">
          <Gallery />
          </div>
          <Frase />
       <Stacks /> 
          <WorkTogether />
          <Footer />
        </div>
      </div>

    </main>
  )
}