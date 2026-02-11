'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlurText from './ui/BlurText'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

useLayoutEffect(() => {
  const section = sectionRef.current
  const content = contentRef.current
  const path = pathRef.current
  if (!section || !content || !path) return

  const words = content.querySelectorAll('.blur-word')

  
  // =====================
  // PREPARA TEXTO
  // =====================
  gsap.set(words, {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
  })

  // =====================
  // PREPARA SVG DRAW
  // =====================
  const length = path.getTotalLength()

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  })

  // =====================
  // TIMELINE MASTER
  // =====================
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=450%', // 🔥 controla quanto precisa scrollar
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
    },
  })

  // TEXTO APARECE
  tl.to(words, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    stagger: 0.05,
    ease: 'none',
    
  })

  // SVG DESENHA
tl.to(
  path,
  {
    strokeDashoffset: 0,
    ease: 'none',
    duration: 4, // 🔥 aumenta aqui
  },
  '+=0.3'
)

  return () => {
    tl.scrollTrigger?.kill()
    tl.kill()
  }
}, [])

  return (
    <section
      ref={sectionRef}
      className=" min-h-screen w-full bg-white font-semibold z-20 overflow-hidden flex flex-col items-center pb-10"
    >
      
      <h1 className="mt-20 mb-12 text-3xl md:text-6xl font-extrabold font-syne text-secundaria">
        Sobre mim
      </h1>

      <div
        ref={contentRef}
        className="max-w-7xl font-syne text-terciaria justify-center items-center  px-6 "
      >
        <BlurText
          className="text-sm md:text-2xl  "
          paragraphs={[
            'Tenho 18 anos e concluí recentemente o curso Técnico em Informática integrado ao Ensino Médio pela FUNEC Riacho. Estou em busca da minha primeira oportunidade de estágio na área de Tecnologia da Informação para adquirir experiência prática e consolidar minha formação profissional. Possuo experiência no desenvolvimento de projetos com HTML, CSS, JavaScript, React, Tailwind CSS e Python, com foco principal em React e estilização com Tailwind, priorizando componentização, responsividade, organização e boas práticas de código.',
'Busco uma oportunidade para aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e continuar evoluindo tecnicamente, sempre com dedicação, proatividade e vontade constante de crescimento na área de Tecnologia da Informação.Busco uma oportunidade para aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e continuar evoluindo tecnicamente, sempre com dedicação, proatividade e vontade constante de crescimento na área de Tecnologia da Informação.',
          ]}
        />
      </div>

    <div className="w-full  pt-10">
  <svg
    viewBox="0 0 1920 317"
    className="w-full h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    ref={pathRef}
      d="M484 309C476 283.4 422.667 109 408 25H704M-132 185H628V309M890 169C890.628 258.818 736 277 736 277V37C736 37 889.375 79.648 890 169ZM890 169C954.827 215.082 1056 287 1056 287M890 169C945.454 121.356 1042 25 1042 25M890 169C935.301 169 1020 169 1020 169M1098 9V277H1212V211M1970 25H1278V155H1458V277H1258M1212 185V155M628 135V99"
      stroke="#3D94FF"
      strokeWidth="50"
    />
  </svg>
</div>
    </section>
  )
}