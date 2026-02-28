
"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
const Acqualife = () => {

  const infos = [
    {
      title: "ACQUALIFE",
      description: "O Acqualife é um sistema automatizado que capta, filtra e reutiliza água da chuva para fins não potáveis, como descarga, limpeza e irrigação, em residências, promovendo economia, sustentabilidade e consciência ambiental.",
        icons: {
            site: FaLink,
            repo: FiGithub,
          },
    },

      
]
  return (
   <section className='h-screen w-full bg-WHITE items-center justify-center flex mt-20  gap-8'>
    
    <div className=' h-full  gap-8 '>
      
      <div className='flex items-center justify-center gap-20'>
      
      <div className="w-2/4  text-center ">
        <h1 className='text-6xl font-syne mb-8 font-extrabold text-terciaria'>ACQUALIFE</h1>  
        <p className='text-terciaria font-syne text-lg    '>O Acqualife é um sistema automatizado que capta, filtra e reutiliza água da chuva para fins não potáveis, como descarga, limpeza e irrigação, em residências, promovendo economia, sustentabilidade e consciência ambiental.</p>
        <div>
          {infos.map((info) => (
            <div key={info.title}>
              <div className='w-20 bg-primaria rounded-lg flex items-center justify-center mt-8'>
              <info.icons.site className="text-terciaria mr-2 m-2" />
              </div>
              <info.icons.repo className="text-terciaria mr-2  bg-primaria m-2" />
            </div>
          ))}
        </div>
      </div>
      <div>

      </div>
</div>
    </div>

   </section>
  )
}

export default Acqualife
