
"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { FaLink, FaPhp } from "react-icons/fa";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import { FaReact, FaChartBar ,FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFramer,SiArduino  } from "react-icons/si";
import { DiMysql } from "react-icons/di";




import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";




const Acqualife = () => {

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    gsap.from(sectionRef.current.children, {
      y: 80,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);


  const infos = [
    {
      title: "ACQUALIFE",
      description: "O Acqualife é um sistema automatizado que capta, filtra e reutiliza água da chuva para fins não potáveis, como descarga, limpeza e irrigação, em residências, promovendo economia, sustentabilidade e consciência ambiental.",
        icons: {
            site: FaLink,
            repo: FaGithub,
          },

          stacks:{
            stack1: "React",
            stack2: "Tailwind CSS",
            stack3: "Api REST",
            Stacks4:"C#",
          },

          MainVideo:"https://res.cloudinary.com/de4ncki8u/video/upload/v1772291888/Design_sem_nome_2_vhax2w.mp4",

          mockupLeft:"/images/project/acqualife/mockup.png",
          mockupRight:"/images/project/acqualife/mockup.png",

    },

  ]

const challenger = [
  {
    title: "DESAFIOS",
    descriptionOne: "Com o Acqualife, enfrentei alguns desafios relevantes ao longo do desenvolvimento. Inicialmente, o projeto possuía um escopo bem definido, mas durante a execução percebemos a necessidade de pivotar a ideia e transformar a solução em uma aplicação web, o que exigiu replanejamento técnico e reorganização das responsabilidades da equipe.",
    descriptionTwo:" Além disso, tive dificuldades na integração com os dispositivos de IoT, principalmente relacionadas a falhas nas requisições e inconsistências na comunicação entre o hardware e a aplicação. Após diversos testes e ajustes — especialmente na estrutura das requisições e no tratamento de erros — consegui estabilizar a comunicação, garantindo maior confiabilidade na troca de dados em tempo real.",
    descriptionThree:"        Essa experiência foi importante para desenvolver minha capacidade de adaptação, resolução de problemas e análise técnica em cenários com integração entre software e hardware.",
  }
]

const solution =[
  {

    title: "SOLUÇÃO",
    descriptionOne: "Para solucionar os problemas enfrentados no desenvolvimento do Acqualife, reestruturei a organização do estado da aplicação e a comunicação com os dispositivos IoT. No frontend, utilizei Hooks do React para centralizar os estados críticos, especialmente os dados recebidos em tempo real. Com o useEffect, controlei o ciclo de vida das requisições para evitar execuções desnecessárias, enquanto o useState manteve a interface sincronizada com as atualizações dos sensores.",
    descriptionTwo:"Também implementei a Context API para eliminar o prop drilling e centralizar informações globais, como dados dos dispositivos e status de conexão. Isso tornou a arquitetura mais escalável, facilitou a manutenção e deixou o código mais organizado após a transição para aplicação web.",
    descriptionThree:"Na integração com o backend e os dispositivos, padronizei as requisições via fetch, estruturando melhor os endpoints, validando respostas e fortalecendo o tratamento de erros com try/catch e verificação de status HTTP. Com isso, estabilizei a comunicação entre hardware e software, reduzi inconsistências e aumentei a confiabilidade da troca de dados em tempo real, garantindo uma experiência mais fluida e responsiva para os usuários do Acqualife.",
  }
]

const Tools = [
  {
    title: "STACKS",
    icons: {
      react: { icon: FaReact, label: "React" },
     tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
     
      Recharts: { icon:FaChartBar  , label: "Recharts" },
      
     
        mysql: { icon: DiMysql, label: "MySQL" },
      php: { icon: FaPhp, label: "PHP" },

        arduino: { icon: SiArduino, label: "Arduino" },
        framer: { icon: SiFramer, label: "Framer Motion" },
        github: { icon: FaGithub, label: "GitHub" },  
        
    }
  }
]
const Links = [

  {
    Github: "https://github.com/KaykyFideliss/Website-Acqualife",
    Preview: "https://acqualife.vercel.app",
  },
      
]
  return (
  <section
    ref={sectionRef}
    className="w-full bg-WHITE flex flex-col items-center mt-20 overflow-hidden"
    >

   {/* Voltar / Breadcrumb */}
<div className="flex  items-center gap-2 w-full 
                px-4 md:px-8 lg:pl-12 
                h-auto min-h-[60px]">

  {/* Botão Voltar */}
<Link to="/" state={{ scrollTo: "galleryy" }}>
  <h1 className="bg-white text-center text-sm md:text-base lg:text-lg
                 px-4 py-2
                 font-syne font-bold border
                 border-terciaria
                 hover:bg-primaria hover:text-terciaria
                 duration-200 hover:scale-105
                 rounded-xl transition-all">
    Voltar
  </h1>
</Link>

  {/* Breadcrumb */}
  <div className="flex items-center gap-2">

    <p className="font-syne text-sm md:text-base text-terciaria/75">
      Project
    </p>

    <IoIosArrowForward className="text-terciaria/75 text-sm md:text-base" />

    <p className="font-syne text-xs md:text-base font-bold text-primaria break-words word-break">
      {infos[0].title}
    </p>

  </div>
</div>

  {/* HERO */}
  <div className="w-full max-w-7xl px-6 flex flex-col items-center gap-4">

    <div className="w-full text-center">
      <h1 className="text-4xl lg:text-8xl font-syne font-extrabold text-terciaria mt-10 mb-8">
        {infos[0].title}
      </h1>

      <p className="text-terciaria font-syne   text-lg md:text-xl max-w-4xl mx-auto">
        {infos[0].description}
      </p>
    </div>

    {/* STACKS BADGES */}
    <div className="flex flex-wrap  gap-2 mt-0 justify-center">
      {infos.map((info) =>
        Object.values(info.stacks).map((stack, index) => (
          <p
            key={index}
            className="bg-transparent hover:bg-primaria hover:scale-105 duration-150 
            font-bold font-syne border border-terciaria text-terciaria 
            px-3 py-1 rounded-full text-sm"
          >
            {stack}
          </p>
        ))
      )}
    </div>

    {/* LINKS */}
    <div className="flex gap-6 justify-end items-center pt-4 w-full">
      <a
        href={Links[0].Preview}
        target="_blank"
        className="text-primaria text-xs font-syne font-extrabold 
        hover:text-terciaria hover:scale-105 duration-300"
      >
        PREVIEW
      </a>

      <a
        href={Links[0].Github}
        target="_blank"
        className="text-primaria text-xs font-syne font-extrabold 
        hover:text-terciaria hover:scale-105 duration-300"
      >
        GITHUB
      </a>
    </div>

    {/* VIDEO */}
    <div className="w-full mt-0">
      <video
        className="w-full rounded-xl border border-terciaria/10"
        src={infos[0].MainVideo}
        loop
        autoPlay
        preload="metadata"
      />
    </div>

    {/* MOCKUPS */}
    <div className="grid md:grid-cols-2 gap-4 w-full mt-10">
      <img
        src={infos[0].mockupLeft}
        alt="Mockup esquerdo Acqualife"
        className="w-full rounded-xl border border-terciaria/10"
      />
      <img
        src={infos[0].mockupRight}
        alt="Mockup direito Acqualife"
        className="w-full rounded-xl border border-terciaria/10"
      />
    </div>
  </div>

  {/* DESAFIOS */}
  <div className="w-full max-w-7xl px-6 mt-28">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

      {/* Título */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h1 className="text-terciaria font-syne font-extrabold text-4xl md:text-5xl">
          {challenger[0].title}
          <span className="text-primaria">.</span>
        </h1>
      </div>

      {/* Texto */}
      <div className="w-full text-justify lg:w-2/3 flex flex-col gap-6 font-syne text-lg md:text-xl ">
        <p>{challenger[0].descriptionOne}</p>
        <p>{challenger[0].descriptionTwo}</p>
        <p>{challenger[0].descriptionThree}</p>
      </div>

    </div>
  </div>

  {/* SOLUTION */}
  <div className="w-full max-w-7xl px-6 mt-28">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

      {/* Título */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h1 className="text-terciaria font-syne font-extrabold text-4xl md:text-5xl">
          {solution[0].title}
          <span className="text-primaria">.</span>
        </h1>
      </div>

      {/* Texto */}
      <div className="w-full text-justify lg:w-2/3 flex flex-col gap-6 font-syne text-lg md:text-xl ">
        <p>{solution[0].descriptionOne}</p>
        <p>{solution[0].descriptionTwo}</p>
        <p>{solution[0].descriptionThree}</p>
      </div>

    </div>
  </div>

  {/* STACKS COM ÍCONES */}
  <div className="w-full max-w-7xl px-6 mt-28 mb-20">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

      {/* Título */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h1 className="text-terciaria font-syne font-extrabold text-4xl md:text-5xl">
          {Tools[0].title}
          <span className="text-primaria">.</span>
        </h1>
      </div>

      {/* Ícones */}
      <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-start gap-4">
        {Object.entries(Tools[0].icons).map(([key, value]) => {
          const Icon = value.icon;

          return (
            <span
              key={key}
              className="flex items-center gap-2 text-white 
              bg-terciaria py-4 px-8 rounded-xl text-sm font-syne font-extrabold
              hover:text-primaria hover:bg-white 
              hover:border-primaria border-2 border-transparent
              hover:scale-105 duration-300"
            >
              <Icon className="w-8 h-8" />
              {value.label}
            </span>
          );
        })}
      </div>

    </div>
  </div>

</section>
  )
}

export default Acqualife;
