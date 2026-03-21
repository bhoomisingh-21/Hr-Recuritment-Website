import React from "react";
import { Zap, ShieldCheck, Rocket, MessageCircle } from "lucide-react";

const HowWeAreDifferent = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Fast Hiring Process",
      description:
        "We reduce hiring time by connecting you with the right candidates quickly and efficiently.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Verified Candidates",
      description:
        "Every candidate is carefully screened to ensure quality, reliability, and skill alignment.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Startup-Focused Approach",
      description:
        "We understand startup needs and provide talent that can grow and adapt with your company.",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Transparent Communication",
      description:
        "Clear updates, honest feedback, and smooth coordination throughout the hiring process.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-28 px-6 md:px-16 relative overflow-hidden">
      
      {/* Background Glow - Scaled for mobile */}
      <div className="absolute top-10 right-[-10%] w-48 h-48 md:w-72 md:h-72 bg-green-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            How We Are Different
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We focus on quality hiring, fast execution, and strong partnerships
            to help startups and companies build better teams.
          </p>
        </div>

        {/* Cards Grid */}
        {/* grid-cols-1 for phones, grid-cols-2 for tablets, grid-cols-4 for desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-7 md:p-8 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="text-green-500 mb-5 flex justify-start sm:justify-center lg:justify-start transform group-hover:scale-110 transition-transform">
                <div className="p-3 bg-green-500/5 rounded-xl border border-green-500/10">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeAreDifferent;