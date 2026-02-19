"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const stacks = [
    {
      title: "React",
      description:
        "Biblioteca para construção de interfaces interativas, baseada em componentes reutilizáveis.",
    },
    {
      title: "Next.js",
      description:
        "Framework React com SSR, SSG e excelente otimização de performance.",
    },
    {
      title: "Tailwind",
      description:
        "Framework utility-first que acelera o desenvolvimento de UI moderna.",
    },
    {
      title: "TypeScript",
      description:
        "Superset do JavaScript com tipagem estática para maior segurança.",
    },
    {
      title: "JavaScript",
      description:
        "Linguagem essencial da web, responsável pela interatividade.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const section = sectionRef.current;

      if (!container || !section) return;

      const totalWidth = section.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      // Scroll horizontal
      gsap.to(section, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Estado inicial dos cards
      gsap.set(".stack-card", { flex: 1 });
      gsap.set(".stack-card:first-child", { flex: 2 });

      gsap.set(".card-content", { opacity: 0, y: 10 });
      gsap.set(".stack-card:first-child .card-content", {
        opacity: 1,
        y: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleExpand = (clickedIndex: number) => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.to(card, {
        flex: index === clickedIndex ? 2 : 1,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(card.querySelector(".card-content"), {
        opacity: index === clickedIndex ? 1 : 0,
        y: index === clickedIndex ? 0 : 10,
        duration: 0.3,
      });
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-white text-primaria  overflow-hidden items-center justify-center flex flex-col"
    >
    
    <div className="items-center justify-center flex mt-10">
      <h1 className="font-syne font-extrabold text-xl md:text-7xl mb-10">STACKS</h1>
    </div>

       {/* BG */}
    <div className="bg-primaria w-10/12 h-3/4 rounded-2xl  ">
      
      {/* header */}
      
      <div className="flex justify-between px-10 py-5">
      <div className="flex gap-2  ">
        <MdOutlineScreenshotMonitor    className="text-white  h-9 w-9 text-center " />
        <h1 className="text-white text-xl md:text-3xl font-syne font-extrabold">
         FRONTEND
        </h1>
      </div>
      <div className=" ">
       <FaArrowRight className="text-white  h-10 w-10 text-center " />
      </div>
     </div>
     {/* Text */}
     <div className="justify-left flex px-10">
      <div className="w-1/2 justify-center flex items-center ">
  <p className="text-terciaria/75 text-xl font-syne font-bold">
   Língua portuguesa: estudos de texto tipos e gêneros textuais; organização do texto; efeitos de sentido; discurso direto,
  </p>
</div>
    </div>

    {/* Stacks */}

{/* Stacks */}
<div
  ref={sectionRef}
  className="flex gap-3 px-10 mt-10 h-40"
>
  {stacks.map((stack, index) => (
    <div
      key={index}
      ref={(el) => {
        if (el) cardsRef.current[index] = el;
      }}
      onClick={() => handleExpand(index)}
      className="stack-card flex-1 cursor-pointer rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 flex flex-col justify-center transition-all"
    >
      <h3 className="text-white font-bold text-sm md:text-lg">
        {stack.title}
      </h3>

      <div className="card-content">
        <p className="text-white/80 text-xs md:text-sm mt-2">
          {stack.description}
        </p>
      </div>
    </div>
  ))}
</div>


          </div>


 

      
    </section>
  );
}
