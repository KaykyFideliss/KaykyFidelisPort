
"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import Stacks from '../components/frase';
import { FaGithub   } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { Github } from 'lucide-react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Acqualife = () => {

  const infos = [
    {
      title: "PORTFÓLIO 1.0",
      description: "O site ENVIROLMENTAL DISASTER (Projeto E.D) é uma plataforma educativa sobre desastres ambientais, com foco em conscientização e educação.",
        icons: {
            site: FaLink,
            repo: FaGithub,
          },

       stacks:{
            stack1: "React",
            stack2: "Tailwind CSS",
            
          },

          MainVideo:"https://res.cloudinary.com/de4ncki8u/video/upload/v1770949788/Port1.0_bvnggz.mp4",

          mockupLeft:"/images/project/Disaster/disaster.png",
          mockupRight:"/images/project/Disaster/videoaula.png",

    },

  ]

const challenger = [
  {
    title: "DESAFIOS",
    descriptionOne: "No desenvolvimento do Environmental Disaster, o maior desafio inicial foi aprender a utilizar React em conjunto com Tailwind CSS, pois esse projeto marcou meu primeiro contato prático com essa stack. Até então, minha experiência estava concentrada em HTML, CSS e JavaScript tradicional, trabalhando com páginas mais estruturais e scripts isolados. A introdução ao conceito de componentização, JSX, props e gerenciamento de estado representou uma mudança significativa na minha forma de pensar o desenvolvimento frontend.",
    descriptionTwo:"Além da adaptação ao React, enfrentei dificuldades na compreensão da lógica de organização da aplicação em componentes reutilizáveis. No início, tive desafios para estruturar corretamente a divisão entre layout, conteúdo e comportamento, o que impactava na clareza do código. Também precisei entender como funcionava o fluxo de renderização do React e como as atualizações de estado influenciavam diretamente na interface.",
    descriptionThree:"O uso do Tailwind CSS também exigiu uma curva de aprendizado. Diferentemente do CSS tradicional, precisei me adaptar à abordagem utility-first, compreendendo como combinar classes de forma estratégica para manter responsividade e organização visual. No começo, houve dificuldade em estruturar layouts mais complexos e garantir consistência visual sem tornar o código excessivamente poluído.",
  }
]

const solution =[
  {

    title: "SOLUÇÃO",
    descriptionOne: "Para superar esses desafios, investi tempo em pesquisa e aprendizado direcionado, utilizando principalmente a documentação oficial do React e do Tailwind, além de videoaulas e conteúdos técnicos no YouTube. Busquei compreender não apenas como implementar funcionalidades, mas também a lógica por trás da arquitetura baseada em componentes e da estilização orientada por utilitários.",
    descriptionTwo:"Passei a analisar exemplos práticos e estudar a estrutura de projetos semelhantes, observando padrões de organização de pastas, separação de responsabilidades e boas práticas na criação de componentes. Essa abordagem me ajudou a entender melhor como estruturar a aplicação de forma escalável e como reaproveitar código de maneira eficiente.",
    descriptionThree:"Com prática e experimentação constante, consegui consolidar o uso do React e do Tailwind no projeto, organizando melhor os componentes e estruturando layouts responsivos com maior segurança. O processo foi fundamental para expandir minha base técnica, marcar minha transição para uma stack moderna de frontend e aumentar minha confiança no desenvolvimento de aplicações mais robustas e organizadas.",
  }
]

const Tools = [
  {
    title: "STACKS",
    icons: {
      react: { icon: FaReact, label: "React" },
     tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
     
    
        
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
<section className="w-full bg-WHITE flex flex-col items-center mt-20 overflow-hidden">

   {/* Voltar / Breadcrumb */}
<div className="flex  items-center gap-2 w-full 
                px-4 md:px-8 lg:pl-12 
                h-auto min-h-[60px]">

  {/* Botão Voltar */}
  <Link to="/">
    <h1 className="bg-white f text-center text-sm md:text-base lg:text-lg
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

export default Acqualife
