import React from 'react';
import { motion } from 'framer-motion';

export function SecuritySection() {
  const bulletPoints = [
    "Backups and disaster recovery",
    "TLS encryption",
    "Tokens with AES encryption",
    "Application security",
    "Identity and access management"
  ];

  return (
    <section className="w-full bg-[#ecebdf] py-24 md:py-32 flex flex-col items-center overflow-hidden">
      
      {/* Centered Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[#0055FF] tracking-tight underline decoration-4 underline-offset-[12px]">
          Security
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1c1c1c] leading-tight">
              Secure Your Tools, Secure Your Business.
            </h3>
          </div>
          
          <p className="text-lg text-[#1c1c1c]/80 leading-relaxed mb-8">
            Security is paramount in tool management solutions to protect sensitive data, prevent unauthorized access, and ensure compliance with industry regulations. Robust security measures safeguard against potential risks such as data breaches, theft, and operational disruptions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {bulletPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#0055FF] shrink-0" />
                <span className="text-[#1c1c1c]/90 font-medium text-[15px] leading-tight">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm rounded-3xl bg-white shadow-2xl p-3 transform hover:-translate-y-2 transition-transform duration-500 border border-gray-100 overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0055FF]/10 to-[#fcd34d]/10 rounded-3xl -z-10 blur-xl" />
            
            <video 
              src="/security.mov" 
              className="w-full h-auto object-cover rounded-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
