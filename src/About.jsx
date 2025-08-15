import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    image: "/assets/row 1.png",
    title: "Share What You Need",
    description:
      "Let us know the exact roles you're hiring for our team gets to work immediately to find you the right talent.",
  },
  {
    image: "/assets/row 2.png",
    title: "Get a Dedicated Hiring Expert",
    description:
      "Your account manager will connect within 24 hours to understand your needs and plan the best hiring strategy.",
  },
  {
    image: "/assets/row 3.png",
    title: "We Schedule the Interviews",
    description:
      "We shortlist and share thoroughly vetted candidates and take care of scheduling interviews saving you hours of effort.",
  },
  {
    image: "/assets/last image.png",
    title: "Transparent Pricing & Guarantee",
    description:
      "Our flat 8% success fee keeps costs predictable, and with a 45-day replacement guarantee, your hiring is always secure and stress-free.",
  },
  {
    image: "/assets/last second.png",
    title: "Ongoing Support",
    description:
      "Even after placement, our team is here to ensure smooth onboarding and long-term success for both you and the hire.",
  },
];

export default function About() {
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);

  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-[1400px] mx-auto text-center px-6">
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
          How we help companies 
        </h2>

        {/* Subheading */}
        <p className="text-gray-300 font-medium text-sm md:text-lg mb-16">
          Simplifying recruitment with real experts and real results
        </p>

        {/* First Row */}
        <div className="flex justify-center gap-8 flex-wrap mb-8">
          {firstRow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0F0F0F] border border-gray-800 rounded-2xl shadow-lg 
                         overflow-hidden flex flex-col hover:shadow-green-500/20 
                         transition-all duration-300 w-full sm:w-[48%] lg:w-[30%]"
            >
              {/* Image Area - First Row */}
              <div className="w-full h-52 sm:h-72 sm:bg-black sm:flex sm:items-center sm:justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                   className="w-full h-full object-contain sm:w-auto sm:h-auto sm:max-h-60 sm:object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col text-left">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-8 flex-wrap">
          {secondRow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0F0F0F] border border-gray-800 rounded-2xl shadow-lg 
                         overflow-hidden flex flex-col hover:shadow-green-500/20 
                         transition-all duration-300 w-full sm:w-[48%] lg:w-[46%]"
            >
              {/* Image Area - Second Row */}
              <div className="w-full h-64 sm:h-72 bg-black flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center sm:w-auto sm:h-auto sm:max-h-60 sm:object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col text-left">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed flex-1">
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
