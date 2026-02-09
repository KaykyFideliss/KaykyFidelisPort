"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import InteractivePortrait from "./InteractivePortrait"
import SignatureMarqueeSection from "./signature-marquee-section"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  // Sincroniza com o preloader
  useEffect(() => {
    // Espera um pouco mais que o preloader para garantir a transição
    const timer = setTimeout(() => setIsReady(true), 3600)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const scale = useTransform(smoothProgress, [0, 0.4], [1, 0.45])
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])
  const exitY = useTransform(smoothProgress, [0.85, 1], ["0%", "-100%"])
  const exitOpacity = useTransform(smoothProgress, [0.9, 1], [1, 0])

  return (
    <>
      <section ref={containerRef} className="relative h-[300vh] bg-blue-400">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background">
          {/* Background Text Layer */}
          <motion.div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            style={{
             
            }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center opacity-0"
              style={{ opacity: textOpacity }}
            >
              <SignatureMarqueeSection />
            </motion.div>
          </motion.div>

          {/* Foreground Portrait Layer */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center bg-black"
            style={{
              scale: scale,
         
            }}
          >
            {/* Mostra o retrato apenas quando ready */}
            {isReady && <InteractivePortrait />}
          </motion.div>
        </div>
      </section>

     
    </>
  )
}