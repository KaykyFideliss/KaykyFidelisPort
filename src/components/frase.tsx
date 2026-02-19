"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { FaReact, FaJs,FaJava  } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)

export default function Stacks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".word", {
        y: -80,
        opacity: 0,
        filter: "blur(12px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4">
        
        <h1 className="word text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-syne font-extrabold text-[#0978ff] text-center">
          SEMPRE
        </h1>

        <h1 className="word text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-syne font-extrabold text-primaria text-center">
          CONECTADO AO FUTURO
        </h1>

        <h1 className="word text-3xl  sm:text-5xl md:text-6xl lg:text-7xl 
                       font-syne font-extrabold text-[#68acff] text-center">
          MOTIVADO PELA INOVAÇÃO
        </h1>
         <h1 className="word text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-syne font-extrabold text-[#8cbefc] text-center">
          E
        </h1>

        <h1 className="word text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-syne font-extrabold text-[#b1d2fa] text-center">
          MOVIDO POR TECNOLOGIA
        </h1>
        <div className="flex gap-5 word">
          <FaJs  className="w-10 h-10 text-[#8cbefc] " />
        <FaReact className="w-10 h-10 text-[#8cbefc] " />
         <FaJava  className="w-10 h-10 text-[#8cbefc] " />
  </div>
      </div>
      
    </section>
   
    </div>
  )
}
