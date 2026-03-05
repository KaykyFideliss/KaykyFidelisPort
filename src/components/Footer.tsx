import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const logoSrc = "img/Healthy-logo.png";

/* ================= ANIMAÇÕES ================= */

const easeSmooth = [0.22, 1, 0.36, 1];

const fadeBlurUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeSmooth }
  },
  exit: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    transition: { duration: 0.6, ease: "easeIn" }
  }
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};

const fadeLine = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1, ease: easeSmooth }
  },
  exit: { scaleX: 0, opacity: 0, transition: { duration: 0.5 } }
};

const heroText = {
  hidden: { opacity: 0, y: 100, filter: "blur(18px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeSmooth }
  },
  exit: { opacity: 0, y: 60, filter: "blur(14px)", transition: { duration: 0.8 } }
};

/* ================= COMPONENTE ================= */

export default function Footer() {
  return (
    <motion.footer
      className="font-zalando rounded-lg w-full bg-white  "
     
    >
      <div className="w-full overflow-hidden px-4 md:px-6">
        <div className="max-w-7xl mx-auto py-10">
          {/* SEÇÕES SUPERIORES */}
          <motion.div
            className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center md:items-start text-center md:text-left"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* LINKS */}
            <motion.div className="flex flex-col gap-2 min-w-[150px]" variants={fadeBlurUp}>
              <h1 className="text-white text-sm font-semibold">LINKS RÁPIDOS</h1>

              <motion.div variants={staggerParent}>
                {[
                  { to: "/", label: "HOME" },
                  { to: "/GuiaDeUso", label: "GUIA DE USO" },
                  { to: "/MinhasContas", label: "MINHAS CONTAS" },
                  { to: "/Dashboard", label: "DASHBOARD" },
                  { to: "/settings", label: "SETTINGS" }
                ].map((item) => (
                  <motion.div key={item.to} variants={fadeBlurUp}>
                    <Link
                      to={item.to}
                      className="text-white hover:scale-105 hover:text-primaria text-sm block py-1 transition whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* LOGO */}
            <motion.div
              className="flex flex-col items-center gap-4 max-w-xs mx-4"
              variants={fadeBlurUp}
            >
              <motion.img
                src={logoSrc}
                alt="Healthy Wallet Logo"
                className="h-20 md:h-28 lg:h-32 w-auto max-w-full"
                variants={fadeBlurUp}
              />
              <motion.p
                className="text-white text-xs md:text-sm text-center px-2"
                variants={fadeBlurUp}
              >
                Plataforma focada em organização financeira, clareza e decisões inteligentes
              </motion.p>
            </motion.div>

            {/* CONTATOS */}
            <motion.div 
  className="flex flex-col gap-4 items-center md:items-start min-w-[150px]"
  variants={fadeBlurUp}
>
  <h1 className="text-white text-sm font-semibold text-center md:text-left">CONTATOS</h1>

  <motion.div variants={staggerParent} className="w-full">
    {[
      {
        href: "https://www.linkedin.com/in/kaykyfidelis/",
        icon: <FaLinkedin className="h-5 w-5" />,
        label: "LINKEDIN"
      },
      {
        href: "https://github.com/KaykyFideliss",
        icon: <FaGithub className="h-5 w-5" />,
        label: "GITHUB"
      },
      {
        href: "https://www.instagram.com/fidelizx.74/",
        icon: <FaInstagram className="h-5 w-5" />,
        label: "INSTAGRAM"
      }
    ].map((item) => (
      <motion.a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:scale-105 hover:text-primaria py-1 transition whitespace-nowrap justify-center md:justify-start"
        variants={fadeBlurUp}
      >
        {item.icon}
        <span className="text-sm">{item.label}</span>
      </motion.a>
    ))}
  </motion.div>
</motion.div>
          </motion.div>

          {/* LINHA */}
          <motion.hr
            className="border-white/20 my-8 origin-left w-full"
            variants={fadeLine}
            initial="hidden"
            whileInView="visible"
          />

          {/* RODAPÉ FINAL */}
          <motion.div
            className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs items-center justify-center md:justify-between px-4"
            variants={fadeBlurUp}
          >
            <a
              href="https://portifolio-kayky-fidelis.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primaria hover:scale-105 transition text-center md:text-left"
            >
              Desenvolvido por Kayky Fidelis
            </a>
            <span className="text-white text-center md:text-right">
              © 2026 Healthy Wallet. All rights reserved.
            </span>
          </motion.div>

          {/* LINHA */}
          <motion.hr
            className="border-white/20 my-8 origin-left w-full"
            variants={fadeLine}
            initial="hidden"
            whileInView="visible"
          />

          {/* HERO TEXTO GRANDE - AJUSTADO PARA NÃO CAUSAR SCROLL HORIZONTAL */}
          <div className="relative w-full mt-12 md:mt-16 px-2">
            <motion.div
              className="relative flex justify-center items-center w-full overflow-visible"
              variants={heroText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {/* Container para controlar o overflow */}
              <div className="relative w-full text-center">
                <h1 className="relative z-10 text-white font-zalando font-bold 
                  leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[90px] 2xl:text-[110px]
                  drop-shadow-[0_-10px_30px_rgba(0,0,0,0.35)]
                  break-words overflow-visible">
                  HEALTHY WALLET
                </h1>

                {/* GLOW AJUSTADO */}
                <motion.div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                    w-[95%] max-w-6xl h-[1.5em] 
                    bg-gradient-to-b from-terciaria/70 via-black/50 to-transparent 
                    blur-xl z-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}