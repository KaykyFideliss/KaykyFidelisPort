import React, { useLayoutEffect, useRef } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 1,
    title: "ACQUALIFE",
    url: "https://res.cloudinary.com/de4ncki8u/video/upload/v1762101934/acqualife_1_vy4l5i.mp4",
    site: "https://acqualife.vercel.app",
    repo: "https://github.com/KaykyFideliss/Website-Acqualife",
    icons: {
      site: FaLink,
      repo: FiGithub,
    },
  },
  {
    id: 2,
    title: "HEALTHY WALLET",
    url: "https://res.cloudinary.com/de4ncki8u/video/upload/v1769467639/Vídeo_sem_título_Feito_com_o_Clipchamp_18_kw10ck.mp4",
    site: "https://healthy-wallet.vercel.app",
    repo: "https://github.com/KaykyFideliss/healthy-wallet-project",
    icons: {
      site: FaLink,
      repo: FiGithub,
      },
  },
  {
    id: 3,
    title: "ENVIRONMENTAL DISASTER",
    url: "https://res.cloudinary.com/de4ncki8u/video/upload/v1762102275/E.D-video_z3qowq.mp4",
    site: "https://envirolmental-disaster.vercel.app",
    repo: "https://github.com/KaykyFideliss/Envirolmental-Disaster-Responsivo",
    icons: {
      site: FaLink,
      repo: FiGithub,
    },
  },
  {
    id: 4,
    title: "PORTFÓLIO 1.0",
    url: "https://res.cloudinary.com/de4ncki8u/video/upload/v1770949788/Port1.0_bvnggz.mp4",
    site: "https://portifolio-kayky-fidelis.vercel.app",
    repo: "https://github.com/KaykyFideliss/Portifolio",
    icons: {
      site: FaLink,
      repo: FiGithub,
    },
  },

];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {


    ScrollTrigger.refresh(); // 🔥 ESSENCIAL
  }, sectionRef);

  return () => ctx.revert();
}, []);



  return (
    <section
      ref={sectionRef}
      className="w-full bg-white flex flex-col justify-center overflow-x-hidden pb-20"
    >


      {/* CONTEÚDO */}
  <div className="relative flex justify-center my-10  ">
    <h1 className="text-4xl md:text-9xl font-syne font-extrabold text-primaria">
      PROJETOS
    </h1>
  </div>
     

      <div className="projects-grid w-[95%] md:w-[90%] hn mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {videos.map((video) => (
          <div key={video.id} className="  space-y-4">
            
            {/* CARD */}
            <div className="relative group rounded-2xl overflow-hidden border-2 border-terciaria/5">
              
              {video.url.endsWith(".mp4") ? (
                <video
                  className="
                    w-full aspect-video object-cover
                    transition-all duration-500
                    group-hover:scale-105
                    group-hover:blur-lg
                  "
                  src={video.url}
                  loop
                  autoPlay
                  muted
                />
              ) : (
                <iframe
                  className="
                    w-full aspect-video
                    transition-all duration-500
                    group-hover:scale-105
                    group-hover:blur-lg
                  "
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {/* OVERLAY */}
           <div
  className="
    absolute inset-0
    flex items-center justify-center gap-4
    opacity-0 group-hover:opacity-100
    transition-all duration-700
    backdrop-blur-sm
    bg-black/40
  "
>

                {/* Botão Site */}
                <link
                  href={video.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6 py-3
                    bg-white text-terciaria
                    font-syne font-bold
                    rounded-lg
                    shadow-xl
                    hover:scale-110
                    transition-transform duration-300
                  "
                >
                  Saber mais
                </link>

                {/* Botão GitHub */}
                <link
                  href={video.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-3
                    bg-terciaria text-white 
                    rounded-lg
                    hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <video.icons.repo size={20} />
                </link>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between px-4">
              <h2 className="font-syne font-extrabold text-lg md:text-2xl">
                {video.title}
              </h2>

              {/* <div className="flex items-center gap-4">
                <a
                  href={video.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-terciaria hover:text-secundaria
                    hover:scale-125 transition-transform duration-300
                  "
                >
                  <video.icons.site size={20} />
                </a>

                <a
                  href={video.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-terciaria hover:text-secundaria
                    hover:scale-125 transition-transform duration-300
                  "
                >
                  <video.icons.repo size={20} />
                </a>
              </div> */}
            </div>

          </div>
        ))}
      </div>  
  </section>
    
  );
};

export default Gallery;
