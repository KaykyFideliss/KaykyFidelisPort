"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const windElements = gsap.utils.toArray<HTMLElement>(
    ".wind-effect"
  );
useLayoutEffect(() => {
  const section = sectionRef.current;
  const wrapper = wrapperRef.current;
  const svg = svgRef.current;

  if (!section || !wrapper || !svg) return;

  const ctx = gsap.context(() => {

    // ✅ DECLARE PRIMEIRO
    const getScrollLength = () =>
      wrapper.scrollWidth - document.documentElement.clientWidth;

    // 🔹 HORIZONTAL
    const horizontalTween = gsap.to(wrapper, {
      x: () => -getScrollLength(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollLength()}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        
      },
    });

    // 🔹 SVG
    const path = svg.querySelector("#mainPath") as SVGPathElement;

    if (path) {
      const length = path.getTotalLength();

   gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length, // começa escondido
});



      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollLength()}`,
          scrub: true,
        },
      });
    }

    // 🔹 PARALLAX
    const windElements = gsap.utils.toArray<HTMLElement>(".wind-effect");

    windElements.forEach((el, i) => {
      const depth = 150 + i * 40;

      gsap.fromTo(
        el,
        { x: 0, y: 75 },
        {
          x: -depth,
          y: 0,
          ease: "none",
          scrollTrigger: {
            containerAnimation: horizontalTween,
            trigger: el,
            start: "left 100%",
            end: "left -20%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.config({
      ignoreMobileResize: true,
      
    });

  }, section);

  return () => ctx.revert();
}, []);

  return (
    <>
      {/* Horizontal Section */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden bg-white"
      >
        <div ref={wrapperRef} className="flex h-full relative" >
          {/*  tela 1 */}
          <div className="w-[200vw] h-screen shrink-0 flex bg-white ">
            <div className="relative w-full h-screen shrink-0 flex bg-white">
              {/* Primeiro título */}
              <div className="absolute top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
                <h1 className="font-syne text-center md:text-left text-primaria text-4xl md:text-5xl lg:text-7xl font-extrabold  drop-shadow-2xl">
                  Futuro Dev FrontEnd
                </h1>
              </div>

              {/* Segundo título no final dos 200vw */}
              <div className="absolute left-[100vw] top-40 md:top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
                <h1 className="  font-syne text-terciaria text-4xl md:text-5xl lg:text-7xl font-extrabold">
                  Conhecendo novas tecnologias
                </h1>
              </div>
            </div>
            <div className="absolute top-96 md:top-0 -translate-y-1/2 left-40 md:-left-60   w-[550vw] pointer-events-none z-10">

             <svg
  ref={svgRef}
  viewBox="0 0 6065 1075"
  preserveAspectRatio="xMidYMid meet"
  className="block h-auto "
  
  fill="none"
>






  <path
   id="mainPath"
    d="M150.04 806.034C150.04 806.034 507.542 946.316 998.04 826.034C1488.54 705.753 1497.29 594.757 2002.04 578.034C2585.96 558.688 2627 959.54 3210.04 922.034C3894.04 878.034 3700.89 534.034 4398.04 534.034C4866.04 534.034 4858.04 902.034 5258.04 858.034C5589.49 821.575 5914.04 150.034 5914.04 150.034"
    stroke="#0088E8"
    stroke-width="200"
    stroke-linecap="round"
  />

              </svg>
            </div>

            {/* texto descrição */}
            <div className="absolute bottom-0 right-0 z-20 w-full md:w-[40rem] lg:w-[60rem] p-10 flex justify-end">
              <p className="  text-justify font-syne font-bold  text-base md:text-lg lg:text-3xl p-3   text-terciaria ">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                consequatur? Laudantium rem ad quos at, quasi enim saepe rerum
                eius eligendi officiis ratione voluptate maxime dolorum labore
                inventore doloribus iste?
              </p>
            </div>
          </div>


          {/* TELA 2 */}
          <div
            ref={screen2Ref}
            className="relative min-w-[250vw] h-screen shrink-0 bg-white"
          >
            <div className="absolute bottom-10 left-20 p-10 w-80 text-left">
              <h2 className="text-xl font-syne  font-extrabold text-primaria pb-5">
                PROJETOS REALIZADOS
              </h2>
              <p className="font-syne z-20  ">
                Unique corporate websites
                Smart open source CMS.
                E-commerce solutions
                Web app development
              </p>
            </div>

            {/* CARDS DE TEXTO DIFERENTES */}
            {[
              {
                left: "60vw",
                title: "LANDING PAGE",
                text: "Criação de landing pages focadas em conversão, design intuitivo e experiência do usuário eficiente.",
                position: "top",
              },
              {
                left: "95vw",
                title: "E-COMMERCE",
                text: "Plataformas completas com checkout otimizado e integração de pagamentos.",
                position: "bottom",
              },
              {
                left: "130vw",
                title: "APLICAÇÕES WEB",
                text: "Aplicações escaláveis utilizando tecnologias modernas do mercado.",
                position: "top",
              },
              {
                left: "165vw",
                title: "UI/UX DESIGN",
                text: "Interfaces intuitivas com foco total na experiência do usuário.",
                position: "bottom",
              },
              {
                left: "200vw",
                title: "CRIAÇÃO DE SISTEMAS",
                text: "Otimização avançada para garantir velocidade e posicionamento.",
                position: "top",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`absolute z-20   ${item.position === "top" ? "top-24" : "bottom-24"} w-80`}
                style={{ left: item.left }}
              >
                <div

                  className="p-8 will-change-transform"
                >
                  <h2 className="text-xl font-syne text-start font-extrabold text-primaria pb-5 ">
                    {item.title}
                  </h2>
                  <p className="font-syne text-start ">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}
            {/* TEXTO GRANDE */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                ref={bigTextRef}
                className="text-4xl lg:text-9xl  font-syne font-extrabold text-terciaria z-20 whitespace-nowrap"
              >
                Sempre utilizando designs modernos
              </h1>
            </div>
          </div>

          {/* TELA 3 */}
          <div className="w-[120vw] h-screen shrink-0 bg-white flex items-center justify-center">
 <div className="flex flex-col items-center justify-center text-center gap-6  ml-56 md:ml-96 text-terciaria w-full z-20">

    <h1 className="text-2xl md:text-6xl font-syne font-extrabold">
      TUDO
    </h1>
    <h1 className="text-2xl md:text-6xl font-syne font-extrabold">
      QUE VOCÊ
    </h1>
    <h1 className="text-2xl md:text-6xl font-syne font-extrabold">
      PRECISA
    </h1>
  </div>
</div>

        </div>
      </section>


    </>
  );
}
