import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const challenges = [
  {
    title: "Lost or Misplaced Tools",
    desc: "Leads to downtime, safety risks, and delays in operations across sectors.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    title: "Compliance & Safety Risks",
    desc: "Failure to track tool calibration and use can result in violations and hazardous conditions.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  },
  {
    title: "Inventory Discrepancies",
    desc: "Lack of real-time tracking causes stockouts, mismatches, and over-purchasing.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  },
  {
    title: "Delayed Maintenance",
    desc: "Reactive maintenance increases equipment failure risk and customer dissatisfaction.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

function ChallengeCard({ title, desc, icon, index }: { title: string, desc: string, icon: string, index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between w-full h-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      whileHover={{ 
        scale: 1.02, 
        rotateX: mouseX.get() > 150 ? 2 : -2,
        rotateY: mouseY.get() > 100 ? -2 : 2,
        transition: { duration: 0.2 } 
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon} />
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed text-lg">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function IndustryChallengesSection() {
  return (
    <section className="w-full bg-[#1c1c1c] text-white py-24 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0055FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl flex flex-col z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Industry <span className="text-[#0055FF]">Challenges</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Traditional tracking methods leave organizations vulnerable to critical operational failures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 w-full mx-auto">
          {challenges.map((challenge, i) => (
            <ChallengeCard key={i} {...challenge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
