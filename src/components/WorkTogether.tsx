import React from "react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

const WorkTogether = () => {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-4xl md:text-6xl" />,
      url: "https://www.linkedin.com/in/kaykyfidelis/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-4xl md:text-6xl" />,
      url: "https://github.com/KaykyFideliss",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-4xl md:text-6xl" />,
      url: "https://www.instagram.com/fidelizx.74/",
    },
  ]

  return (
    <section className="bg-white h-screen w-full">
      <div
        className="
          w-full h-full 
          flex flex-col lg:flex-row   /* MOBILE → coluna | DESKTOP → linha */
          justify-center items-center 
          px-6 md:px-10 lg:px-16
          gap-12 lg:gap-52            /* gap menor no mobile */
        "
      >
        
        {/* TEXTO */}
        <div>
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-9xl
            text-primaria font-syne font-extrabold leading-tight
            text-center lg:text-left
          ">
            VAMOS<br />
            <span className="text-terciaria">JUNTOS</span><br />
            NESSA
          </h1>
        </div>

        {/* CONTATOS */}
        <div
          className="
            flex 
            flex-row lg:flex-col     /* MOBILE → linha | DESKTOP → coluna */
            gap-6 md:gap-8
            w-full lg:w-1/3
            justify-center
          "
        >
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 md:gap-3
                text-lg sm:text-xl md:text-3xl
                font-syne font-extrabold
                text-terciaria
                hover:text-primaria hover:scale-105
                duration-300 transition-all
              "
              aria-label={contact.name}
            >
              {contact.icon}
              
              {/* Nome opcional no mobile */}
              <span className="hidden sm:block">
                {contact.name}
              </span>
            </a>
          ))}
        </div>

      </div>
     
     
    </section>
  )
}

export default WorkTogether