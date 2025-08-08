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
    <section
      id="who-we-are"
      className="relative text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `
          radial-gradient(ellipse at 70% 50%, rgba(0,255,157,0.15), transparent 60%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center right",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title pill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          onAnimationComplete={() => setShowText(true)}
          className="inline-block text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-md mb-6 
                    border border-[#00ff9d] 
                    shadow-[0_0_12px_#00ff9d] sm:shadow-[0_0_15px_#00ff9d] 
                    hover:shadow-[0_0_20px_#00ff9d] sm:hover:shadow-[0_0_25px_#00ff9d] 
                    text-white bg-black transition"
        >
          Who We Are
        </motion.div>

        {/* Typing text */}
        <div className="space-y-3 text-base sm:text-xl md:text-4xl font-semibold leading-snug tracking-tight text-white min-h-[6em] sm:min-h-[8em] md:min-h-[9em] break-words text-balance">
          {showText &&
            lines.map((line, i) => (
              <div key={i} className="relative block w-full overflow-hidden">
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
            staggerChildren: 0.04, // how fast letters appear
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
              textShadow: "0 0 8px rgba(0,255,157,0.8)",
              filter: "blur(2px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              color: "#ffffff",
              textShadow: "0 0 0 rgba(0,255,157,0)",
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ whiteSpace: "pre" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
