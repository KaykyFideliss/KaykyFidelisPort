  import React from "react";
  import { FiGithub } from "react-icons/fi";
  import { FaLink } from "react-icons/fa";
  import { Link } from "react-router-dom";

  import { motion } from "framer-motion";
  import usePopCartoonEffect from "../../Hooks/usePopCartoonEffect";

  const videos = [
    {
      id: 1,
      title: "ACQUALIFE",
      url: "/video/acqualifeVideo.mp4",
      site: "https://acqualife.vercel.app",
      path: "/Acqualife",
      repo: "https://github.com/KaykyFideliss/Website-Acqualife",
      icons: {
        site: FaLink,
        repo: FiGithub,
      },
    },
    {
      id: 2,
      title: "HEALTHY WALLET",
      url: "/video/Healthy.mp4",
      site: "https://healthy-wallet.vercel.app",
      path: "/Healthy",
      repo: "https://github.com/KaykyFideliss/healthy-wallet-project",
      icons: {
        site: FaLink,
        repo: FiGithub,
      },
    },
    {
      id: 3,
      title: "ENVIRONMENTAL DISASTER",
      url: "/video/Disaster.mp4",
      site: "https://envirolmental-disaster.vercel.app",
      path: "/Disaster",
      repo: "https://github.com/KaykyFideliss/Envirolmental-Disaster-Responsivo",
      icons: {
        site: FaLink,
        repo: FiGithub,
      },
    },
    {
      id: 4,
      title: "PORTFÓLIO 1.0",
      url: "/video/Port1.0.mp4",
      site: "https://portifolio-kayky-fidelis.vercel.app",
      path: "/Portfolio",
      repo: "https://github.com/KaykyFideliss/Portifolio",
      icons: {
        site: FaLink,
        repo: FiGithub,
      },
    },
  ];

  const Gallery = () => {

 usePopCartoonEffect();

    return (
      <section className="w-full bg-white flex flex-col justify-center overflow-x-hidden pb-20" id="projects">

        {/* TÍTULO */}
        <div className="relative flex justify-center my-10">
          <h1 className="text-4xl md:text-9xl font-syne font-extrabold text-primaria ">
            PROJETOS
          </h1>
        </div>

        {/* GRID */}
        <div className="projects-grid w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 ">
          {videos.map((video) => (
            <div key={video.id} className="space-y-4">
              
              {/* CARD */}
              <motion.div
  layoutId={`project-${video.id}`}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4 }}
  className="relative group rounded-2xl overflow-hidden border-2 border-terciaria/5"
>
                
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
  playsInline
  webkit-playsinline="true"
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
                  {/* BOTÃO SABER MAIS */}
                  <Link
                    to={video.path}
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
                  </Link>

                  {/* BOTÃO GITHUB */}
                  <a
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
                  </a>
                </div>
              </motion.div>

              {/* FOOTER */}
              <div className="flex items-center justify-between px-4">
                <h2 className="font-syne font-extrabold text-lg md:text-2xl ">
                  {video.title}
                </h2>
              </div>

            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Gallery; 