
"use client"
import React from 'react'

import { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { FaHtml5 ,FaGithub,FaCss3Alt,FaJs,FaBootstrap   } from "react-icons/fa";
import { SiScrollreveal } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { motion } from "framer-motion";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";


const Disaster = () => {

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
      title: "ENVIRONMENTAL DISASTER",
      description: "O site ENVIROLMENTAL DISASTER (Projeto E.D) é uma plataforma educativa sobre desastres ambientais, com foco em conscientização e educação.",
        icons: {
            site: FaLink,
            repo: FaGithub,
          },

          stacks:{
            stack1: "HTML",
            stack2: "CSS",
            stack3: "JS",
            stack4: "Bootstrap",
            stack5: "ScrollReveal",
            
          },

          MainVideo:"/video/Disaster.mp4",

          mockupLeft:"/images/project/Disaster/disaster.png",
          mockupRight:"/images/project/Disaster/videoaula.png",

    },

  ]

const challenger = [
  {
    title: "DESAFIOS",
    descriptionOne: "No desenvolvimento do Environmental Disaster, o maior desafio esteve na criação da página de videoaulas, especialmente por ter sido meu primeiro contato prático com JavaScript. Até então, minha experiência era predominantemente voltada para HTML e CSS, com foco em estruturação e estilização de interfaces estáticas. Ao iniciar a implementação da seção de vídeos, precisei compreender conceitos fundamentais como manipulação do DOM, eventos de clique e alteração dinâmica de conteúdo, o que representou uma mudança significativa na forma como eu desenvolvia páginas.",
    descriptionTwo:"Durante a implementação, enfrentei dificuldades na lógica responsável pela troca das videoaulas. Inicialmente, o player não atualizava corretamente o conteúdo ao receber uma nova interação do usuário, e em alguns testes o vídeo permanecia o mesmo mesmo após a seleção de outra aula. Isso evidenciou lacunas no meu entendimento sobre como manipular atributos dinamicamente, especialmente o controle do src do elemento responsável pela exibição do vídeo.",
    descriptionThree:"Outro obstáculo relevante foi o entendimento do ciclo de carregamento da página e da execução dos scripts. Em determinadas situações, o JavaScript era executado antes que os elementos do DOM estivessem completamente carregados, gerando erros e comportamentos inesperados. Além disso, houve uma curva de aprendizado significativa na organização da lógica do código, para evitar repetições e garantir que o comportamento da página fosse previsível e escalável.",
  }
]

const solution =[
  {

    title: "SOLUÇÃO",
    descriptionOne: "Para superar esses desafios, iniciei um aprofundamento direcionado nos fundamentos de JavaScript aplicados ao frontend, com foco em seleção de elementos, eventos e manipulação de propriedades. Busquei compreender de forma mais estruturada como o navegador interpreta scripts e como a interação do usuário pode ser capturada e transformada em ações dinâmicas na interface.",
    descriptionTwo:"Reestruturei a página de videoaulas separando claramente a camada de exibição do conteúdo da lógica responsável pela atualização do vídeo. Implementei uma função específica para alterar dinamicamente o atributo src do player sempre que uma nova aula fosse selecionada, centralizando a lógica de atualização em um único ponto. Essa reorganização eliminou inconsistências, reduziu redundâncias e tornou o código mais limpo e compreensível.",
    descriptionThree:"Também ajustei o momento de execução do script para garantir que ele fosse disparado apenas após o carregamento completo do DOM, estabilizando o comportamento da página. Como resultado, a troca de videoaulas passou a funcionar corretamente, a experiência do usuário tornou-se mais fluida e o projeto ganhou maior consistência técnica. Esse processo foi fundamental para consolidar minha base em JavaScript e ampliar minha capacidade de desenvolver aplicações interativas com maior segurança e organização estrutural.",
  }
]

const Tools = [
  {
    title: "STACKS",
    icons: {
      HTML: { icon: FaHtml5, label: "HTML" },
      CSS: { icon: FaCss3Alt, label: "CSS" },
    JS: { icon: FaJs, label: "JavaScript" },
Bootstrap: { icon: FaBootstrap, label: "Bootstrap" },
    ScrollReveal: { icon: SiScrollreveal, label: "ScrollReveal" },
        
    }
  }
]
const Links = [

  {
    Github: "https://github.com/KaykyFideliss/Envirolmental-Disaster-Responsivo",
    Preview: "https://envirolmental-disaster.vercel.app",
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
        alt="Mockup esquerdo Disaster"
        className="w-full rounded-xl border border-terciaria/10"
      />
      <img
        src={infos[0].mockupRight}
        alt="Mockup direito Disaster"
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

export default Disaster;
