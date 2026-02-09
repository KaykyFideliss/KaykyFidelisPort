"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import InteractivePortrait from "./InteractivePortrait"
import SignatureMarqueeSection from "./signature-marquee-section"

export default function HeroSection({
  onReady,
}: {
  onReady: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  
  /* 🔔 AVISA QUANDO ESTÁ PRONTO */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
      onReady()
    }, 3600)

    return () => clearTimeout(timer)
  }, [onReady])

  /* ===============================
     SCROLL BASE
  =============================== */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  })

  /* ===============================
     TRANSFORMS
  =============================== */

  // retrai o portrait
  const scale = useTransform(smoothProgress, [0, 0.4], [1, 0.45])

  // texto de fundo inicial
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])

 

  return (
    <section
  ref={containerRef}
  className="relative h-[200vh] bg-blue-400"
>
  <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

    <motion.div className="absolute inset-0 z-0 pointer-events-none">
      <SignatureMarqueeSection />
    </motion.div>

    {isReady && (
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center bg-black"
        style={{ scale }}
      >
        <InteractivePortrait />
      </motion.div>
    )}
  </div>
</section>
  )
}
