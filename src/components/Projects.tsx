"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

useLayoutEffect(() => {
  const section = sectionRef.current
  const wrapper = wrapperRef.current
  const svg = svgRef.current

  if (!section || !wrapper || !svg) return

  const ctx = gsap.context(() => {
    const scrollLength = wrapper.scrollWidth - window.innerWidth
    const firstScreenWidth = window.innerWidth

    // 🔹 Horizontal scroll normal (continua até o final)
    gsap.to(wrapper, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // 🔹 IMAGEM gira só durante a tela 1
    gsap.fromTo(
      svg,
      { rotation: 0 },
      {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "top -100%", // só 1 viewport
          scrub: true,
        },
      }
    )

    // 🔹 IMAGEM anda só durante a tela 1
    gsap.to(svg, {
      x: firstScreenWidth, // move só 1 tela
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "top -100%", // para ao fim da tela 1
        scrub: true,
      },
    })

  }, section)

  return () => ctx.revert()
}, [])

  return (  
    <>
      {/* Horizontal Section */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div
          ref={wrapperRef}
          className="flex h-full"
        >
          {/*  tela 1 */}
          <div className="min-w-[100vw] h-screen shrink-0 flex bg-white ">
            <div className="justify-center flex-col  items-start fixed top-20 w-full md:top-20 px-10 lg:top-96 lg:left-1 flex lg:w-1/2 z-20">
            <h1 className="font-syne text-3xl md:text-5xl lg:text-7xl font-extrabold "> We specialize in customer happiness.</h1>
            
            </div>
<div className="absolute -left-[35vw] -translate-y-1/2 z-10">
  <img
    ref={svgRef}
    src="/images/circle.png"
    className="w-[1000px] will-change-transform"
    style={{ transformOrigin: "50% 50%" }}
    alt=""
  />
</div>



             <div className=" z-20 items-end flex w-96 md:w-[40rem] p-10">
              <p className="text-justify font-syne font-bold  text-base md:text-lg lg:text-xl "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, consequatur? Laudantium rem ad quos at, quasi enim saepe rerum eius eligendi officiis ratione voluptate maxime dolorum labore inventore doloribus iste?</p>
            </div>
            
          </div>
{/*  tela 2 */}
          <div className="min-w-[100vw] h-screen shrink-0 bg-gray-200 flex items-center justify-center">
            <h2 className="text-4xl font-bold">02</h2>
          </div>
{/*  tela 3 */}
          <div className="min-w-[100vw] h-screen shrink-0 bg-gray-400 flex items-center justify-center">
            <h2 className="text-4xl font-bold">03</h2>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-4xl font-bold">Próxima Section</h2>
      </section>
    </>
  )
}