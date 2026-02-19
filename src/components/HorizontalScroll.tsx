"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight} from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);



export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const section = sectionRef.current;

      if (!container || !section) return;

      const totalWidth = section.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-white text-primaria overflow-hidden items-center justify-center flex flex-col"
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
       <FaArrowRight className="text-primaria  h-10 w-10 text-center " />
      </div>
     </div>
     <div className="justify-left flex px-10">
      <div className="w-1/2 justify-center flex items-center ">
  <p className="text-terciaria/75 text-xl font-syne font-bold">
   Língua portuguesa: estudos de texto tipos e gêneros textuais; organização do texto; efeitos de sentido; discurso direto,
  </p>
</div>
    </div>
    
    </div>


 

      
    </section>
  );
}
