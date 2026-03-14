"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact,FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { GrMysql } from "react-icons/gr";
import {  SiJavascript } from "react-icons/si";

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
  const iconsRef = useRef<HTMLSpanElement[]>([]);
   const elements = gsap.utils.toArray<HTMLElement>(".pop-cartoon");


const addIcon = (el: HTMLSpanElement) => {
  if (el && !iconsRef.current.includes(el)) {
    iconsRef.current.push(el);
  }
};

useLayoutEffect(() => {
  const section = sectionRef.current;
  const wrapper = wrapperRef.current;
  const svg = svgRef.current;

  if (!section || !wrapper || !svg) return;

  const ctx = gsap.context(() => {

   const getScrollLength = () =>
  window.innerWidth * 4;

    // HORIZONTAL SCROLL
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

    // SVG DRAW
    const path = svg.querySelector("#mainPath") as SVGPathElement;

    if (path) {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
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

    // PARALLAX ELEMENTS
    const windElements = gsap.utils.toArray<HTMLElement>(".wind-effect");

    windElements.forEach((el) => {
      gsap.fromTo(
        el,
        { x: 0, y: 75 },
        {
          x: 120,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            containerAnimation: horizontalTween,
            trigger: el,
            start: "left 100%",
            end: "left 40%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    // ICON WAVE EFFECT
    gsap.set(iconsRef.current, {
      transformOrigin: "center center",
    });

    if (screen2Ref.current) {

      gsap.to(iconsRef.current, {
        y: -40,
        duration: 0.4,
        ease: "back.out(3)",
        stagger: {
          each: 0.1,
          yoyo: true,
          repeat: 1,
        },
        scrollTrigger: {
          trigger: screen2Ref.current,
          containerAnimation: horizontalTween,
          start: "left 100%",
          end: "left 40%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(iconsRef.current, {
        color: "#202020",
        duration: 0.2,
        stagger: 0.08,
        scrollTrigger: {
          trigger: screen2Ref.current,
          containerAnimation: horizontalTween,
          start: "left 100%",
          end: "left 10%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // CARTOON POP CLASS
    const elements = gsap.utils.toArray<HTMLElement>(".pop-cartoon");

    elements.forEach((el) => {
      gsap.from(el, {
        scale: 0,
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "back.out(2.5)",
        scrollTrigger: {
          trigger: el,
          containerAnimation: horizontalTween,
          start: "left 100%",
          toggleActions: "play none none reverse",
        },
      });
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
        id="timeline"
      >
        <div ref={wrapperRef} className="flex h-full relative" >
        {/* tela 1 + tela 2 */}
<div className="w-[200vw] h-screen shrink-0 flex bg-white">


  {/* TELA 1 — 100vw */}
 
  <div className="w-screen h-screen shrink-0 relative flex bg-white">

    {/* Primeiro título */}
    <div className="fixed top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
      <h1 className="pop-cartoon-text font-syne text-left text-primaria ml-10 md:ml-0 text-4xl md:text-5xl lg:text-7xl font-extrabold drop-shadow-2xl">
        Futuro Dev FrontEnd
      </h1>
    </div>

    {/* SVG */}
 <div className="absolute top-36 md:top-0 -translate-y-1/2 -left-36 md:-left-60 pointer-events-none z-10">
  <svg
    ref={svgRef}
    viewBox="0 0 6065 1075"
    className="block w-[6065px] md:w-[550vw] h-auto"
    preserveAspectRatio="xMidYMid meet"
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

 {/* Texto descrição */}
    <div className="items-end ml-10  pop-cartoon-text z-20  md:w-[50rem] lg:w-[60rem] md:pr-10 md:pb-10  flex justify-start">
      <p className="text-justify font-syne font-bold text-base md:text-lg lg:text-3xl p-3 text-terciaria">
     Sou um desenvolvedor Frontend focado em criar interfaces modernas, responsivas e altamente performáticas. Transformo ideias em experiências digitais intuitivas, combinando design estratégico, animações fluidas e código limpo. Tenho especial atenção à usabilidade, acessibilidade e aos detalhes que elevam a experiência do usuário.
      </p>
    </div>
   
  </div>

  {/* ✅ TELA 2 — 100vw */}
 
<div
  ref={screen2Ref}
  className="w-screen h-screen flex items-center justify-center relative bg-white overflow-hidden"
>

  {/* TEXTO CENTRAL */}
  <div className="absolute z-10 text-center px-4">
    <h1 className="pop-cartoon font-syne text-terciaria text-xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">
      DESENVOLVENDO DESDE 2023
    </h1>
  </div>

  {/* ICONES */}
  <div className="z-10 flex flex-nowrap md:flex-nowrap absolute bottom-[38%] md:bottom-1/4 items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full px-6">

  <span ref={addIcon} className="text-[#036be2E8] pop-cartoon">
      <FaReact className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px]" />
    </span>

    <span ref={addIcon} className="text-[#036be2E8] pop-cartoon">
      <RiTailwindCssFill className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px]" />
    </span>

    <span 
    ref={addIcon}
    className="text-[#036be2E8] pop-cartoon">
      <SiJavascript className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px]" />
    </span>

    <span ref={addIcon} className="text-[#036be2E8] pop-cartoon">
      <GrMysql className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px]" />
    </span>

    <span ref={addIcon} className="text-[#036be2E8] pop-cartoon">
      <FaGithub className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px]" />
    </span>

    <span ref={addIcon} className="text-[#036be2E8] pop-cartoon">
     
    </span>

  </div>

</div>

</div>


          {/* TELA 2 */}
          <div
            ref={screen2Ref}
            className="relative min-w-[250vw] h-screen shrink-0 bg-white"
          >
            <div className="absolute bottom-10 left-20 p-10 w-80 text-left">
              <h2 className="text-xl font-syne  font-extrabold text-secundaria pop-cartoon pb-5">
                PROJETOS REALIZADOS
              </h2>
              <p className="font-syne z-20  pop-cartoon ">
                Entenda aqui os tipos de projetos que já realizei, cada um com foco em design moderno, usabilidade e performance.
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
                className={`absolute z-20 pop-cartoon   ${item.position === "top" ? "top-24" : "bottom-24"} w-80`}
                style={{ left: item.left }}
              >
                <div

                  className="p-8 will-change-transform"
                >
                  <h2 className="text-base lg:text-xl font-syne text-start font-extrabold text-secundaria pb-5 ">
                    {item.title}
                  </h2>
                  <p className="font-syne text-start text-sm lg:text-base">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}
            {/* TEXTO GRANDE */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                ref={bigTextRef}
                className="text-4xl ml-36 md:ml-0 lg:text-9xl  font-syne font-extrabold text-terciaria z-20 whitespace-nowrap"
              >
                Sempre utilizando designs modernos
              </h1>
            </div>
          </div>

          



        </div>
      </section>


    </>
  );
}
