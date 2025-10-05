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
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// CTA Button
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

  const roles = [
    "/assets/Group 1.svg",
    "/assets/Group 2.svg",
    "/assets/Group 4.svg",
    "/assets/Group 6.svg",
    "/assets/Designer.svg",
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* === HEADER === */}
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

        {/* Mobile Header */}
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
        className={`fixed top-0 right-0 h-full w-full bg-black/90 text-white z-50 
          transform transition-transform duration-300 ${
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
            <a key={link.name} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
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
        className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen 
                   pt-3 sm:pt-40 lg:pt-40 gap-3 sm:gap-4 z-10"
      >
        {/* Avatars + stars + text */}
        <motion.div
          variants={item}
          className="flex flex-col items-center text-gray-300 text-sm relative -top-8 sm:top-4" // 👈 on desktop slightly down
        >
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2">
            {/* Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-2 items-center">
                <img
                  src="https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg"
                  alt=""
                  className="w-7 h-7 rounded-full border border-black"
                />
                <img
                  src="https://media.istockphoto.com/id/1036079862/photo/i-have-all-the-determination-to-succeed-big.jpg?s=612x612&w=0&k=20&c=AJGXyAarUUDQbgh_LhuqfHXeZQtGZy9P-y7KMb5jkAo="
                  alt=""
                  className="w-7 h-7 rounded-full border border-black"
                />
                <img
                  src="https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s="
                  alt=""
                  className="w-7 h-7 rounded-full border border-black"
                />
                <img
                  src="https://img.freepik.com/free-photo/african-american-business-woman-by-window_1303-10869.jpg"
                  alt=""
                  className="w-7 h-7 rounded-full border border-black"
                />
              </div>

              {/* Stars — perfectly aligned */}
              <span className="ml-2 text-base sm:text-lg leading-none flex items-center justify-center">
                ★★★★★
              </span>
            </div>

            {/* Text below stars */}
            <span className="block mt-0.5 text-xs sm:text-sm text-gray-400 sm:mt-1">
              200+ businesses scaled
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-[32px] sm:text-6xl font-semibold leading-snug mb-3 sm:mb-4"
          style={{ fontFamily: "'Uncut Sans', sans-serif", fontWeight: 600 }}
        >
          Power your <span className="italic">growth</span> <br /> with helmet's top tech talent
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl mb-6 sm:mb-6"
          style={{ fontFamily: "'Uncut Sans', sans-serif" }}
        >
          From sourcing to onboarding, we streamline hiring for techies, data analysts, security
          experts, product managers, and designers.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="relative w-full flex flex-col items-center justify-center">
          <CTAButton
            href="#contact"
            label="Book a call"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          />
          <div className="glow-below"></div>
        </motion.div>
      </motion.div>

      {/* Roles Section */}
      <div className="w-full -mt-7 sm:mt-32 relative z-20">
        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-sm sm:text-base tracking-[0.2em] uppercase font-semibold text-gray-300 pb-3"
        >
          ROLES WE OFFER
          <span className="absolute left-1/2 bottom-0 w-12 h-[2px] bg-gradient-to-r from-green-400 to-green-600 -translate-x-1/2"></span>
        </motion.h3>

        <div className="overflow-hidden relative w-full py-6">
          <div className="flex w-max animate-marquee gap-24 items-center">
            {[...roles, ...roles].map((role, index) => (
              <img
                key={index}
                src={role}
                alt="role"
                className="w-auto object-contain opacity-90 hover:opacity-100 transition h-8 sm:h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
