import React, { useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "Helmet brings you pre-vetted tech talent.",
  "Built for founders, optimized for outcomes.",
  "Less hassle. More hires.",
];

export default function WhoWeAre() {
  const [showText, setShowText] = useState(false);

  return (
    <section id="who-we-are" className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title pill */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
  onAnimationComplete={() => setShowText(true)}
  className="inline-block text-sm px-4 py-1.5 rounded-md mb-6 
             border border-green-500 
             shadow-[0_0_12px_rgba(34,197,94,0.6)] 
             hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
             text-white bg-black transition"
>
  Who We Are
</motion.div>

        {/* Typing text */}
        <div className="space-y-3 text-xl sm:text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-white min-h-[8em] sm:min-h-[9em]">
          {showText &&
            lines.map((line, i) => (
              <div key={i} className="relative block w-full overflow-hidden break-words text-balance">
                {/* Glow text behind */}
                <div
                  aria-hidden
                  className="absolute inset-0 text-[#00ff9d] blur-sm opacity-30 whitespace-pre-wrap pointer-events-none select-none"
                >
                  {line}
                </div>

                {/* Animated line */}
                <TypingLine text={line} delay={i * 0.5} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function TypingLine({ text, delay = 0 }) {
  const characters = text.split("");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.004,
          },
        },
      }}
      className="inline-block whitespace-pre-wrap relative"
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              y: 4,
              color: "#00ff9d",
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              color: "#ffffff",
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.12, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
