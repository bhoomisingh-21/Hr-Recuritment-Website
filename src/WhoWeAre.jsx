import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const mobileLines = [
  "HireHelmet brings you pre-",
  "vetted tech talent Built for",
  "founders, optimized for ",
  "outcomes Less hassle.",
  "More hires",
];

const desktopLines = [
  "HireHelmet brings you pre-vetted tech talent",
  "Built for founders, optimized for outcomes",
  "Less hassle. More hires",
];

export default function WhoWeAre() {
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width on mount + resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 500); // changed from 400 → 500
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const lines = isMobile ? mobileLines : desktopLines;

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
    className="inline-block text-sm px-5 py-1.5 rounded-md mb-6 
               text-gray-300 bg-black 
               border border-green-500 
               shadow-[0_0_12px_rgba(34,197,94,0.6)]"
  >
    Who We Are
  </motion.div>

        {/* Typing lines */}
        <div
          className="
            who-we-are-text
            space-y-1
            text-lg sm:text-2xl md:text-4xl
            font-semibold
            leading-relaxed
            tracking-tight
            text-white
            break-words text-balance
          "
        >
          {showText &&
            lines.map((line, i) => (
              <div key={i} className="relative block w-full overflow-hidden">
                <TypingLine text={line} delay={i * 0.5} />
              </div>
            ))}
        </div>
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        @media (max-width: 500px) {
          .who-we-are-text {
            font-size: 1.4rem; /* ~24px */
            line-height: 1.5;
            padding-left: 4px;
            padding-right: 4px;
            text-align: center;
          }
        }

        @media (min-width: 501px) {
          .who-we-are-text {
            font-size: 2.5rem; /* bigger desktop font */
            line-height: 1.6; /* more breathing space for desktop */
          }
        }
      `}</style>
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
            staggerChildren: 0.04,
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
