import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);

  // Auto stop confetti after 5s
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-black text-green-400 h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && <Confetti />}

      {/* Animated Checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="flex flex-col items-center"
      >
        <CheckCircle size={80} className="text-green-500 mb-4" />
        <h1 className="text-4xl font-bold text-green-400">Thank You!</h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-green-300 mt-4 text-center max-w-md"
      >
        Your form has been submitted successfully. 🎉  
        We’ll get back to you soon!
      </motion.p>

      {/* Button back to Home */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-2 bg-green-500 text-black font-semibold rounded-2xl shadow-lg hover:bg-green-400 transition"
      >
        Go Back Home
      </motion.a>
    </section>
  );
}
