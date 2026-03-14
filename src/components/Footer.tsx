import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {

  const handleScroll = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};


  const menuItems = [
    { label: "HOME", id: "home" },
    { label: "SOBRE MIM", id: "about" },
    { label: "CARREIRA", id: "timeline" },
    { label: "PROJETOS", id: "projects" },
    { label: "STACKS", id: "stacks" },
    { label: "CONTATOS", id: "contact" },
  ];

  return (
    <footer className="font-zalando rounded-lg w-full bg-white">
      <div className="w-full overflow-hidden px-4 md:px-6">
        <div className="max-w-7xl mx-auto py-10">

          {/* SEÇÕES SUPERIORES */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center md:items-start text-center md:text-left">

            {/* LINKS */}
            <div className="flex flex-col gap-2 min-w-[150px] font-syne font-bold  items-start ">
              <h1 className="text-primaria text-base font-extrabold">VEJA AGORA</h1>


             {menuItems.map((item) => (
  <button
    key={item.id}
    onClick={() => handleScroll(item.id)}
    className="text-primaria hover:scale-105  duration-150 hover:text-terciaria text-base font-bold block transition whitespace-nowrap"
  >
    {item.label}
  </button>
))}
            </div>

            {/* LOGO */}
            <div className="flex flex-col items-center gap-4 max-w-xs mx-4">
              <svg
                width={200}
                viewBox="0 0 246 302"
                fill="#fff"
                stroke="#fff"
                className="text-terciaria"
              >
                <path
                  d="M1.65906 206.269L36.6591 3.26883H80.6591L64.6591 93.2688L94.6591 3.26883L124.659 45.2688L80.6591 123.769L102.659 211.269L124.659 297.269L102.659 279.269L80.6591 261.269L59.6591 123.769L46.6591 231.269L1.65906 206.269Z"
                  stroke="currentColor"
                  strokeWidth={3}
                  fill="#3D94FF"
                />
                <path
                  d="M102.659 133.269L136.659 297.269L163.659 279.269L145.659 185.269H173.659L191.659 148.269H136.659V118.269H211.659L242.659 51.2688L136.659 59.2688L102.659 133.269Z"
                  stroke="currentColor"
                  strokeWidth={3}
                  fill="#3D94FF"
                />
              </svg>
            </div>

            {/* CONTATOS */}
            <div className="flex flex-col gap-4 items-center md:items-start min-w-[150px]">
               <h1 className="text-primaria text-base font-extrabold">CONTATOS</h1>

              <a
                href="https://www.linkedin.com/in/kaykyfidelis/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primaria hover:scale-105 hover:text-terciaria py-1 transition whitespace-nowrap"
              >
                <FaLinkedin className="h-7 w-7 " />
                <span className="text-base font-bold">LINKEDIN</span>
              </a>

              <a
                href="https://github.com/KaykyFideliss"
                target="_blank"
                rel="noopener noreferrer"
                 className="flex items-center gap-2 text-primaria hover:scale-105 hover:text-terciaria py-1 transition whitespace-nowrap"
              >
                <FaGithub className="h-7 w-7 " />
                <span className="text-base font-bold">GITHUB</span>
              </a>

              <a
                href="https://www.instagram.com/fidelizx.74/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primaria hover:scale-105 hover:text-terciaria py-1 transition whitespace-nowrap"
              >
                <FaInstagram className="h-7 w-7 " />
                <span className="text-base font-bold">INSTAGRAM</span>
              </a>
            </div>

          </div>

          {/* LINHA */}
          <hr className="border-primaria/20 my-8 w-full" />

  

          

          {/* HERO TEXTO GRANDE
          <div className="relative w-full mt-12 md:mt-16 px-2 ">
            <div className="relative flex justify-center items-center w-full overflow-visible">

              <div className="relative w-full text-center">
                <h1 className="relative z-10 text-primaria  font-extrabold 
                  leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[90px] 2xl:text-[110px]
                  whitespace-nowrap
                  break-words font-syne overflow-visible">
                  KAYKY FIDELIS
                </h1>

                <div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                  w-[95%] max-w-6xl h-[1.5em] 
                  bg-gradient-to-b from-white/70 via-black/50 to-transparent 
                  blur-xl z-0"
                />
              </div>

            </div>
          </div> */}

        </div>
      </div>
    </footer>
  );
}