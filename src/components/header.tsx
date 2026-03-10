"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoColor, setLogoColor] = useState<"white" | "dark">("dark")

  const menuItems = [
    { label: "HOME", id: "home" },
    { label: "SOBRE MIM", id: "about" },
    { label: "CARREIRA", id: "timeline" },
    { label: "PROJETOS", id: "projects" },
    { label: "STACKS", id: "stacks" },
    { label: "CONTATOS", id: "contact" },
  ]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)

  if (!element) return

  const headerOffset = 0
  const elementPosition = element.getBoundingClientRect().top + window.scrollY
  const offsetPosition = elementPosition - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })

  setMenuOpen(false)
}

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 300)

      let newColor: "white" | "dark" = "dark"

      if (currentScroll > 2) {
        newColor = "white"
      }

      const headerOffset = 100

      const masonry = document.getElementById("masonry-gallery")
      if (masonry) {
        const rect = masonry.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          const progress = (headerOffset - rect.top) / rect.height
          if (progress > 0.65) newColor = "dark"
        }
      }

      const helmets = document.getElementById("helmets")
      if (helmets) {
        const rect = helmets.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "white"
        }
      }

      const social = document.getElementById("social-section")
      if (social) {
        const rect = social.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "dark"
        }
      }

      const techSpecs = document.getElementById("tech-specs")
      if (techSpecs) {
        const rect = techSpecs.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "dark"
        }
      }

      setLogoColor(newColor)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-start mix-blend-difference"
          >
            <button onClick={() => scrollToSection("home")}>
              <motion.img
                src="/images/logo/Logo.png"
                alt="Logo"
                className={`h-12 transition-all duration-300 ${
                  logoColor === "dark" ? "brightness-0 invert" : ""
                }`}
              />
            </button>
          </motion.div>

          {/* MENU BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mix-blend-difference"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-lorenzo-dark/80 border  rounded-lg transition-colors text-primaria hover:text-terciaria px-3 py-2.5"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6 bg-white hover:scale-105 hover:text-terciaria" /> : <Menu className="w-6 h-6  hover:scale-105 hover:text-terciaria "  />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white backdrop-blur-xl z-40 flex items-center justify-center"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-6 text-4xl md:text-6xl font-black uppercase text-blue-400">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.1, color: "#ffffff" }}
                    variants={{
                      open: { opacity: 1, y: 0, rotate: 0 },
                      closed: { opacity: 0, y: 20, rotate: -5 },
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="inline-block hover:text-terciaria transition-colors duration-300 hover:scale-110 transform"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}