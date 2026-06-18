import { motion } from 'framer-motion'

const allLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const row1 = allLogos;
const row2 = [...allLogos].reverse();

export function AboutUsSection() {
  return (
    <section className="w-full bg-white text-[#1c1c1c] py-16 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl">
        
        {/* Top Content: Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] xl:w-[65%]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl md:text-6xl font-bold text-[#0055FF] tracking-tight">About Us</h2>
            </div>
            
            <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed mb-6">
              Sabado Technologies headquartered in Bengaluru, India is an Information Technology company that offers innovative, agile, customer centric and cost effective solutions for enterprises.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Expertise in VLSI, BFSI, Supply chain, Retail, Healthcare & more",
                "Presence in 3 locations: India, U.S, & Middle East",
                "Years of combined experience",
                "Award-winning and industry-recognized subject matter experts"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-800 font-medium p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                  <span className="text-[#0055FF] font-bold text-base leading-none mt-0.5">○</span>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Stats & Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-6"
          >
            {/* Company Logo */}
            <div className="flex justify-start">
              <img src="/company.png" alt="Sabado Technologies" className="h-20 object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-[#0055FF] text-xs font-bold mb-1 tracking-widest uppercase">Inception</span>
                <span className="text-4xl font-bold text-[#0055FF] tracking-tight">2014</span>
              </div>
              <div className="flex flex-col justify-center p-6 bg-[#0055FF] rounded-2xl shadow-xl shadow-[#0055FF]/20 hover:-translate-y-1 transition-transform">
                <span className="text-white text-xs font-bold mb-1 tracking-widest uppercase">Clients</span>
                <span className="text-4xl font-bold text-white tracking-tight">40+</span>
              </div>
              <div className="col-span-2 flex flex-col justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-[#0055FF] text-xs font-bold mb-1 tracking-widest uppercase">Years in Business</span>
                <span className="text-4xl font-bold text-[#0055FF] tracking-tight">10+</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Horizontal Marquee Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fade left and right */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-6">
            {/* Row 1: Scrolls Left */}
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {[...row1, ...row1].map((num, i) => (
                <div key={`r1-${i}`} className="w-48 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 shrink-0 hover:shadow-md transition-shadow">
                  <img src={`/c${num}.png`} alt={`Client ${num}`} className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>

            {/* Row 2: Scrolls Right */}
            <motion.div 
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {[...row2, ...row2].map((num, i) => (
                <div key={`r2-${i}`} className="w-48 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 shrink-0 hover:shadow-md transition-shadow">
                  <img src={`/c${num}.png`} alt={`Client ${num}`} className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Area: Experts in Building Innovative IT Solutions */}
        <div className="w-full text-center mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0055FF] mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Experts in Building <br className="md:hidden" /> Innovative IT Solutions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-gray-700 font-light">
              <p>
                Sabado has a team of 50+ professionals with a strong blend of domain and technology expertise.
              </p>
              <p>
                The team consists a strategic mix of Business Analysts, Solution Architects, Data Modelers, Data Scientists and Developers.
              </p>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
