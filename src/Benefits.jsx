// src/Benefit.jsx
import React from "react";
import { motion } from "framer-motion";
import { Check, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    title: "Faster Hiring",
    description: "Skip lengthy screening. Get qualified candidates ready to interview in 48 hours.",
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    title: "Better Matches",
    description: "We pre-vet for skills and culture fit so you only meet the best people.",
  },
  {
    icon: <Clock className="w-5 h-5 text-green-500" />,
    title: "Save Time & Money",
    description: "Our flat 8% fee and done-for-you process save you weeks of effort.",
  },
];

export default function Benefit() {
  return (
    <section id="benefits" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Pill - Styled like About */}
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
          Benefits
        </motion.div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Maximize efficiency and impact
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-base md:text-lg mb-16">
          Discover the key benefits of partnering with us.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111111] rounded-2xl p-6 text-left shadow-md border border-gray-800"
            >
              <div className="bg-[#1d1d1d] p-2 rounded-md w-fit mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-center text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-center text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
