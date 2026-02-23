import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-white py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-16">
        
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-16 text-primaria font-syne font-extrabold text-center"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          SOBRE MIM
        </motion.h1>

        <div className="space-y-6 md:space-y-8 px-3 md:px-0">
          
          {[
            'Tenho 18 anos e concluí recentemente o curso Técnico em Informática integrado ao Ensino Médio pela FUNEC Riacho. Atualmente, busco minha primeira oportunidade de estágio na área de Tecnologia da Informação, com foco na aquisição de experiência prática e no fortalecimento da minha formação profissional.',

            'Sou dedicado ao estudo de tecnologia e desenvolvimento de software, mantendo uma postura de aprendizado contínuo e evolução técnica. Estou desenvolvendo uma base sólida em Front-end e Back-end, com direcionamento claro para atuação como Desenvolvedor Full Stack.',

            'Possuo experiência acadêmica e prática na criação de projetos utilizando HTML, CSS, JavaScript, React, Tailwind CSS e Python. Tenho aprofundado meus conhecimentos especialmente em React e Tailwind, priorizando componentização, responsividade, organização e boas práticas de desenvolvimento.',

            'Busco uma oportunidade para aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e evoluir tecnicamente em um ambiente profissional, sempre com comprometimento, proatividade e forte interesse em crescimento na área de Tecnologia da Informação.',
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-base md:text-xl lg:text-2xl leading-relaxed text-terciaria font-syne font-bold text-justify"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

        </div>
      </div>
    </section>
  )
}

export default AboutSection