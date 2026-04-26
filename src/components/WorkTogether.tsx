import React from "react"
import { FaInstagram, FaWhatsapp,FaLinkedin, FaGithub } from "react-icons/fa"

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
    {
  name: "WhatsApp",
  icon: <FaWhatsapp className="text-4xl md:text-6xl" />,
  url: "https://wa.me/5531995156342?text=Olá%20vim%20pelo%20seu%20Portfólio%20e%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.%20Podemos%20conversar?",
}
  ]

  return (
    <section className="bg-white h-screen w-full "
    id="contact">
     <div
  className="
    w-full h-full
    max-w-7xl mx-auto
    flex flex-col lg:flex-col
    justify-center items-center
    px-6 md:px-10 lg:px-16
    gap-12 lg:gap-52
  "
>
        
        {/* TEXTO */}
        <div>
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl
            text-primaria font-syne font-extrabold leading-tight
            text-center lg:text-center uppercase mb-20 
          ">
            VAMOS <span className="text-terciaria">JUNTOS</span> nessa 
          </h1>

               {/* CONTATOS */}
        <div
          className="
            flex 
            flex-row      
            gap-6 md:gap-8
            w-full 
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

    

      </div>
     
     
    </section>
  )
}

export default WorkTogether