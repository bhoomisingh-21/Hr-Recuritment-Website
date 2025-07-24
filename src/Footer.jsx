// components/Footer.jsx
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
 <footer className="bg-black text-white border-t border-[#0f2a1f]">
  <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col gap-12 md:flex-row md:justify-between">

    {/* Left: Brand Info */}
    <div className="md:w-1/2">
      <div className="flex items-center space-x-2 mb-4">
        <span className="bg-green-500 w-2.5 h-2.5 rounded-full"></span>
        <h1 className="text-2xl font-semibold">Helmet</h1>
      </div>
      <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
        From sourcing to onboarding, we streamline hiring for top tech roles. Trusted by growing startups & enterprises.
      </p>
      <div className="flex space-x-3 mt-5">
        <a href="#" className="bg-[#1c1c1c] p-2 rounded-md hover:bg-green-500 transition">
          <FaLinkedin className="text-xl" />
        </a>
        <a href="#" className="bg-[#1c1c1c] p-2 rounded-md hover:bg-green-500 transition">
          <FaTwitter className="text-xl" />
        </a>
        <a href="#" className="bg-[#1c1c1c] p-2 rounded-md hover:bg-green-500 transition">
          <FaInstagram className="text-xl" />
        </a>
      </div>
    </div>

    {/* Right: Nav + Process */}
    <div className="flex justify-between md:justify-end gap-10 md:w-1/2">
      {/* Navigation */}
      <div className="text-left md:text-right">
        <h3 className="text-white font-medium mb-4">Navigation</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#who-we-are" className="hover:text-green-400">How It Works</a></li>
          <li><a href="#about" className="hover:text-green-400">About Us</a></li>
          <li><a href="#benefits" className="hover:text-green-400">Benefits</a></li>
          <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
        </ul>
      </div>

      {/* Process */}
      <div className="text-right">
        <h3 className="text-white font-medium mb-4">Process</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#" className="hover:text-green-400">Req. Gathering</a></li>
          <li><a href="#" className="hover:text-green-400">Connecting</a></li>
          <li><a href="#" className="hover:text-green-400">Interviews</a></li>
          <li><a href="#" className="hover:text-green-400">Selection</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-[#0f2a1f] py-4 px-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-2">
    <span>© 2025 Helmet</span>
    <span>All rights reserved</span>
  </div>
</footer>


  );
}
