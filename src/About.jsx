// src/About.jsx
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    image: "/assets/image3.png",
    title: "Share What You Need",
    description:
      "Let us know the exact roles you're hiring for — our team gets to work immediately to find you the right talent.",
  },
  {
    image: "/assets/team.png",
    title: "Get a Dedicated Hiring Expert",
    description:
      "Your personal account manager will connect with you within 24 hours to understand your requirements in depth and strategize the best hiring approach.",
  },
  {
    image: "/assets/interview.png",
    title: "We Schedule the Interviews",
    description:
      "We shortlist and share thoroughly vetted candidates and take care of scheduling interviews — saving you hours of effort.",
  },
  {
    image: "/assets/pricing.png",
    title: "Transparent Pricing & Guarantee",
    description:
      "Our flat 8% success fee keeps costs predictable, and with a 45-day replacement guarantee, your hiring is always secure and stress-free.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Pill Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="inline-block text-sm px-5 py-1.5 rounded-md mb-6 
                     text-gray-300 bg-black 
                     border border-green-500 
                     shadow-[0_0_12px_rgba(34,197,94,0.6)] 
                     hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
                     transition duration-300"
        >
          About
        </motion.div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          How we help companies hire
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-sm md:text-lg mb-16">
          Simplifying recruitment with real experts and real results
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden 
                         shadow-[0_0_12px_rgba(255,255,255,0.05)] 
                         hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] 
                         transition duration-300"
            >
              {/* Top Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
              />

              {/* Text Content */}
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-green-400 font-semibold text-lg sm:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
