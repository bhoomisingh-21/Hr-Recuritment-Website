import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Green radial background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-green-500 blur-[180px] opacity-20" />
      </div>

      {/* Pill centered at the top */}
      <div className="w-full flex justify-center items-center mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-block text-sm px-5 py-1.5 rounded-md 
                     text-gray-300 bg-black 
                     border border-green-500 
                     shadow-[0_0_12px_rgba(34,197,94,0.6)] 
                     hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] 
                     transition duration-300"
        >
          Contact
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:block items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-xl md:text-5xl font-bold leading-tight mb-4">
            Ask whatever you have in your mind
          </h2>
          <p className="text-gray-300 text-sm md:text-lg mb-10">
            Whether you have questions or are ready to discuss your hiring needs,
            we’re here to help. Reach out today.
          </p>

          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-400" />
              <span>hi@hirehelmet.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <span>(91) 9022234475</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.form
          name="contact"              // 👈 Required for Netlify
          method="POST"               // 👈 Required for Netlify
          data-netlify="true"         // 👈 Enables Netlify form capture
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Hidden input is required */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Khushboo Gadhia"
              required
              className="w-full bg-[#111111] border border-gray-700 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="hi@hirehelmet.com"
              required
              className="w-full bg-[#111111] border border-gray-700 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="(91) 9022234475"
              className="w-full bg-[#111111] border border-gray-700 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Hi, I am reaching out for..."
              className="w-full bg-[#111111] border border-gray-700 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full border border-green-500 text-green-500 font-semibold py-2 rounded-md 
                   hover:shadow-[0_0_10px_rgba(34,197,94,0.7)] 
                   transition duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
