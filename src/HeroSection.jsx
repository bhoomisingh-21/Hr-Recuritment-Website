import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./index.css";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-30 w-[95%] max-w-6xl 
        rounded-lg px-6 py-3 flex justify-between items-center transition-all duration-300 border border-white/10`}
        style={{
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.4)"
            : "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Desktop Logo + Nav */}
        <div className="hidden md:flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="Helmet Logo"
            className="w-9 h-9 object-contain"
          />
          <h1 className="text-white text-2xl font-semibold">Hire Helmet</h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white">
          {[
            { name: "How It Works", href: "#who-we-are" },
            { name: "About Us", href: "#about" },
            { name: "Benefits", href: "#benefits" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#who-we-are"
          className="hidden md:flex relative px-5 py-2 text-white bg-black rounded-md text-sm font-medium z-10 
            border border-green-500 
            shadow-[0_0_12px_rgba(34,197,94,0.6)] f
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

        {/* Mobile Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:hidden">
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Helmet Logo"
              className="w-9 h-9 object-contain"
            />
          </div>
          <button onClick={() => setMenuOpen(true)} aria-label="Toggle Menu">
            <Menu className="text-white w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6">
          <a href="#who-we-are" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>
            Benefits
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
  href="#get-started"
  onClick={() => setMenuOpen(false)}
  className="mt-4 relative px-5 py-2 text-white bg-black rounded-md text-sm font-medium z-10 
    border border-green-500 
    shadow-[0_0_12px_rgba(34,197,94,0.6)] 
    hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
    transition overflow-hidden group flex items-center justify-center h-11"
>
  <span className="absolute flex items-center gap-1 transition-all duration-700 ease-in-out group-hover:-translate-y-10">
    Get Started <ArrowUpRight className="w-4 h-4 text-white" />
  </span>
  <span className="absolute flex items-center gap-1 translate-y-10 transition-all duration-700 ease-in-out group-hover:translate-y-0">
    Get Started <ArrowUpRight className="w-4 h-4 text-white" />
  </span>
</a>
        </nav>
      </div>

      {/* Hero Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-28"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-zinc-900/80 text-gray-300 text-xs sm:text-sm px-4 py-1.5 rounded-md mb-3 border border-white/10 backdrop-blur-md"
        >
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-4 w-4 object-contain"
          />
          Hire Helmet – Tech Recruitment Partner
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-6xl font-bold leading-tight text-white"
        >
          Power Your Growth with Hire Helmet's<br /> Top Tech Talent.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-sm mt-4 max-w-xl text-gray-300 font-medium"
        >
          From sourcing to onboarding, we streamline hiring for software
          engineers, data scientists, and security experts.
        </motion.p>

        {/* CTA */}
       <motion.div variants={item} className="mt-8 flex justify-center">
  <a
    href="#contact"
    className="relative px-6 py-3 text-white bg-black rounded-lg font-medium z-10 
    border border-green-500 
    shadow-[0_0_12px_rgba(34,197,94,0.6)] 
    hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
    transition overflow-hidden group h-12 w-36 flex items-center justify-center"
  >
    <span className="absolute flex items-center gap-1 transition-all duration-700 ease-in-out group-hover:-translate-y-12">
      Hire Now <ArrowUpRight className="w-4 h-4" />
    </span>
    <span className="absolute flex items-center gap-1 translate-y-12 transition-all duration-700 ease-in-out group-hover:translate-y-0">
      Hire Now <ArrowUpRight className="w-4 h-4" />
    </span>
  </a>
</motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
