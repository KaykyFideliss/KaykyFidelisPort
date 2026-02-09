import { motion } from "framer-motion"


export default function KFLoader() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <motion.svg
          width={200}
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
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
