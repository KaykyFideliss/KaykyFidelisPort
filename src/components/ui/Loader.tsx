"use client"

import { motion, AnimatePresence } from "framer-motion"

export default function Loader({ isReady }) {
  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-400"
        >
          <motion.svg
            width={180}
            viewBox="0 0 246 302"
            fill="none"
            className="text-black"
          >
            {[
              "M1.65906 206.269L36.6591 3.26883H80.6591L64.6591 93.2688L94.6591 3.26883L124.659 45.2688L80.6591 123.769L102.659 211.269L124.659 297.269L102.659 279.269L80.6591 261.269L59.6591 123.769L46.6591 231.269L1.65906 206.269Z",
              "M102.659 133.269L136.659 297.269L163.659 279.269L145.659 185.269H173.659L191.659 148.269H136.659V118.269H211.659L242.659 51.2688L136.659 59.2688L102.659 133.269Z",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="currentColor"
                strokeWidth={3}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            ))}
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}