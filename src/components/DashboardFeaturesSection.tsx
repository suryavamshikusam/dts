import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, PenTool, PieChart, ClipboardCheck, ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'ordermanagement', label: 'Tool Order Management', icon: ShoppingCart },
  { id: 'calibration', label: 'Calibration, Repair & Scrap', icon: PenTool },
  { id: 'reports', label: 'Reports & Dashboards', icon: PieChart },
  { id: 'approvals', label: 'Roles, Approvals & Audit Trail', icon: ClipboardCheck },
];

const tabContent = {
  ordermanagement: {
    features: [
      {
        title: 'Seamless tool tracking',
        desc: 'Coordinates orders and tool movements between warehouses, field engineers, and customers.',
      },
      {
        title: 'Supports Partial Transactions',
        desc: 'Enables each tool in an order to follow a different process flow, ensuring easier tracking and management.',
      },
      {
        title: 'Tool transfers between Engineers',
        desc: 'Transfer tools directly between nearby engineers instead of procuring them from the warehouse, thereby reducing logistical costs.',
      },
      {
        title: 'Inventory',
        desc: 'A comprehensive view of the tool inventory across locations and availability.',
      },
    ],
    imageUrl: '/totalordermanagment.png'
  },
  calibration: {
    features: [
      {
        title: 'Scheduled Calibration Alerts',
        desc: 'DTS triggers automated notifications for timely calibration to meet safety standards.',
      },
      {
        title: 'Repair',
        desc: 'Dedicated workflow to ensure the tools are repaired properly on timely basis.',
      },
      {
        title: 'Scrap upon Approval',
        desc: 'Tools are scrapped only after super admin approval to prevent asset loss.',
      },
      {
        title: 'Cost Efficiency',
        desc: 'Reduces unnecessary replacements by tracking tool condition, lifecycle stage, and service history.',
      },
    ],
    imageUrl: '/overview.png' // Make sure this matches the calibration image you uploaded
  },
  reports: {
    features: [
      {
        title: 'Insightful Actions',
        desc: 'DTTS Reports enables users to take insightful action based on the data.',
      },
      {
        title: 'Centralized Tool Monitoring',
        desc: 'Track availability, usage and location across warehouses in real time.',
      },
      {
        title: 'Insight analysis',
        desc: 'Understand usage patterns and operational trends to drive efficiency.',
      },
      {
        title: 'Repair & Calibration Tracking',
        desc: 'Monitor tool maintenance schedules and vendor activities from one interface.',
      },
      {
        title: 'Downloadable Documentation',
        desc: 'Access delivery challans, invoices, and reports for audits and finance.',
      },
      {
        title: 'Schedulers',
        desc: 'DTTS will trigger timely triggers for Calibration, Return, Shipment and acknowledgement Dues.',
      },
    ],
    imageUrl: '/reports&dashboard.png'
  },
  approvals: {
    features: [
      {
        title: 'Role based access control',
        desc: 'Permissions tailored to user roles - Admins, Engineers, Super Admins - ensuring secure operations.',
      },
      {
        title: 'Approvals',
        desc: 'Critical transactions like scrap requests, tools transfers, stock transfers requires approvals.',
      },
      {
        title: 'Notifications to Super Admin',
        desc: 'For approvals, changes in address, delay in delivering the tools, stock transfers, changes in engineer position.',
      },
      {
        title: 'Audit Trail',
        desc: 'Provides a complete, time-stamped history of all tool inventory activities, ensuring traceability, accountability, and compliance.',
      },
    ],
    imageUrl: '/rulesapprovalsaudits.png'
  }
};

export function DashboardFeaturesSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Listen for custom events from the Navbar
  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener('change-features-tab', handleTabChange);
    return () => window.removeEventListener('change-features-tab', handleTabChange);
  }, []);

  const activeData = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="relative w-full bg-[#050505] text-white py-16 md:py-20 font-sans overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0055FF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-[#0055FF]/30 bg-[#0055FF]/10 text-[#0055FF] text-xs font-bold tracking-wide mb-4 uppercase shadow-[0_0_15px_rgba(0,85,255,0.2)]"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-lg"
          >
            Powerful Platform Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Everything you need to seamlessly track, manage, and optimize your entire tool inventory from one unified dashboard.
          </motion.p>
        </div>

        {/* Tab Navigation (Glassmorphic Pills) */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex flex-wrap justify-center bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 gap-1.5 max-w-full shadow-xl shadow-black/50">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 md:px-5 py-2 md:py-2.5 rounded-xl flex items-center gap-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white shadow-lg' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#0055FF] to-blue-600 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Features List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-3"
              >
                {activeData.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055FF]/40 hover:bg-white/[0.06] transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,85,255,0.1)]"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 group-hover:text-[#0055FF] transition-colors flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF] shadow-[0_0_8px_rgba(0,85,255,0.8)]" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed pl-4">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Display */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 bg-white/5 group mt-2"
              >
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                <img 
                  src={activeData.imageUrl} 
                  alt={activeTab} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" 
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#0055FF]/20 rounded-full blur-[80px] pointer-events-none z-[-1]" />
          </div>

        </div>
      </div>
    </section>
  );
}
