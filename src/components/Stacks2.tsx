import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function StacksPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stacks = [
    { title: "React", desc: "Interfaces dinâmicas, componentização e alta performance." },
    { title: "Tailwind", desc: "Estilização moderna, responsiva e altamente produtiva." },
    { title: "GSAP", desc: "Animações fluidas, cinematográficas e interativas." },
    { title: "Next.js", desc: "Renderização otimizada, SEO e aplicações escaláveis." },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-6">
      <div ref={containerRef} className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Minhas Stacks
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="stack-card group rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-3 group-hover:translate-x-1 transition-transform">
                {stack.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stack.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
