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
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,         // 🔥 isso substitui o fixed
        pinSpacing: true,  // 🔥 mantém o fluxo normal
      },
    })

    tl.fromTo(
      section,
      { yPercent: 100 },
      { yPercent: 0, ease: 'none' }
    )

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
      className="relative h-screen w-full bg-white z-20 overflow-hidden flex flex-col items-center px-6 pb-10"
    >
      <h1 className="mt-20 mb-12 text-3xl md:text-6xl font-extrabold font-syne text-secundaria">
        Sobre mim
      </h1>

      <div
        ref={contentRef}
        className="max-w-7xl text-justify font-syne text-terciaria"
      >
        <BlurText
          className="text-lg md:text-2xl leading-relaxed"
          paragraphs={[
            'Tenho 18 anos e concluí recentemente o curso Técnico...',
            'Sou apaixonado por tecnologia e desenvolvimento...',
            'Já desenvolvo projetos utilizando HTML, CSS...',
            'Busco minha primeira oportunidade profissional...',
          ]}
        />
      </div>
    </section>
  )
}