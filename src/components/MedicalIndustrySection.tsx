import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: "Real-Time Equipment Tracking",
    desc: "Enables organizations to monitor tool usage, availability, and condition in real-time.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    title: "Preventive Maintenance",
    desc: "Automates scheduling to reduce equipment failure & downtime during critical procedures.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Regulatory Compliance",
    desc: "Maintains calibration logs and audit trails to meet healthcare compliance standards.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Case Study Impact",
    desc: "A major client saw 25% reduction in downtime & improved efficiencies through DTS.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
  }
];

export function MedicalIndustrySection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleCore = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateCore = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={containerRef} className="w-full bg-[#ecebdf] py-12 md:py-16 relative flex flex-col items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-7xl flex flex-col items-center gap-8 z-20 px-6 md:px-12">
        {/* Central Hub */}
        <motion.div 
          style={{ scale: scaleCore }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#0055FF]/20 bg-white shadow-2xl flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0055FF] mb-1">
              Medical
            </h2>
            <span className="text-lg md:text-xl text-[#1c1c1c]/60 uppercase tracking-widest font-medium">
              Industry
            </span>
          </div>
        </motion.div>

        {/* 4 Cards in a straight line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col w-full h-full hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#0055FF]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0055FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#1c1c1c] mb-3">{feature.title}</h4>
              <p className="text-[#1c1c1c]/70 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
