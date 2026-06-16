import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';
import './App.css';

gsap.registerPlugin(ScrollTrigger);



export default function App() {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalItemsRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState('capabilities');
  const [activeSection, setActiveSection] = useState('');
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    setLenis(lenisInstance);

    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    const handleScroll = () => {
      const sections = ['about', 'features', 'industries', 'company'];
      const scrollPosition = window.scrollY + 200; // Offset for header + buffer

      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenisInstance.destroy();
      gsap.ticker.remove(lenisInstance.raf);
    };
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (lenis) {
      if (target === 'top') {
        lenis.scrollTo(0, { offset: 0 });
      } else {
        lenis.scrollTo(target, { offset: -80 });
      }
    }
  };

  useGSAP(() => {
    // Hero Text Animation
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });




    
    // Fade up generic animations for other sections
    gsap.utils.toArray('.fade-up').forEach((elem) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });

  }, { scope: containerRef });

  const featuresData = {
    capabilities: {
      title: "Core Platform Capabilities",
      items: [
        { title: "Seamless Tool Tracking", desc: "Coordinate orders and monitor real-time tool movements seamlessly between warehouses, field engineers, and customers." },
        { title: "Tool Transfers Between Engineers", desc: "Reduce logistical costs exponentially by allowing nearby field engineers to transfer tools directly to one another instead of routing back to the warehouse." },
        { title: "Supports Partial Transactions", desc: "Keep workflows flexible. Each tool within a single order can follow an independent process flow for precise management." },
        { title: "Real-Time Inventory Management", desc: "Gain a comprehensive, live view of your entire tool inventory across all locations, tracking availability instantly." }
      ]
    },
    maintenance: {
      title: "Maintenance & Operations",
      items: [
        { title: "Scheduled Calibration Alerts", desc: "Triggers automated notifications for timely tool calibration to meet strict safety standards." },
        { title: "Dedicated Repair Workflows", desc: "Ensure tools are systematically and properly repaired on a timely basis." },
        { title: "Scrap Upon Approval", desc: "Prevent asset loss with a secure mechanism where tools are only flagged as scrap following Super Admin sign-off." },
        { title: "Cost Efficiency Engine", desc: "Mitigate unnecessary replacements by comprehensively monitoring tool condition, lifecycle stages, and service history." }
      ]
    },
    visibility: {
      title: "Visibility & Governance",
      items: [
        { title: "Centralized Tool Monitoring", desc: "Track availability, usage, and exact locations across multiple warehouses in real time." },
        { title: "Insight Analysis", desc: "Fully understand tool usage patterns and operational trends to drive enterprise efficiency." },
        { title: "Downloadable Documentation", desc: "Instant access to delivery challans, invoices, and reports to facilitate seamless finance and audit workflows." },
        { title: "Automated Schedulers", desc: "DTTS automatically triggers timely alerts for pending Calibrations, Returns, Shipments, and Acknowledgement Dues." },
        { title: "Role-Based Access Control", desc: "Secure operations with custom permissions tailored explicitly for Engineers, Admins, and Super Admins." },
        { title: "Comprehensive Audit Trails", desc: "Traceability at its finest. Access a complete, time-stamped history of all tool inventory activities to ensure total accountability and compliance." }
      ]
    },
    integrations: {
      title: "Advanced Integrations",
      items: [
        { title: "GPS & RFID Tracking", desc: "Geo-Fence Alerts System for total security." },
        { title: "Bartender Integration", desc: "Seamless barcode and label generation." },
        { title: "Dedicated Mobile App", desc: "Empower field engineers with an intuitive mobile application." }
      ]
    }
  };

  return (
    <div ref={containerRef} className="bg-white text-slate-900 min-h-screen font-sans selection:bg-blue-600/30 flex">
      
      {/* Sidebar - Sabado Technologies */}
      <div className="fixed top-0 left-0 h-screen w-16 md:w-24 bg-[#1b4cda] flex flex-col justify-between items-center py-8 z-50 shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <img src="/images/dts-logo.jpg" alt="DTS Logo" className="w-10 h-10 md:w-14 md:h-14 rounded-full object-contain shadow-md border-2 border-white/20 bg-white" />
        </div>
        
        <div className="flex-1 flex items-center justify-center -rotate-180" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-white font-semibold text-lg md:text-xl tracking-widest whitespace-nowrap">Sabado Technologies</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-16 md:ml-24 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)]">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-16 md:left-24 right-0 h-20 bg-white/90 backdrop-blur-md z-40 flex justify-between items-center border-b border-slate-200 px-8">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleNavClick(e, 'top')} className="flex items-center text-slate-900 font-bold text-xl tracking-wide gap-3">
              <img src="/images/sabado-logo.png" alt="Sabado Technologies" className="h-10 md:h-14 object-contain" />
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className={`relative hover:text-[#1b4cda] transition-colors py-1 ${activeSection === 'about' ? 'text-[#1b4cda]' : ''}`}>
              What is DTTS?
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1b4cda] rounded-full transition-transform duration-300 origin-left ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </a>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className={`relative hover:text-[#1b4cda] transition-colors py-1 ${activeSection === 'features' ? 'text-[#1b4cda]' : ''}`}>
              Features
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1b4cda] rounded-full transition-transform duration-300 origin-left ${activeSection === 'features' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </a>
            <a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className={`relative hover:text-[#1b4cda] transition-colors py-1 ${activeSection === 'industries' ? 'text-[#1b4cda]' : ''}`}>
              Industries
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1b4cda] rounded-full transition-transform duration-300 origin-left ${activeSection === 'industries' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </a>
            <a href="#company" onClick={(e) => handleNavClick(e, '#company')} className={`relative hover:text-[#1b4cda] transition-colors py-1 ${activeSection === 'company' ? 'text-[#1b4cda]' : ''}`}>
              Company
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1b4cda] rounded-full transition-transform duration-300 origin-left ${activeSection === 'company' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </a>
          </div>

          <div className="flex items-center">
            <button className="bg-[#1b4cda] hover:bg-[#153eb3] text-white px-6 py-2.5 rounded text-sm font-medium transition-all shadow-md">
              Request a Demo
            </button>
          </div>
        </nav>

        {/* SECTION 1: Hero */}
        <section className="relative min-h-screen flex flex-col justify-center px-12 md:px-24 pt-32 pb-20 overflow-hidden">
          <div className="z-10 max-w-5xl">
            <div className="flex gap-4 mb-8 hero-text">
              <div className="w-12 h-12 rounded-tl-full rounded-tr-full rounded-bl-full bg-[#f2a104]"></div>
              <div className="w-12 h-12 rounded-full bg-[#f2a104]"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1b4cda] leading-[1.05] mb-8 hero-text">
              Secure Your Tools, <br/>
              Secure Your Business.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12 hero-text font-light leading-relaxed border-l-4 border-[#f2a104] pl-6">
              Transforming Enterprise Tool Management with Sabado Technologies. Experience Total Tool Transparency with our comprehensive Digital Tool Tracking System (DTTS).
            </p>
            <div className="flex gap-4 hero-text flex-wrap">
              <button className="bg-[#1b4cda] text-white px-8 py-4 rounded text-base font-semibold hover:bg-[#153eb3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Request a Demo
              </button>
              <button className="bg-white text-[#1b4cda] border border-[#1b4cda] px-8 py-4 rounded text-base font-semibold hover:bg-slate-50 transition-all">
                Contact Our Experts
              </button>
            </div>
          </div>
          
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[#1b4cda]">
              <path d="M100 0 L100 100 L0 100 Z" />
            </svg>
          </div>
        </section>

        {/* SECTION 2: What is DTTS? */}
        <section id="about" className="py-24 px-12 md:px-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl fade-up">
            <h2 className="text-3xl font-bold text-[#f2a104] uppercase tracking-wider mb-4 text-sm">Product Introduction</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1b4cda] mb-8">Total Tool Transparency at Your Fingertips</h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-16">
              The Digital Tool Tracking System (DTTS) is a comprehensive software platform designed to streamline and optimize the management of tools and equipment within your organization. From procurement to disposal, manage your assets flawlessly across multiple industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100">
                <div className="text-[#1b4cda] mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Lifecycle Management</h4>
                <p className="text-slate-600 font-light">Track, monitor, and control the complete lifecycle of tools across your enterprise.</p>
              </div>
              <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100">
                <div className="text-[#f2a104] mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Efficiency Through Automation</h4>
                <p className="text-slate-600 font-light">Automate tool maintenance, inventory tracking, and compliance workflows to drastically reduce costs and minimize operational downtime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Horizontal Scroll (Industry Challenges) */}
        <section className="w-full relative bg-[#1b4cda] py-32">
          <div className="px-12 md:px-24 mb-16 fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Industry Challenges We Solve</h2>
            <p className="text-white/80 text-lg md:text-xl font-light border-l-4 border-[#f2a104] pl-4">Engineered to eliminate structural leakage across your operations.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-12 md:px-24 pb-8 w-full [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            
            <div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] h-[500px] flex-shrink-0 snap-center rounded-2xl bg-slate-900 shadow-2xl overflow-hidden relative group">
              <img src="/images/lost_tools_bg_1781549429324.png" alt="Lost Tools" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b4cda] via-[#1b4cda]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10 drop-shadow-md">Lost or Misplaced Tools</h3>
                <p className="text-lg text-white/90 font-light leading-relaxed relative z-10 drop-shadow">
                  Eliminates costly downtime, safety risks, and operational delays.
                </p>
              </div>
            </div>

            <div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] h-[500px] flex-shrink-0 snap-center rounded-2xl bg-slate-900 shadow-2xl overflow-hidden relative group">
              <img src="/images/compliance_safety_bg_1781549443493.png" alt="Compliance Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b4cda] via-[#1b4cda]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10 drop-shadow-md">Compliance & Safety Risks</h3>
                <p className="text-lg text-white/90 font-light leading-relaxed relative z-10 drop-shadow">
                  Minimizes hazards and violations by tracking tool calibration and utilization strictly.
                </p>
              </div>
            </div>

            <div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] h-[500px] flex-shrink-0 snap-center rounded-2xl bg-slate-900 shadow-2xl overflow-hidden relative group">
              <img src="/images/inventory_discrepancy_bg_1781549454758.png" alt="Inventory Discrepancies" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b4cda] via-[#1b4cda]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10 drop-shadow-md">Inventory Discrepancies</h3>
                <p className="text-lg text-white/90 font-light leading-relaxed relative z-10 drop-shadow">
                  Eradicates stockouts, mismatches, and expensive over-purchasing through real-time updates.
                </p>
              </div>
            </div>

            <div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] h-[500px] flex-shrink-0 snap-center rounded-2xl bg-slate-900 shadow-2xl overflow-hidden relative group">
              <img src="/images/delayed_maintenance_bg_1781549467255.png" alt="Delayed Maintenance" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b4cda] via-[#1b4cda]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10 drop-shadow-md">Delayed Maintenance</h3>
                <p className="text-lg text-white/90 font-light leading-relaxed relative z-10 drop-shadow">
                  Replaces risky reactive maintenance with scheduled workflows to prevent equipment failure.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: Validated Business Outcomes */}
        <section className="py-24 md:py-32 px-12 md:px-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 fade-up">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1b4cda]">Validated Business Outcomes.</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light border-l-4 border-[#f2a104] pl-4">Measurable impact on your bottom line and operational efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 fade-up">
                <div className="text-5xl font-bold text-[#1b4cda] mb-2">30%</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cost Reduction</h3>
                <p className="text-slate-600 text-sm font-light">Cut in tool-related costs and unnecessary repurchasing.</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 fade-up" style={{ transitionDelay: '100ms' }}>
                <div className="text-5xl font-bold text-[#f2a104] mb-2">50%</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Downtime Mitigation</h3>
                <p className="text-slate-600 text-sm font-light">Reduction in asset downtime during critical operations.</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 fade-up" style={{ transitionDelay: '200ms' }}>
                <div className="text-5xl font-bold text-emerald-600 mb-2">25%</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Utilization Growth</h3>
                <p className="text-slate-600 text-sm font-light">Improvement in overall asset utilization across teams.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 fade-up" style={{ transitionDelay: '300ms' }}>
                <div className="text-5xl font-bold text-purple-600 mb-2">15%</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Productivity Boost</h3>
                <p className="text-slate-600 text-sm font-light">Boost in overall productivity through smart resource utilization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Product Features (Tabs) */}
        <section id="features" className="py-24 px-12 md:px-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-slate-900">Product Features</h2>
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Tab Navigation */}
              <div className="w-full lg:w-1/3 flex flex-col gap-2">
                {Object.keys(featuresData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`text-left px-6 py-4 rounded-lg font-bold transition-all ${activeTab === key ? 'bg-[#1b4cda] text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-200'}`}
                  >
                    {featuresData[key].title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 min-h-[400px]">
                <h3 className="text-2xl font-bold text-[#1b4cda] mb-8">{featuresData[activeTab].title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuresData[activeTab].items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="w-8 h-8 rounded bg-[#f2a104]/10 flex items-center justify-center text-[#f2a104] font-bold mb-1">
                        {idx + 1}
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600 font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Industry Verticals (Medical) */}
        <section id="industries" className="py-24 px-12 md:px-24 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up">
            <div>
              <h2 className="text-3xl font-bold text-[#f2a104] uppercase tracking-wider mb-4 text-sm">Industry Verticals</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Focus on Healthcare & Medical Equipment</h3>
              <p className="text-lg text-slate-600 font-light mb-8">
                Industry-Tailored Efficiency: Sabado adapts DTTS to meet sector-specific challenges across Aerospace, Manufacturing, Healthcare, and more.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#1b4cda] flex-shrink-0"></div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Real-Time Equipment Tracking</strong>
                    <span className="text-slate-600 font-light">Monitor medical tool usage, immediate availability, and sterile condition in real time.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#1b4cda] flex-shrink-0"></div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Preventive Maintenance</strong>
                    <span className="text-slate-600 font-light">Automate scheduling to reduce equipment failure and downtime during critical procedures.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#1b4cda] flex-shrink-0"></div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Regulatory Compliance</strong>
                    <span className="text-slate-600 font-light">Maintain pristine calibration logs and audit trails to meet rigid healthcare standards.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1b4cda] p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-xl opacity-20"></div>
              <h4 className="text-2xl font-bold mb-4 relative z-10 text-[#f2a104]">Proven Impact Case Study</h4>
              <p className="text-xl font-light leading-relaxed relative z-10">
                "A major medical client realized a <strong>25% reduction in downtime</strong> and significantly improved operational efficiencies through DTTS."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: Innovation Pipeline & Security */}
        <section className="py-24 px-12 md:px-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 fade-up">
            
            {/* Innovation Pipeline */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="text-[#1b4cda]">🚀</span> Innovation Pipeline
              </h3>
              <ul className="bg-white rounded-xl shadow-md border border-slate-100 divide-y divide-slate-100">
                {[
                  "Spares and Consumables Implementation",
                  "AI-Powered Engineer Allocation (Skill Matrix)",
                  "2-Step Scrap Approval & Enhanced Geo-Fencing",
                  "Interactive Chatbot & Template Customization",
                  "Supplier/Vendor Portal & License Management",
                  "Partial Order & Automated Invoice Processing"
                ].map((item, idx) => (
                  <li key={idx} className="p-4 text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="text-[#1b4cda]">🔒</span> Security & Architecture
              </h3>
              <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8 mb-6">
                <h4 className="font-bold text-slate-900 mb-2">Enterprise-Grade Cloud Architecture</h4>
                <p className="text-slate-600 font-light text-sm mb-4">Built on AWS Cloud Infrastructure, providing a highly scalable, secure, and efficient solution with clean separation of concerns.</p>
                <h4 className="font-bold text-slate-900 mb-2">Robust Safeguards</h4>
                <ul className="text-slate-600 font-light text-sm list-disc pl-4 space-y-1">
                  <li>TLS Encryption for data in transit.</li>
                  <li>Token-based authentication with AES Encryption.</li>
                  <li>Rigorous Application Security & IAM.</li>
                  <li>Automated Backups and Disaster Recovery.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 8: About Us */}
        <section id="company" className="py-24 px-12 md:px-24 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900 text-center">About Sabado Technologies</h2>
            <p className="text-xl text-slate-600 font-light text-center mb-16 max-w-3xl mx-auto">
              Founded in 2014 and headquartered in Bengaluru, India, we offer innovative, agile, customer-centric, and cost-effective enterprise solutions. We serve 40+ global clients backed by over 200 years of combined team experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-[#1b4cda] mb-2">3</div>
                <div className="text-slate-600 font-medium">Global Locations<br/><span className="text-sm font-light">(India, U.S., Middle East)</span></div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-[#1b4cda] mb-2">40+</div>
                <div className="text-slate-600 font-medium">Global Clients</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-[#1b4cda] mb-2">50+</div>
                <div className="text-slate-600 font-medium">Elite Professionals</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-[#1b4cda] mb-2">10+</div>
                <div className="text-slate-600 font-medium">Years in Business</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">Why Partner With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-[#f2a104] mt-1">✔</div>
                <div>
                  <strong className="block text-slate-900">Deep Domain Expertise</strong>
                  <span className="text-slate-600 font-light text-sm">Proven track record across VLSI, BFSI, Telecom, Supply Chain, Retail, and Healthcare.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#f2a104] mt-1">✔</div>
                <div>
                  <strong className="block text-slate-900">Cutting-Edge Technology</strong>
                  <span className="text-slate-600 font-light text-sm">Solid expertise in solving operational challenges using the latest tech stacks.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#f2a104] mt-1">✔</div>
                <div>
                  <strong className="block text-slate-900">Agile Program Management</strong>
                  <span className="text-slate-600 font-light text-sm">Best-in-class project delivery executed on time using iterative agile methodologies.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#f2a104] mt-1">✔</div>
                <div>
                  <strong className="block text-slate-900">Top-Tier Talent Management</strong>
                  <span className="text-slate-600 font-light text-sm">Robust hiring ensures software is built by highly capable teams.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Call to Action & Footer */}
        <section className="py-24 px-12 md:px-24 bg-[#0f172a] text-white relative overflow-hidden flex flex-col justify-between">
          <div className="max-w-4xl mx-auto text-center relative z-10 flex-grow flex flex-col justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 fade-up">
              <span className="text-[#f2a104]">Innovate, Compete and Win</span> <br/> in a digital-first world.
            </h2>
            <p className="text-lg text-white/80 mb-10 fade-up max-w-2xl mx-auto font-light">
              Because, we're here to help. Contact us to start your digital transformation journey today.
            </p>
            <div className="fade-up">
              <button className="bg-[#1b4cda] text-white px-10 py-4 rounded text-base font-bold hover:bg-[#153eb3] transition-all shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
            </div>
          </div>

          {/* Integrated Footer */}
          <footer className="relative z-10 border-t border-white/10 pt-12 flex flex-col lg:flex-row justify-between gap-8 w-full max-w-7xl mx-auto">
            <div className="max-w-sm">
              <div className="font-bold text-xl tracking-wide gap-3 mb-4 flex items-center">
                <img src="/images/sabado-logo.png" alt="Sabado Technologies" className="h-10 md:h-12 object-contain bg-white rounded p-1" />
              </div>
              <p className="text-white/60 font-light text-sm mb-4">With Sabado’s Digital Transformation Solutions, we aim to help businesses innovate, compete and win in a digital-first world.</p>
              <p className="text-white/40 text-xs">© 2026 Sabado Technologies. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <h4 className="font-bold text-white mb-4">Contact</h4>
                <p className="text-white/60 text-sm font-light mb-2">USA: 860, Glenhill Dr, Fremont, CA – 94539</p>
                <p className="text-white/60 text-sm font-light mb-2">Tel: +91 88611 11186</p>
                <p className="text-white/60 text-sm font-light"><a href="https://sabadotechnologies.com" className="hover:text-[#f2a104] transition-colors">sabadotechnologies.com</a></p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <div className="flex flex-col gap-2 font-medium text-sm">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">System Status</a>
                </div>
              </div>
            </div>
          </footer>
        </section>

      </div>
    </div>
  );
}