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
    const scrollLength = wrapper.scrollWidth - window.innerWidth;

    // HORIZONTAL SCROLL
const horizontalTween = gsap.to(wrapper, {
  x: -scrollLength,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${scrollLength}`,
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
  },
});


    // PATH
    const path = svg.querySelector("#mainPath") as SVGPathElement;
    if (!path) return;

    const length = path.getTotalLength();


gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: -length,
});

gsap.to(path, {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${scrollLength}`,
    scrub: true,
  },
});

windElements.forEach((el, i) => {
  const distance = 50 + i * 30;
  gsap.fromTo(
    el,
    {
      x: 0,
      skewX: 0,
      opacity: 1,
       filter: "blur(0px)",
    },
    {
      x: 0,
      skewX: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        containerAnimation: horizontalTween,
        trigger: el,
        start: "left 80%",
        end: "left 40%",
        scrub: true,
      },
    }
  );
});

  }, section);

  return () => ctx.revert();
}, []);

return (
    <>
      {/* Horizontal Section */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div ref={wrapperRef} className="flex h-full relative" >
          {/*  tela 1 */}
          <div className="w-[200vw] h-screen shrink-0 flex bg-white ">
            <div className="relative w-full h-screen shrink-0 flex bg-white">
              {/* Primeiro título */}
              <div className="fixed top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
                <h1 className="font-syne text-center md:text-left text-primaria text-4xl md:text-5xl lg:text-7xl font-extrabold  drop-shadow-2xl">
                  Futuro Dev FrontEnd
                </h1>
              </div>

              {/* Segundo título no final dos 200vw */}
              <div className="absolute left-[100vw] top-40 md:top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
                <h1 className=" wind-effect font-syne text-terciaria text-4xl md:text-5xl lg:text-7xl font-extrabold">
                  Conhecendo novas tecnologias
                </h1>
              </div>
            </div>
 <div className="absolute top-96 md:top-0 -translate-y-1/2 left-20   w-[550vw] pointer-events-none z-10">

<svg
  ref={svgRef}
  viewBox="0 0 6065 1075"
 
  className="h-auto block w-full z-10"
  fill="none"
>
    <path
      id="mainPath"
      d="M5914.04 150.034C5914.04 150.034 5589.49 821.575 5258.04 858.034C4858.04 902.034 4866.04 534.034 4398.04 534.034C3700.89 534.034 3894.04 878.034 3210.04 922.034C2627 959.54 2585.96 558.688 2002.04 578.034C1497.29 594.757 1488.54 705.753 998.04 826.034C507.542 946.316 150.04 806.034 150.04 806.034"
      stroke="#0088E8"

      strokeWidth="100"
      strokeLinecap="round"
      filter="url(#glow)"
    />
  </svg>
</div>

            {/* texto descrição */}
            <div className="absolute bottom-0 right-0 z-20 w-full md:w-[40rem] lg:w-[60rem] p-10 flex justify-end">
              <p className=" wind-effect text-justify font-syne font-bold  text-base md:text-lg lg:text-3xl p-3   text-terciaria ">
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
            <div className="absolute bottom-0 left-20 p-10 w-80 text-left">
              <h2 className="text-xl font-syne wind-effect font-extrabold text-primaria pb-5">
                PROJETOS REALIZADOS
              </h2>
              <p className="font-syne z-20 wind-effect ">
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
    className={`absolute z-20 wind-effect  ${item.position === "top" ? "top-24" : "bottom-24"} w-80`}
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
    className="text-4xl lg:text-9xl wind-effect font-syne font-extrabold text-terciaria z-20 whitespace-nowrap"
  >
    Sempre utilizando designs modernos
  </h1>
</div>
          </div>

{/* TELA 3 */}
<div className="w-[120vw] h-screen shrink-0 bg-white flex items-center justify-center px-6">

  <div className="text-center flex flex-col items-center gap-6 text-terciaria">

    

      <h1 className="text-xl  z-20 md:text-6xl font-syne font-extrabold  ">TUDO</h1>
    <h1  className="text-xl  z-20 md:text-6xl font-syne font-extrabold  ">QUE VOCÊ</h1>
    <h1  className="text-xl  z-20 md:text-6xl font-syne font-extrabold  ">PRECISA</h1>
  </div>

</div>
        </div>
      </section>

      {/* Next Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-4xl font-bold">Próxima Section</h2>
      </section>
    </>
  );
}
