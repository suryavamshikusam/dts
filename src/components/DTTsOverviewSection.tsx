import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export function DTTsOverviewSection() {
  const containerRef = useRef(null);
  
  // Hover 3D effect variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full bg-[#ecebdf] text-[#1c1c1c] flex flex-col items-center justify-center py-20 lg:py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 justify-between items-center z-10">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-[#0055FF]/30 bg-[#0055FF]/5 text-[#0055FF] text-sm font-semibold tracking-wide mb-6 uppercase">
              Platform Overview
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1c1c1c] leading-[1.1] mb-6">
              Digital Tool<br />
              <span className="text-[#0055FF]">Tracking System</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#1c1c1c]/70 font-light max-w-xl leading-relaxed">
              A comprehensive software platform designed to streamline and optimize the management of tools & equipment within your organization.
            </p>
          </motion.div>
        </div>

        {/* Right Side: 3D Isometric Cards */}
        <div className="w-full lg:w-1/2 flex justify-center items-center" style={{ perspective: 1200 }}>
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="flex flex-col md:flex-row gap-6 w-full max-w-2xl"
          >
            
            {/* Card 1: Comprehensive Lifecycle */}
            <motion.div 
              className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col"
              style={{ transform: "translateZ(40px)" }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#0055FF]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0055FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1c1c1c] mb-4">Comprehensive Lifecycle Management</h3>
              <p className="text-[#1c1c1c]/70 leading-relaxed">
                Track, monitor, and control the complete lifecycle of tools from procurement to disposal across industries.
              </p>
            </motion.div>

            {/* Card 2: Efficiency Through Automation */}
            <motion.div 
              className="w-full md:w-1/2 bg-[#1c1c1c] p-8 rounded-2xl shadow-2xl border border-gray-800 flex flex-col"
              style={{ transform: "translateZ(80px)" }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#0055FF]/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0055FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Efficiency Through Automation</h3>
              <p className="text-white/70 leading-relaxed">
                Automate tool maintenance, inventory tracking, and compliance workflows to reduce costs and minimize downtime.
              </p>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
