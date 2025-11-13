"use client"; // Diperlukan untuk Framer Motion

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

// Pisahkan Header untuk kejelasan
const Header = () => (
  // JSX dari App.jsx baris 91-105
  <header className="relative z-10 flex items-center justify-between p-4 md:p-6">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d75d8ea83d9c76322e4d3e6a7356f855ecedfa94?width=84" 
          alt="Edwin"
          className="w-11 h-11 object-cover"
        />
      </div>
      <span className="text-white text-xl font-bold">Edwin</span>
    </div>
    <button className="text-white p-2" aria-label="Menu">
      <Menu className="w-6 h-6" />
    </button>
  </header>
);

export default function Hero() {
  return (
    // JSX dari App.jsx baris 80-161
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/764693a07e0a158ba61faa3f278d594c625e9982?width=1827" 
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <Header />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-8 pb-20">
        <motion.div 
          className="max-w-md mx-auto md:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <div className="inline-block bg-yellow-500 px-2 py-1 mb-3">
              <span className="text-xs font-bold">&nbsp;</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
              <span className="text-gray-900">Crafting</span> Interfaces, One Line at a Time
            </h1>
            <p className="text-white text-base md:text-lg font-semibold mb-6">
              Build fast, accessible, and responsive web experiences that users love.
            </p>
          </div>
          <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
            Say Hello
          </button>
        </motion.div>

        {/* Developer Image */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3d5373c4fc8c3f67b30fd495ddde92e40be2594f?width=828" 
              alt="Developer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 393 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M196.407 0C394.902 5.10077e-05 555.813 38.2797 555.813 85.5C555.813 132.72 394.902 171 196.407 171C-2.08768 171 -163 132.72 -163 85.5C-163 38.2796 -2.08759 0 196.407 0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}