"use client"
import React from 'react'

import { FaLink, FaReact, FaChartBar, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiPostgresql, SiFramer } from "react-icons/si";

import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Healthy = () => {

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
      title: "HEALTHY WALLET",
      description: "O Healthy Wallet é uma aplicação web de controle financeiro pessoal desenvolvida para ajudar usuários a organizarem suas contas e despesas de forma simples, visual e eficiente. A plataforma permite a criação de tabelas financeiras personalizadas, onde o usuário pode cadastrar contas com valor, data de vencimento e número de parcelas, facilitando o acompanhamento das obrigações financeiras do dia a dia.",
        icons: {
            site: FaLink,
            repo: FaGithub,
          },

          stacks:{
            stack1: "React",
            stack2: "Tailwind CSS",
            stack3: "Supabase",
            Stacks4:"PostgreSQL",
          },

          MainVideo:"https://res.cloudinary.com/de4ncki8u/video/upload/v1769467639/Vídeo_sem_título_Feito_com_o_Clipchamp_18_kw10ck.mp4",

          mockupLeft:"/images/project/healthy/pie.png",
          mockupRight:"/images/project/healthy/aprenda.png",

    },

  ]

const challenger = [
  {
    title: "DESAFIOS",
    descriptionOne: "No desenvolvimento do Healthy Wallet, enfrentei desafios principalmente relacionados à modelagem de dados e à consistência das regras de negócio. Um dos principais problemas surgiu na lógica de cálculos financeiros, especialmente na atualização correta do total restante após exclusões ou pagamentos parciais. Inicialmente, havia inconsistências entre os valores armazenados no banco e os valores exibidos no dashboard, o que impactava diretamente os gráficos e indicadores financeiros.",
    descriptionTwo:"Outro desafio relevante foi o tratamento de datas de vencimento. Durante a implementação do sistema de status (em dia, próximo do vencimento e vencido), identifiquei divergências causadas por timezone, onde a data salva no banco aparecia um dia anterior no frontend. Isso exigiu uma análise detalhada da conversão de datas e da manipulação de objetos Date no JavaScript para garantir precisão no cálculo dos dias restantes.",
    descriptionThree:"Esses obstáculos foram fundamentais para aprimorar minha capacidade de depuração, entendimento de regras financeiras e controle de sincronização entre frontend e banco de dados.",
  }
]

const solution =[
  {

    title: "SOLUÇÃO",
    descriptionOne: "Para resolver as inconsistências financeiras, revisei a lógica de cálculo do sistema e ajustei a forma como o valor total das contas era tratado. Passei a considerar o valor armazenado como o saldo real restante, eliminando multiplicações indevidas e garantindo que exclusões e pagamentos refletissem imediatamente no dashboard e nos gráficos. Também reorganizei as consultas ao Supabase para assegurar que as deleções respeitassem o relacionamento entre contas e pagamentos, evitando dados “órfãos” no banco.",
    descriptionTwo:"No tratamento das datas, implementei uma padronização utilizando Date.UTC para evitar impactos de timezone na comparação entre a data atual e o vencimento. Isso estabilizou o sistema de cores e garantiu que o status das contas fosse exibido corretamente, independentemente do fuso horário do usuário.",
    descriptionThree:"Além disso, estruturei melhor o gerenciamento de estado no React, garantindo que alterações no banco fossem refletidas automaticamente na interface. Essa reorganização tornou o dashboard mais confiável, os gráficos mais precisos e a aplicação mais consistente do ponto de vista de regras de negócio e experiência do usuário.",
  }
]

const Tools = [
  {
    title: "STACKS",
    icons: {
      react: { icon: FaReact, label: "React" },
     tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
     
      Recharts: { icon:FaChartBar  , label: "Recharts" },
      
     Supabase: { icon: SiSupabase , label: "Supabase" },
      PostGreeSql : { icon: SiPostgresql, label: "PostgreSQL" },
        framer: { icon: SiFramer, label: "Framer Motion" },
        github: { icon: FaGithub, label: "GitHub" },  
        
    }
  }
]
const Links = [

  {
    Github: "https://github.com/KaykyFideliss/Website-Acqualife",
    Preview: "https://healthy-wallet.vercel.app",
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

export default Healthy
