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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const svg = svgRef.current;

    if (!section || !wrapper || !svg) return;

    const ctx = gsap.context(() => {
      const scrollLength = wrapper.scrollWidth - window.innerWidth;
      const firstScreenWidth = window.innerWidth;

      const screen2 = screen2Ref.current;
if (!screen2) return;
gsap.to(screen2, {
  backgroundColor: "#3D94FF",
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: () => `top -${window.innerWidth + 1600}`,
    end: () => `top -${window.innerWidth * 2.5}`, // aumenta a área de transição
    scrub: true,
  },
});



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
      });

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
        },
      );

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
        <div ref={wrapperRef} className="flex h-full">
          {/*  tela 1 */}
          <div className="w-[200vw] h-screen shrink-0 flex bg-white ">
            <div className="relative w-[1vw] h-screen shrink-0 flex bg-white">
              {/* Primeiro título */}
              <div className="fixed top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
                <h1 className="font-syne text-center md:text-left text-primaria text-4xl md:text-5xl lg:text-7xl font-extrabold">
                  Futuro Dev FrontEnd
                </h1>
              </div>

              {/* Segundo título no final dos 200vw */}
              <div className="absolute left-[100vw] top-40 md:top-20 md:top-42 md:px-10 lg:top-16 flex lg:w-1/2 z-20">
                <h1 className="font-syne text-primaria text-4xl md:text-5xl lg:text-7xl font-extrabold">
                  Conhecendo novas tecnologias
                </h1>
              </div>
            </div>
            <div className="absolute top-52 left-0 z-10">
              <img
                ref={svgRef}
                src="/images/circle.png"
                className="w-[1700px] will-change-transform"
                style={{ transformOrigin: "50% 50%" }}
                alt=""
              />
            </div>

            {/* texto descrição */}
            <div className="absolute bottom-0 right-0 z-20 w-full md:w-[40rem] p-10 flex justify-end">
              <p className="text-justify font-syne font-bold  text-base md:text-lg lg:text-xl text-terciaria ">
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
             className="relative min-w-[200vw] h-screen shrink-0 bg-white">
            <div className="absolute bottom-0 left-72 p-10 w-80 text-left ">
              <h2 className="text-xl font-syne font-extrabold text-primaria pb-5">
                PROJETOS REALIZADOS
              </h2>
              <p className="font-syne f">
                Unique corporate websites
Smart open source CMS.
E-commerce solutions​
Web app development
              </p>
            </div>

            <div className="left-[55rem] top-20 absolute">
              <img className="w-96 h-52" src="/images/project/Healthy.png" alt="" />
            </div>
            <div className="absolute bottom-10 left-[70rem]">
              <img className="w-96 h-52" src="/images/project/Healthy.png" alt="" />
            </div>
            <div className="relative min-w-[200vw] h-screen flex items-center justify-center">
  <h1 className="text-5xl font-syne font-extrabold text-terciaria">
    Utilizo stacks atuais
  </h1>
</div>




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
  );
}
