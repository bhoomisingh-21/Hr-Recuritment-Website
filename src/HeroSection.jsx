import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import './index.css';
import { motion } from "framer-motion";

// Animation config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Particle dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 10 + 10;
          return (
            <div
              key={i}
              className="dot absolute bg-white rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          );
        })}
      </div>

      {/* Glow Corners */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500 blur-[150px] opacity-40 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-500 blur-[150px] opacity-30 z-0"></div>

      {/* Header */}
      <header className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 w-[95%] max-w-6xl 
        rounded-md bg-black/70 border border-white/10 backdrop-blur-md 
        px-6 py-1.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
          <span className="text-white text-xl font-semibold tracking-wide">Helmet</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
  <a href="#who-we-are"className="hover:text-green-400 transition">How It Works</a>
  <a href="#about" className="hover:text-green-400 transition">About Us</a>
   <a href="benefits" className="hover:text-green-400 transition">Benefits</a>
  <a href="#contact" className="hover:text-green-400 transition">Contact</a>
</nav>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>

        {/* Desktop CTA */}
        <a
          href="#get-started"
          className="hidden md:flex relative px-5 py-2 text-white bg-black rounded-md text-sm font-medium z-10 
            border border-green-500 
            shadow-[0_0_12px_rgba(34,197,94,0.6)] 
            hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
            transition overflow-hidden group w-36 h-11 items-center justify-center"
        >
          <span className="absolute flex items-center gap-1 transition-all duration-700 ease-in-out group-hover:-translate-y-10">
            Get Started <ArrowUpRight className="w-4 h-4 text-white" />
          </span>
          <span className="absolute flex items-center gap-1 translate-y-10 transition-all duration-700 ease-in-out group-hover:translate-y-0">
            Get Started <ArrowUpRight className="w-4 h-4 text-white" />
          </span>
        </a>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl 
          bg-black/80 border border-white/10 backdrop-blur-md rounded-md px-6 py-4 z-20 flex flex-col gap-4 text-white text-sm font-medium">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">How It Works</a>
    <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">About Us</a>
    <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">Benefits</a>
    <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">Contact</a>
          <a
  href="#get-started"
  onClick={() => setMenuOpen(false)}
  className="mt-2 inline-block text-center px-5 py-2 bg-green-500 text-white rounded-md font-medium"
>
  Get Started
</a>
        </div>
      )}

      {/* Hero Content */}
     <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center"
>
  {/* 💡 Updated Badge — now directly above the headline */}
<motion.div
  variants={item}
  className="inline-block bg-zinc-900 text-gray-300 text-sm px-5 py-1.5 rounded-md mb-2 select-none"
>
  Helmet – Tech Recruitment Partner
</motion.div>

<motion.h2 variants={item} className="text-3xl md:text-6xl font-bold leading-tight">
  Power Your Growth with <br /> Top Tech Talent.
</motion.h2>


        <motion.p variants={item} className="text-s mt-4 max-w-xl text-gray-300">
          From sourcing to onboarding, we streamline hiring for software engineers, data scientists, and security experts.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4">
       <button className="relative px-6 py-3 text-white bg-black rounded-lg font-medium z-10 
  border border-green-500 
  shadow-[0_0_12px_rgba(34,197,94,0.6)] 
  hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
  transition overflow-hidden group h-12 w-36 flex items-center justify-center">

  {/* Layer 1: Move up on hover */}
  <span className="absolute flex items-center gap-1 transition-all duration-700 ease-in-out group-hover:-translate-y-12">
    Hire Now <ArrowUpRight className="w-4 h-4" />
  </span>

  {/* Layer 2: Move in on hover */}
  <span className="absolute flex items-center gap-1 translate-y-12 transition-all duration-700 ease-in-out group-hover:translate-y-0">
    Hire Now <ArrowUpRight className="w-4 h-4" />
  </span>
</button>

          <button className="relative px-6 py-3 text-white bg-black rounded-lg font-medium z-10 
            border border-green-500 
            shadow-[0_0_12px_rgba(34,197,94,0.6)] 
            hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
            transition overflow-hidden group h-12 w-36 flex items-center justify-center">

            <span className="absolute transition-all duration-700 ease-in-out group-hover:-translate-y-12">
              See Plans
            </span>
            <span className="absolute translate-y-12 transition-all duration-700 ease-in-out group-hover:translate-y-0">
              See Plans
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );

  
};




export default HeroSection;
