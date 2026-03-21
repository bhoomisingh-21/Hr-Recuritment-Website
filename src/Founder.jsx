import React from "react";

const FounderSection = () => {
  return (
    <section className="bg-black text-white py-12 md:py-28 px-6 md:px-16 relative overflow-x-hidden">

      {/* Background Gradients - Adjusted for mobile viewport */}
      <div className="absolute top-0 left-[-20%] w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-[-20%] w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">

        {/* IMAGE SECTION */}
        <div className="relative w-full flex justify-center md:justify-start">
          <div className="relative w-full max-w-[340px] md:w-[380px]">
            
            {/* Main Founder Image */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="/assets/image.png"
                alt="Khushboo Gadhia"
                className="w-full h-[400px] md:h-[450px] object-cover"
              />
            </div>

            {/* Secondary Image - Floating on Desktop, Integrated on Mobile */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 w-28 h-36 md:w-44 md:h-52 bg-black p-1 rounded-xl border border-neutral-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/imagefounder.png"
                alt="Founder Detail"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Neon Accent Line - Hidden on Mobile for a cleaner look */}
            <div className="hidden md:block absolute -left-6 top-12 w-1.5 h-32 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="mt-8 md:mt-0">
          <header className="mb-6">
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-green-500 mb-2 font-bold uppercase">
              Meet our Founder
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Khushboo <span className="text-green-500">Gadhia</span>
            </h2>
          </header>

          <div className="space-y-5 text-sm md:text-base text-neutral-300">
            <p className="leading-relaxed">
              Product Manager with 
              <span className="text-green-500 font-bold px-1">10+ years of experience</span>
              at industry leaders like <span className="text-white">Paytm</span> and <span className="text-white">Alyve Health</span>.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              A startup enthusiast specialized in building products from <span className="italic">ground zero</span>, blending high-level strategy with hands-on technical execution.
            </p>
          </div>

          {/* Quote Card */}
          <div className="my-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full"></div>
            <div className="pl-6 py-2 bg-gradient-to-r from-neutral-900/60 to-transparent">
              <p className="text-neutral-200 italic font-medium leading-relaxed">
                “If you haven’t found it yet, keep looking. Don’t settle.”
              </p>
            </div>
          </div>

          {/* Skill Tags - Responsive Flexbox */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {["Product Strategy", "Growth", "Operations", "Leadership"].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1.5 border border-neutral-800 bg-neutral-900/50 text-green-400 rounded-md text-[11px] md:text-xs font-semibold tracking-wide uppercase hover:border-green-500/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;