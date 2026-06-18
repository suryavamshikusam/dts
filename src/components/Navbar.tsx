import logoImage from '../assets/hero.png';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'Overview', href: '#overview' },
    { 
      name: 'Features', 
      href: '#features',
      subItems: [
        { name: 'Tool Order Management', href: '#features', event: 'change-features-tab', detail: 'ordermanagement' },
        { name: 'Calibration, Repair & Scrap', href: '#features', event: 'change-features-tab', detail: 'calibration' },
        { name: 'Reports & Dashboards', href: '#features', event: 'change-features-tab', detail: 'reports' },
        { name: 'Roles, Approvals & Audit', href: '#features', event: 'change-features-tab', detail: 'approvals' },
      ]
    },
    { 
      name: 'Workflow', 
      href: '#workflow',
      subItems: [
        { name: 'Tool Order Flow', href: '#workflow', event: 'change-workflow-tab', detail: 'tool-order' },
        { name: 'Repair Flow', href: '#workflow', event: 'change-workflow-tab', detail: 'repair' },
        { name: 'Calibration Flow', href: '#workflow', event: 'change-workflow-tab', detail: 'calibration' },
      ]
    },
    { name: 'Security', href: '#security' },
    { name: 'About Us', href: '#about' }
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 lg:px-16 pt-4 pb-2 pointer-events-none">
      <nav className="bg-white/90 border border-gray-200 rounded-2xl px-6 py-2 md:py-2.5 flex items-center justify-between shadow-xl backdrop-blur-xl pointer-events-auto">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoImage} alt="DTS Logo" className="h-9 md:h-10 w-auto object-contain" />
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '#top') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                  }
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#0055FF] transition-colors duration-200 py-2"
              >
                {item.name}
                {item.subItems && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              </a>

              {/* Dropdown */}
              {item.subItems && (
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden">
                    {item.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          
                          // Dispatch custom event to switch the tab
                          if (sub.event && sub.detail) {
                            window.dispatchEvent(new CustomEvent(sub.event, { detail: sub.detail }));
                          }

                          // Scroll to the section
                          const target = document.querySelector(sub.href);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0055FF] transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
          className="bg-[#0055FF] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
        >
          Start a Chat
        </button>
      </nav>
    </div>
  )
}
