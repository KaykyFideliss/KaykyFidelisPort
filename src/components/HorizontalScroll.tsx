"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaArrowRight } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

// icons 
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [open, setOpen] = React.useState<number | null>(null);

  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

const frontend = [
  {
    id: 1,
    title: "REACT",
    icon: <FaReact className="text-white text-2xl md:text-3xl" />,
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-[#6BB0FF]",
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <IoLogoJavascript className="text-white text-2xl md:text-3xl" />,
    text: "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...",
    color: "bg-[#7DBAFF]",
  },
  {
    id: 3,
    title: "TAILWIND",
    icon: <RiTailwindCssFill className="text-white text-2xl md:text-3xl" />,
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-[#A4CFFF]",
  },
  {
    id: 4,
    title: "GSAP",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" viewBox="2 2 20 20" className="text-white text-2xl md:text-3xl">
        <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"/>
        <path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"/>
        <path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"/>
        <path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"/>
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-[#C7E1FF]",
  },
  {
    id: 5,
    title: "BOOTSTRAP",
    icon: <FaBootstrap className="text-white text-2xl md:text-3xl" />,
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-[#cfe4fc]",
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
    className="relative w-full min-h-screen md:h-screen bg-white text-primaria overflow-hidden md:overflow-hidden flex flex-col"
  >
    {/* Título */}
    <div className="items-center justify-center flex pt-10 md:pb-20 md:pt-12">
      <h1 className="font-syne font-extrabold text-xl md:text-7xl pb-5">STACKS</h1>
    </div>


    {/* FRONTEND - CONTAINER */}
    <div className="bg-primaria w-10/12 min-h-[80vh] md:min-h-[70%] rounded-2xl pb-4 mb-5 md:mb-0 mx-auto">
      
      {/* header */}
      <div className="flex justify-center md:justify-between px-4 md:px-10 py-5">
        <div className="flex gap-2">
          <MdOutlineScreenshotMonitor className="text-white h-9 w-9 text-center" />
          <h1 className="text-white text-xl md:text-3xl font-syne font-extrabold">
            FRONTEND
          </h1>
        </div>
      </div>
      
      {/* Text */}
      <div className="justify-center md:justify-start   flex ">
        <div className="md:w-1/2 w-full flex  items-center px-4 md:px-10">
          <p className="text-terciaria/75 text-lg font-syne font-bold text-center md:text-left">
            Língua portuguesa: estudos de texto tipos e gêneros textuais; organização do texto; efeitos de sentido; discurso direto,
          </p>
        </div>
      </div>

      {/* frontend */}
      <div className="flex flex-col md:flex-row h-full mx-4 md:mx-10 md:gap-0 mt-4 md:mt-0">
        {frontend.map((stack, index) => (
          <div
            key={stack.id}
            onClick={() => toggle(stack.id)}
            className={`
              w-full md:w-auto
              h-auto md:h-[70%] 
              my-1 md:my-10 
              cursor-pointer 
              transition-all duration-500
              ${open === stack.id ? "flex-[20]" : "flex-[0.7]"}
              ${stack.color}
              ${index === 0 ? "rounded-xl md:rounded-l-xl md:rounded-r-none" : ""}
              ${index === frontend.length - 1 ? "rounded-xl md:rounded-r-xl md:rounded-l-none" : ""}
              ${index !== 0 && index !== frontend.length - 1 ? "rounded-xl md:rounded-none" : ""}
            `}
          >
            <div className={`
              mx-6 
              flex 
              items-center md:items-start
              ${open === stack.id ? 'justify-between' : 'justify-end'}
            `}>
              {open === stack.id ? (
                <>
                  <h1 className="text-white font-syne font-bold text-xl md:text-2xl pt-5">
                    {stack.title}
                  </h1>
                  <div className="pt-5">
                    {stack.icon}
                  </div>
                </>
              ) : (
                <div className="py-4 md:pt-5">
                  {stack.icon}
                </div>
              )}
            </div>

            <div
              className={`
                mx-6 text-white font-syne pb-4 md:pt-6 text-justify text-base md:text-lg
                transition-all duration-500 overflow-hidden
                ${open === stack.id ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
              `}
            >
              <p className="font-syne">{stack.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* BACKEND - CONTAINER */}
    <div className="bg-primaria w-10/12 min-h-[80vh] md:min-h-[70%] rounded-2xl pb-4 mb-5 md:mb-0 mx-auto">
      
      {/* header */}
      <div className="flex justify-center md:justify-between px-4 md:px-10 py-5">
        <div className="flex gap-2">
          <MdOutlineScreenshotMonitor className="text-white h-9 w-9 text-center" />
          <h1 className="text-white text-xl md:text-3xl font-syne font-extrabold">
            FRONTEND
          </h1>
        </div>
      </div>
      
      {/* Text */}
      <div className="justify-center md:justify-start   flex ">
        <div className="md:w-1/2 w-full flex  items-center px-4 md:px-10">
          <p className="text-terciaria/75 text-lg font-syne font-bold text-center md:text-left">
            Língua portuguesa: estudos de texto tipos e gêneros textuais; organização do texto; efeitos de sentido; discurso direto,
          </p>
        </div>
      </div>

      {/* frontend */}
      <div className="flex flex-col md:flex-row h-full mx-4 md:mx-10 md:gap-0 mt-4 md:mt-0">
        {frontend.map((stack, index) => (
          <div
            key={stack.id}
            onClick={() => toggle(stack.id)}
            className={`
              w-full md:w-auto
              h-auto md:h-[70%] 
              my-1 md:my-10 
              cursor-pointer 
              transition-all duration-500
              ${open === stack.id ? "flex-[20]" : "flex-[0.7]"}
              ${stack.color}
              ${index === 0 ? "rounded-xl md:rounded-l-xl md:rounded-r-none" : ""}
              ${index === frontend.length - 1 ? "rounded-xl md:rounded-r-xl md:rounded-l-none" : ""}
              ${index !== 0 && index !== frontend.length - 1 ? "rounded-xl md:rounded-none" : ""}
            `}
          >
            <div className={`
              mx-6 
              flex 
              items-center md:items-start
              ${open === stack.id ? 'justify-between' : 'justify-end'}
            `}>
              {open === stack.id ? (
                <>
                  <h1 className="text-white font-syne font-bold text-xl md:text-2xl pt-5">
                    {stack.title}
                  </h1>
                  <div className="pt-5">
                    {stack.icon}
                  </div>
                </>
              ) : (
                <div className="py-4 md:pt-5">
                  {stack.icon}
                </div>
              )}
            </div>

            <div
              className={`
                mx-6 text-white font-syne pb-4 md:pt-6 text-justify text-base md:text-lg
                transition-all duration-500 overflow-hidden
                ${open === stack.id ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
              `}
            >
              <p className="font-syne">{stack.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
