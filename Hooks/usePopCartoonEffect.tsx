"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePopCartoonEffect(
  scope?: React.RefObject<HTMLElement>
) {
  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const elements = gsap.utils.toArray<HTMLElement>(".pop-cartoon-text");

      elements.forEach((el) => {

        // garante que o elemento não fique invisível
        gsap.set(el, { opacity: 1, scale: 1 });

        gsap.from(el, {
          scale: 0,
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

      });

    }, scope);

    // limpa triggers ao desmontar
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };

  }, [scope]);
}