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
    <section className="w-full bg-white text-black py-24 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Powerful Platform Features
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to seamlessly track, manage, and optimize your entire tool inventory from one unified dashboard.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center sm:justify-start border-b border-gray-200 mb-16 gap-x-8 gap-y-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 flex items-center gap-2 text-lg font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Features List */}
          <div className="lg:col-span-5 flex flex-col gap-8 mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {activeData.features.map((feature, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-4">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Display */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50/50 rounded-2xl p-2 sm:p-4 border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-100/50 bg-white"
                >
                  <img 
                    src={activeData.imageUrl} 
                    alt={activeTab} 
                    className="w-full h-auto object-cover" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
