import React from "react";
import { CgFileDocument } from "react-icons/cg";


const Footer = () => {
  return (
    
    <section className="mb-20 w-full bg-white flex items-center justify-center ">
      
      
      {/* Main Card */}
      <div className="w-11/12 h-5/6 bg-primaria rounded-[40px] px-8 md:px-16 py-10 flex flex-col justify-between">
        
        {/* HEADER */}
        <div className="flex justify-between items-center my-10">
          <h1 className="text-  xl md:text-3xl font-extrabold font-syne text-white">
            KAYKY FIDELIS{" "}
            <span className="text-white/50">PORTFÓLIO</span>
          </h1>

          <button className="px-6 md:px-10 h-12 rounded-xl border border-white/20 bg-white text-primaria hover:text-white duration-300 hover:bg-secundaria hover:border-white font-bold flex items-center gap-2 hover:scale-105 transition">
            <CgFileDocument size={20} />
            Resume
          </button>
        </div>

        {/* CENTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left">
          
          {/* LEFT MENU */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/60 mb-6">
              LINKS / MENU
            </p>

            <ul className="space-y-3">
              {["HOME", "ABOUT", "SKILLS", "PROJECTS", "YOUTUBE"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-2xl md:text-3xl font-extrabold text-white hover:translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center py-10">
            
        <svg
  viewBox="0 0 260 300"
  xmlns="http://www.w3.org/2000/svg"
  className="w-36 md:w-64 lg:w-44 fill-white/90 drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
>
  <path d="M1.65906 206.269L36.6591 3.26883H80.6591L64.6591 93.2688L94.6591 3.26883L124.659 45.2688L80.6591 123.769L102.659 211.269L124.659 297.269L102.659 279.269L80.6591 261.269L59.6591 123.769L46.6591 231.269L1.65906 206.269Z" />
  
  <path d="M102.659 133.269L136.659 297.269L163.659 279.269L145.659 185.269H173.659L191.659 148.269H136.659V118.269H211.659L242.659 51.2688L136.659 59.2688L102.659 133.269Z" />
</svg>



            {/* <img
              src="/images/1.png"
              alt="Profile"
              className="w-80 md:w-[420px] lg:w-[500px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
            /> */}
          </div>

          {/* RIGHT SOCIAL */}
          <div className="md:text-right text-center pb-10 md:pb-0">
            <p className="text-xs tracking-[0.3em] text-white/60 mb-6">
              CONNECT / SOCIAL
            </p>

            <ul className="space-y-3">
              {["LINKEDIN", "GITHUB",  "INSTAGRAM"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-xl md:text-3xl font-extrabold text-white hover:-translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* FOOTER STRIP */}
        <div className="flex justify-between text-xs text-white/60 pt-6 border-t border-white/10">
          <span>© 2026 KAYKY FIDELIS · BUILDING FOR THE FUTURE.</span>
          <span>LOCAL · 13:07</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
