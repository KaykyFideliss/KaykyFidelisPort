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
       {/* tela 1 */}
<div className="w-[200vw] h-screen shrink-0 flex bg-white">

  {/* PRIMEIRA PARTE */}
<section className="relative w-screen h-screen shrink-0 grid grid-cols-2 grid-rows-2 bg-white overflow-hidden">

  {/* 🔵 SVG path gigante (fundo) */}
  <div className="absolute top-96 md:top-0 -translate-y-1/2 left-40 md:-left-60 w-[550vw] pointer-events-none z-10">
    <svg
      ref={svgRef}
      viewBox="0 0 6065 1075"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto"
      fill="none"
    >
      <path
        id="mainPath"
        d="M150.04 806.034C150.04 806.034 507.542 946.316 998.04 826.034C1488.54 705.753 1497.29 594.757 2002.04 578.034C2585.96 558.688 2627 959.54 3210.04 922.034C3894.04 878.034 3700.89 534.034 4398.04 534.034C4866.04 534.034 4858.04 902.034 5258.04 858.034C5589.49 821.575 5914.04 150.034 5914.04 150.034"
        stroke="#0088E8"
        strokeWidth="200"
        strokeLinecap="round"
      />
    </svg>
  </div>

  {/* 🟣 CANTO SUPERIOR ESQUERDO — Título */}
  <div className="flex items-start p-10 z-20">
    <h1 className="font-syne text-primaria text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
      Futuro Dev <br /> FrontEnd
    </h1>
  </div>

  {/* ✨ CANTO SUPERIOR DIREITO — Texto complementar */}
  <div className="flex items-start p-10 z-20">
    <p className="font-syne text-lg md:text-xl lg:text-2xl text-secundaria max-w-md">
      Criando experiências digitais modernas, fluidas e centradas no usuário.
    </p>
  </div>

  {/* 🔥 CANTO INFERIOR ESQUERDO — Badge / Destaque */}
  <div className="flex items-end p-10 z-20">
    <div className="bg-primaria text-white px-6 py-3 rounded-2xl font-syne text-lg shadow-lg">
      🚀 Foco em UI / UX
    </div>
  </div>

  {/* 🧾 CANTO INFERIOR DIREITO — Texto */}
  <div className="flex items-end justify-end p-10 z-20">
    <p className="text-justify font-syne font-bold text-base md:text-lg lg:text-3xl text-terciaria max-w-2xl">
      Sou um desenvolvedor Frontend focado em criar interfaces modernas,
      responsivas e altamente performáticas. Transformo ideias em experiências
      digitais intuitivas, combinando design estratégico, animações fluidas e
      código limpo.

      Tenho especial atenção à usabilidade, acessibilidade e aos detalhes que
      elevam a experiência do usuário.
    </p>
  </div>

  {/* 🔴 SVG decorativo — inferior direito */}
  <div className="absolute bottom-6 right-6 z-10 pointer-events-none select-none opacity-70">
    <svg className="w-32 md:w-48 lg:w-64 h-auto" viewBox="0 0 693 753" fill="none">
      <path
        d="M50.3785 252.207C44.567 164.133 109.205 112.226 188.378 73.2074C307.476 14.5132 415.322 76.5871 516.378 162.707C562.939 202.386 588.954 229.621 613.378 285.707C651.735 373.787 652.069 443.774 613.378 531.707C582.268 602.413 550.11 646.156 479.378 677.207C372.269 724.229 245.064 708.531 188.378 606.207C151.003 538.74 214.895 481.135 188.378 408.707C160.365 332.19 55.7434 333.515 50.3785 252.207Z"
        fill="#FF0000"
      />
    </svg>
  </div>

  {/* 🔵 SVG decorativo — superior esquerdo */}
  <div className="absolute top-6 left-6 z-10 pointer-events-none select-none opacity-60">
    <svg className="w-20 md:w-28 lg:w-36 h-auto" viewBox="0 0 693 753" fill="none">
      <path
        d="M50.3785 252.207C44.567 164.133 109.205 112.226 188.378 73.2074..."
        fill="#0088E8"
      />
    </svg>
  </div>

</section>

  {/* SEGUNDA PARTE */}
  <section className="relative w-screen h-screen shrink-0 flex items-center justify-center bg-white">

    {/* Seu novo SVG */}
    <svg
      viewBox="0 0 500 500"
      className="w-[400px] md:w-[500px] lg:w-[600px]"
      fill="none"
    >
      <circle
        cx="250"
        cy="250"
        r="200"
        stroke="#0088E8"
        strokeWidth="8"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="fill-primaria font-bold text-2xl"
      >
        Segunda Parte
      </text>
    </svg>

  </section>

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
