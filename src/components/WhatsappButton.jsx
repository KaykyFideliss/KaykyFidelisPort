import { FaWhatsapp } from "react-icons/fa"
import { useState, useEffect } from "react"

function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight

      if (window.scrollY > heroHeight * 0.8) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/5531995156342?text=Olá%20vim%20pelo%20seu%20Portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.%20Podemos%20conversar?"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 justify-end z-50 ${
        show ? "animate-popIn" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-primaria border-2 border-terciaria hover:bg-terciaria  text-terciaria hover:text-primaria p-4 rounded-full shadow-xl  hover:scale-110 transition-transform duration-500">
        <FaWhatsapp className="text-2xl md:text-3xl " />
      </div>
    </a>
  )
}

export default WhatsAppButton