"use client"

import React from "react"
import { motion } from "framer-motion"

const AboutSection = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const paragraph = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(12px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  }

  const texts = [
    "Tenho 18 anos e concluí recentemente o curso Técnico em Informática integrado ao Ensino Médio pela FUNEC Riacho. Atualmente, busco minha primeira oportunidade de estágio na área de Tecnologia da Informação, com foco na aquisição de experiência prática e no fortalecimento da minha formação profissional.",

    "Sou dedicado ao estudo de tecnologia e desenvolvimento de software, mantendo uma postura de aprendizado contínuo e evolução técnica. Estou desenvolvendo uma base sólida em Front-end e Back-end, com direcionamento claro para atuação como Desenvolvedor Full Stack.",

    "Possuo experiência acadêmica e prática na criação de projetos utilizando HTML, CSS, JavaScript, React, Tailwind CSS e Python. Tenho aprofundado meus conhecimentos especialmente em React e Tailwind, priorizando componentização, responsividade, organização e boas práticas de desenvolvimento.",

    "Busco uma oportunidade para aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e evoluir tecnicamente em um ambiente profissional, sempre com comprometimento, proatividade e forte interesse em crescimento na área de Tecnologia da Informação."
  ]

  return (
    <section className="w-full min-h-screen bg-white py-24 " id ="about">

      <div className="max-w-6xl  mx-auto px-6 lg:px-16">

        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-primaria font-syne font-extrabold text-center"
        >
          SOBRE MIM
        </motion.h1>


        {/* TEXTOS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >

          {texts.map((text, index) => (
            <motion.p
              key={index}
              variants={paragraph}
              className="text-lg md:text-xl lg:text-3xl leading-relaxed text-terciaria font-syne text-justify font-bold"
            >
              {text}
            </motion.p>
          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default AboutSection