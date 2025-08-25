import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./index.css";
import { motion } from "framer-motion";

// Framer Motion configs
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Reusable CTA Button
const CTAButton = ({ label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative px-8 py-4 text-white bg-black rounded-full font-medium z-10 
      border border-green-500 
      shadow-[0_0_12px_rgba(34,197,94,0.6)] 
      hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
      transition overflow-hidden group flex items-center justify-center h-14 w-44"
  >
    <span className="absolute flex items-center gap-2 transition-all duration-700 ease-in-out group-hover:-translate-y-14">
      {label} <ArrowUpRight className="w-5 h-5" />
    </span>
    <span className="absolute flex items-center gap-2 translate-y-14 transition-all duration-700 ease-in-out group-hover:translate-y-0">
      {label} <ArrowUpRight className="w-5 h-5" />
    </span>
  </a>
);


// Reusable Glow Block
const Glow = ({ position, gradient, top }) => (
  <div
    className={`absolute ${position} w-[900px] h-[180px] z-0 pointer-events-none`}
    style={{ top, background: gradient, filter: "blur(120px)" }}
  />
);

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      window.removeEventListener("scroll", handleScroll);
      root.style.scrollBehavior = prev;
    };
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#who-we-are" },
    { name: "About Us", href: "#about" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const headerEl = document.querySelector("header");
    const headerOffset = headerEl ? headerEl.getBoundingClientRect().height + 8 : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  // Role images for “Roles We Offer”
  const roles = [
    "/assets/mob app dev.png",
    "/assets/web developer.png",
    "/assets/Product manger.png",
    "/assets/security expert.png",
    "/assets/Data scientist.png",
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Particle dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 12 + 8;
          const delay = Math.random() * 4;
          return (
            <div
              key={i}
              className="dot absolute bg-white rounded-full opacity-60"
              style={{
                top: `${90 + Math.random() * 20}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Glows */}
      <Glow
        position="left-0"
        top={window.innerWidth < 640 ? "100px" : "0"}
        gradient={
          window.innerWidth < 640
            ? "linear-gradient(135deg, rgba(34,197,94,0.4) 0%, rgba(34,197,94,0.12) 50%, rgba(0,0,0,0) 100%)"
            : "linear-gradient(135deg, rgba(34,197,94,0.7) 0%, rgba(34,197,94,0.3) 50%, rgba(0,0,0,0) 100%)"
        }
      />
      <Glow
        position="bottom-0 right-0"
        gradient="linear-gradient(315deg, rgba(34,197,94,0.45) 0%, rgba(34,197,94,0.18) 50%, rgba(34,197,94,0) 100%)"
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-30 
          w-full sm:w-[95%] max-w-6xl 
          rounded-none sm:rounded-lg 
          px-3 sm:px-6 py-2 sm:py-3 
          flex justify-between items-center 
          transition-all duration-300 
          border border-white/10 sm:mt-4`}
        style={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Desktop Logo + Nav */}
        <div className="hidden sm:flex items-center space-x-3">
          <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-white text-xl font-bold tracking-normal font-poppins">
            HireHelmet
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="hidden sm:flex gap-8 text-base font-medium text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex">
          <CTAButton
            href="#who-we-are"
            label="Get Started"
            onClick={(e) => handleSmoothScroll(e, "#who-we-are")}
          />
        </div>

        {/* Mobile Logo + Hamburger */}
        <div className="w-full sm:hidden flex items-center pl-4 pr-0">
          <img src="/assets/logo.png" alt="Logo" className="w-9 h-9 object-contain" />
          <div className="ml-auto">
            <button onClick={() => setMenuOpen(true)} className="p-2" aria-label="Toggle Menu">
              <Menu className="text-white w-9 h-9" strokeWidth={1} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black/90 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-6">
            <CTAButton
              href="#who-we-are"
              label="Get Started"
              onClick={(e) => handleSmoothScroll(e, "#who-we-are")}
            />
          </div>
        </nav>
      </div>

 
      
       {/* Hero Content */}
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="flex flex-col items-center justify-center text-center px-6 min-h-screen -mt-16 sm:mt-0 sm:pt-32"
>

  <motion.h1
    variants={item}
    className="text-[38px] sm:text-5xl lg:text-6xl font-semibold leading-snug mb-4"
    style={{ fontFamily: "'Uncut Sans', sans-serif", fontWeight: 600 }}
  >
    Power Your Growth With <br /> Top Tech Talent
  </motion.h1>

  <motion.h2
    variants={item}
    className="text-3xl sm:text-4xl lg:text-4xl font-medium text-gray-400 mb-4"
    style={{ fontFamily: "'Uncut Sans', sans-serif", fontWeight: 500 }}
  >
    We’ve Got You.
  </motion.h2>
<br />
  <motion.p
    variants={item}
    className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl mb-8"
    style={{ fontFamily: "'Uncut Sans', sans-serif" }}
  >
    From Sourcing to on-boarding We streamline hiring for techies, data experts, product managers, and designers.
  </motion.p>

  <motion.div variants={item}>
    <CTAButton
      href="#contact"
      label="Start Hiring"
      onClick={(e) => handleSmoothScroll(e, "#contact")}
    />
  </motion.div>
</motion.div>


      {/* Roles We Offer */}
      <div className="w-full pt-0 sm:pt-9 -mt-32 sm:-mt-10 relative z-20">

        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-sm sm:text-base tracking-[0.2em] uppercase font-semibold text-gray-300 pb-3"
        >
          ROLES WE OFFER
          <span className="absolute left-1/2 bottom-0 w-12 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 -translate-x-1/2"></span>
        </motion.h3>

        <div className="overflow-hidden py-6 relative w-full">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex animate-scroll gap-8"
          >
            {[...roles, ...roles, ...roles].map((role, index) => (
              <img
                key={index}
                src={role}
                alt="role"
                className="h-12 sm:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition mx-4"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
