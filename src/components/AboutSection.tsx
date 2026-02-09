'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  
  useLayoutEffect(() => {
    const section = sectionRef.current
    const path = pathRef.current
    const text = textRef.current

  
    if (!section || !path || !text) return

    /* ================= SVG DRAW ================= */
    const length = path.getTotalLength()

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5,
      },
    })

    /* ================= TEXT POP ================= */
    gsap.fromTo(
      text,
      {
        y: 0,
        scale: 0.95,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

 /* ================= OVERLAY ENTRANDO ================= */
gsap.fromTo(
  section,
  {
    yPercent: 100, // começa fora da tela
  },
  {
    yPercent: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
    },
  }
)


    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section
  ref={sectionRef}
  className="
    relative h-screen w-full
    overflow-hidden bg-white
    flex items-center justify-center
    rounded-3xl
    z-10
  "
>
  

     
      {/* <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 2039 1177"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M1908.16 72.4502C1908.16 72.4502 2046.16 284.95 2028.66 281.95C2011.16 278.95 1720.66 109.45 1706.66 109.45C1692.66 109.45 2025.34 530.643 2028.66 540.45C2031.97 550.257 1290.01 68.4338 1341.66 109.45C1341.66 109.45 2093.16 815.95 2084.66 826.45C2076.16 836.95 938.655 28.4502 941.155 50.4502C943.655 72.4502 2084.66 1128.45 2084.66 1148.45C2084.66 1168.45 623.655 86.4502 620.655 97.9502C617.655 109.45 1893.66 1228.95 1885.16 1240.45C1876.66 1251.95 333.155 87.9502 327.155 97.9502C321.155 107.95 1550.16 1223.45 1541.66 1240.45C1533.16 1257.45 98.655 109.45 80.155 119.45C61.655 129.45 1224.16 1227.45 1214.16 1240.45C1204.16 1253.45 80.155 426.95 62.655 432.95C45.155 438.95 952.655 1240.45 943.655 1256.45C934.655 1272.45 62.655 682.95 50.155 694.45C37.655 705.95 662.155 1343.95 649.155 1353.95C636.155 1363.95 129.155 1057.95 129.155 1057.95"
          stroke="#3D94FF"
          strokeWidth="100"
          strokeLinecap="round"
        />
      </svg> */}

      {/* ================= CONTEÚDO ================= */}
  <div>


    
  </div>
      

    
    </section>
  )
}
