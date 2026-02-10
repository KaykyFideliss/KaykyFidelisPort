'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlurText from './ui/BlurText'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const words = content.querySelectorAll('.blur-word')

    gsap.set(words, {
      opacity: 0,
      filter: 'blur(10px)',
      y: 40,
    })

   const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
})


    tl.to(
      words,
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        stagger: 0.05,
        ease: 'none',
      },
      0.3
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className=" h-screen w-full bg-white font-semibold z-20 overflow-hidden flex flex-col items-center px-6 pb-10"
    >
      
      <h1 className="mt-20 mb-12 text-3xl md:text-6xl font-extrabold font-syne text-secundaria">
        Sobre mim
      </h1>

      <div
        ref={contentRef}
        className="max-w-7xl text-justify font-syne text-terciaria"
      >
        <BlurText
          className="text-lg md:text-2xl  "
          paragraphs={[
            'Tenho 18 anos e concluí recentemente o curso Técnico em Informática integrado ao Ensino Médio pela FUNEC Riacho. Atualmente, estou em busca da minha primeira oportunidade de estágio na área de Tecnologia da Informação, com o objetivo de adquirir experiência prática e consolidar minha formação profissional como Técnico em Informática.',
            'Sou apaixonado por tecnologia e desenvolvimento de software, com grande interesse em aprender continuamente novas ferramentas, linguagens e boas práticas adotadas pelo mercado. Estou construindo uma base sólida tanto em desenvolvimento Front-end quanto Back-end, com foco em me tornar um desenvolvedor Full Stack.',
            'Possuo experiência no desenvolvimento de projetos utilizando HTML, CSS, JavaScript, React, Tailwind CSS e Python. Tenho aprofundado meus estudos principalmente em React e estilização com Tailwind CSS, com atenção especial à componentização, responsividade, organização e boas práticas de código.',
            'Busco uma oportunidade para aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e continuar evoluindo tecnicamente, sempre com dedicação, proatividade e vontade constante de crescimento na área de Tecnologia da Informação.Busco uma oportunidade para aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e continuar evoluindo tecnicamente, sempre com dedicação, proatividade e vontade constante de crescimento na área de Tecnologia da Informação.',
          ]}
        />
      </div>
    </section>
  )
}