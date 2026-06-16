import React, { useState } from 'react';

export default function DigitalToolsSystem() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen bg-white text-[#111625] antialiased font-sans selection:bg-[#3B66F5]/20 selection:text-[#3B66F5]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-10 bg-white border-b border-[#E2E8F0]">
        <a className="flex items-center gap-2 text-lg font-extrabold text-[#3B66F5] no-underline" href="#">
          <div className="w-9 h-9 rounded bg-[#3B66F5] flex items-center justify-center text-xs font-extrabold text-white">DTS</div>
          Sabado Technologies
        </a>
        <ul className="hidden lg:flex gap-7 list-none m-0 p-0">
          <li><a href="#overview" className="text-sm font-medium text-[#2C354E] no-underline hover:text-[#3B66F5] transition-colors duration-200">Overview</a></li>
          <li><a href="#features" className="text-sm font-medium text-[#2C354E] no-underline hover:text-[#3B66F5] transition-colors duration-200">Capabilities</a></li>
          <li><a href="#architecture" className="text-sm font-medium text-[#2C354E] no-underline hover:text-[#3B66F5] transition-colors duration-200">Architecture</a></li>
          <li><a href="#about" className="text-sm font-medium text-[#2C354E] no-underline hover:text-[#3B66F5] transition-colors duration-200">About</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a className="text-xs font-semibold px-5 py-2.5 rounded-full border-2 border-[#111625] text-[#111625] no-underline hover:border-[#3B66F5] hover:text-[#3B66F5] transition-all duration-200" href="#overview">
            See How It Works
          </a>
          <a className="text-xs font-bold px-5 py-2.5 rounded-full bg-[#3B66F5] text-white no-underline hover:bg-[#2A52D8] transition-all duration-200" href="#contact">
            Request Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-[140px] bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold text-[#3B66F5] uppercase tracking-wider mb-5">Enterprise Asset Intel</div>
              <h1 className="text-4xl md:text-[4.5vw] lg:text-6xl font-extrabold leading-none tracking-tight text-[#111625] mb-6">
                Total Tool<br /><span className="text-[#3B66F5]">Transparency.</span>
              </h1>
              <p className="text-lg text-[#5C6784] leading-relaxed mb-10">
                Track, manage, and optimize your entire tooling infrastructure ecosystem from production lines to downstream field deployment frameworks.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a className="px-8 py-3.5 rounded-full bg-[#3B66F5] text-white text-base font-bold no-underline hover:bg-[#2A52D8] hover:-translate-y-px transition-all duration-200" href="#features">Explore Capabilities</a>
                <a className="px-8 py-3.5 rounded-full border-2 border-[#111625] text-[#111625] text-base font-bold no-underline hover:border-[#3B66F5] hover:text-[#3B66F5] transition-all duration-200" href="#overview">See How It Works</a>
              </div>
            </div>
            
            {/* HERO MOCKUP */}
            <div className="relative">
              <div className="bg-[#3B66F5] rounded-xl p-0 shadow-[0_40px_80px_rgba(59,102,245,0.25)] overflow-hidden">
                <div className="bg-[#2A52D8] py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }}></div>
                  <span className="text-white/40 text-xs ml-2 font-mono">DTS Live Dashboard</span>
                </div>
                <div className="flex">
                  <div className="w-[52px] bg-[#2A52D8] flex flex-col items-center gap-1 py-3">
                    <div className="w-9 h-9 rounded flex items-center justify-center text-xl mb-1 cursor-default text-white/60">🏠</div>
                    <div className="w-9 h-9 rounded flex items-center justify-center text-base cursor-default bg-[#FFDE4D] text-[#111625]">📍</div>
                    <div className="w-9 h-9 rounded flex items-center justify-center text-base cursor-default text-white/60">🔧</div>
                    <div className="w-9 h-9 rounded flex items-center justify-center text-base cursor-default text-white/60">📊</div>
                    <div className="w-9 h-9 rounded flex items-center justify-center text-base cursor-default text-white/60">🛡️</div>
                  </div>
                  <div className="w-[150px] bg-black/15 p-4 pt-[10px]">
                    <div className="text-[9px] text-white/50 font-bold uppercase tracking-wider px-2 py-1">Workflows</div>
                    <div className="text-xs text-white px-2 py-1 rounded font-bold bg-white/25"># tool-orders</div>
                    <div className="text-xs text-white/70 px-2 py-1 rounded font-medium"># repairs</div>
                    <div className="text-xs text-white/70 px-2 py-1 rounded font-medium"># calibration</div>
                    <div className="text-[9px] text-white/50 font-bold uppercase tracking-wider px-2 py-1 mt-2">Status</div>
                    <div className="text-xs text-white/70 px-2 py-1 rounded font-medium"># warehouse-a</div>
                    <div className="text-xs text-white/70 px-2 py-1 rounded font-medium"># field-team</div>
                    <div className="text-xs text-white/70 px-2 py-1 rounded font-medium"># audits</div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded bg-[#2A52D8] flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white">FE</div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-white/90 mb-0.5">Field Engineer</div>
                        <div className="text-[11px] text-white/75 leading-relaxed bg-white/10 rounded p-2">Tool request #1247 — torque wrench set, 3 units</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded bg-[#2EB67D] flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white">SA</div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-white/90 mb-0.5">Super Admin</div>
                        <div className="text-[11px] text-white/75 leading-relaxed bg-white/10 rounded p-2">✅ Stock verified. Dispatched from Warehouse B.</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded bg-[#36C5F0] flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white">SY</div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-white/90 mb-0.5">System</div>
                        <div className="text-[11px] text-white/75 leading-relaxed bg-white/10 rounded p-2">Calibration due: Pressure gauge #PG-44 — 3 days</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2.5 px-4 bg-black/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2EB67D] flex-shrink-0"></div>
                  <span className="text-[11px] text-white/60">214 tools tracked · 0 overdue · All systems nominal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED STRIP */}
        <div className="bg-white py-12 border-b border-[#E2E8F0] mt-16">
          <div className="max-w-[1140px] mx-auto px-10">
            <div className="text-center text-xs font-semibold text-[#94A0B8] uppercase tracking-wider mb-7">Trusted by field operations teams at</div>
            <div className="flex items-center justify-center gap-14 flex-wrap">
              <span className="text-lg font-extrabold text-[#94A0B8] tracking-tight opacity-70">WAREHOUSE A</span>
              <span className="text-lg font-extrabold text-[#94A0B8] tracking-tight opacity-70">FIELD OPS</span>
              <span className="text-lg font-extrabold text-[#94A0B8] tracking-tight opacity-70">ENTERPRISE</span>
              <span className="text-lg font-extrabold text-[#94A0B8] tracking-tight opacity-70">COMPLIANCE CO</span>
              <span className="text-lg font-extrabold text-[#94A0B8] tracking-tight opacity-70">INFRA TECH</span>
            </div>
          </div>
        </div>
      </section>

      {/* PILL TAB SECTION */}
      <section className="pt-20" id="overview">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex justify-center mb-[72px]">
            <div className="inline-flex bg-[#F4F7FF] rounded-full p-1 gap-0">
              {['orders', 'repair', 'calibration'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-3 rounded-full text-sm font-semibold capitalize cursor-pointer border-none bg-transparent transition-all duration-200 ${
                    activeTab === tab ? 'bg-white text-[#111625] shadow-sm font-bold' : 'text-[#5C6784]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'orders' && (
            <div>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">One platform. Every single<br /><span className="text-[#3B66F5]">physical tool asset.</span></h2>
                <p className="text-xl text-[#5C6784] mt-4 max-w-[560px] mx-auto leading-relaxed">Streamline internal logistics and eliminate verification bottlenecks using centralized status ledgers.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center text-sm font-extrabold text-[#3B66F5] border-l-4 border-[#3B66F5] pl-3.5 mb-5">Tool Request & Order Lifecycle</div>
                  <p className="text-base text-[#5C6784] leading-relaxed mb-6">Field engineers verify localized stock levels and request specialized tools, initiating automated verification pipelines. Every order is tracked from request to delivery with full audit trail.</p>
                  <a className="text-sm font-bold text-[#3B66F5] no-underline inline-flex items-center gap-1.5 hover:underline" href="#features">Explore all capabilities →</a>
                </div>
                <div className="bg-[#3B66F5] rounded-xl p-7 shadow-[0_24px_56px_rgba(59,102,245,0.15)] overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">Order Workflow</div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#2A52D8] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Field Engineer initiates tool order request</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#2EB67D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Automatic local warehouse stock verification</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#36C5F0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Fallback: Super Admin stock transfer protocol</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#FFDE4D] text-[#111625] flex items-center justify-center text-xs font-bold flex-shrink-0">4</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Logistics staging, processing & courier handshake</div></div>
                  <div className="flex items-start gap-3 mb-0"><div className="w-7 h-7 rounded-full bg-[#708FFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Field handshake: digital delivery confirmation</div></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'repair' && (
            <div>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">Isolate faults. Route fast.<br /><span className="text-[#3B66F5]">Zero guesswork.</span></h2>
                <p className="text-xl text-[#5C6784] mt-4 max-w-[560px] mx-auto leading-relaxed">Isolate asset faults immediately upon discovery. Route items to certified vendors with structured logistics handshakes.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center text-sm font-extrabold text-[#3B66F5] border-l-4 border-[#3B66F5] pl-3.5 mb-5">Managed Repair Workflows</div>
                  <p className="text-base text-[#5C6784] leading-relaxed mb-6">When a tool fails, the system immediately isolates it and creates a structured repair ticket. Items are routed to certified vendors with full tracking throughout the repair lifecycle.</p>
                  <a className="text-sm font-bold text-[#3B66F5] no-underline inline-flex items-center gap-1.5 hover:underline" href="#features">Explore all capabilities →</a>
                </div>
                <div className="bg-[#3B66F5] rounded-xl p-7 shadow-[0_24px_56px_rgba(59,102,245,0.15)] overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">Repair Workflow</div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#2A52D8] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Super Admin logs tool fault & opens ticket</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#2EB67D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Transit routing: courier to certified repair vendor</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#36C5F0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Post-repair inspection validation</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#FFDE4D] text-[#111625] flex items-center justify-center text-xs font-bold flex-shrink-0">4</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Pass: re-integrate item into available stock</div></div>
                  <div className="flex items-start gap-3 mb-0"><div className="w-7 h-7 rounded-full bg-[#2A52D8] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Fail: flag as scrapped & safely dispose</div></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calibration' && (
            <div>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">Enforce compliance.<br /><span className="text-[#3B66F5]">No expired tools. Ever.</span></h2>
                <p className="text-xl text-[#5C6784] mt-4 max-w-[560px] mx-auto leading-relaxed">Enforce tight inspection cycles. Systems lock out expired instrumentation automatically until new certs load.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center text-sm font-extrabold text-[#3B66F5] border-l-4 border-[#3B66F5] pl-3.5 mb-5">Compliance Calibration Triggers</div>
                  <p className="text-base text-[#5C6784] leading-relaxed mb-6">Calibration schedules are tracked automatically. When a tool's certification nears expiry, the system flags it, stages the calibration process, and locks the tool out of field use until recertified.</p>
                  <a className="text-sm font-bold text-[#3B66F5] no-underline inline-flex items-center gap-1.5 hover:underline" href="#features">Explore all capabilities →</a>
                </div>
                <div className="bg-[#3B66F5] rounded-xl p-7 shadow-[0_24px_56px_rgba(59,102,245,0.15)] overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">Calibration Workflow</div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#2A52D8] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">System flags: item passes compliance due date</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#2EB67D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Super Admin issues formal calibration request</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#36C5F0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Secure staging & shipping to verification lab</div></div>
                  <div className="flex items-start gap-3 mb-3"><div className="w-7 h-7 rounded-full bg-[#FFDE4D] text-[#111625] flex items-center justify-center text-xs font-bold flex-shrink-0">4</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Certificate verification upload & metrics update</div></div>
                  <div className="flex items-start gap-3 mb-0"><div className="w-7 h-7 rounded-full bg-[#2EB67D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</div><div className="text-sm text-white/85 leading-relaxed pt-0.5 font-medium">Release lockout: return instrument to field service</div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* STATS SECTION */}
      <div className="relative mt-20">
        <div className="h-20 bg-[#111625] [clip-path:ellipse(55%_100%_at_50%_0%)]"></div>
        <div className="bg-[#111625] py-5 pb-20">
          <div className="max-w-[1140px] mx-auto px-10 text-center">
            <div className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-16">We're in the business of growing efficiency.</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFDE4D] leading-none">30%</div>
                <div className="text-sm text-white/70 mt-3 font-medium lines-normal">Reduction in tool spend</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFDE4D] leading-none">50%</div>
                <div className="text-sm text-white/70 mt-3 font-medium lines-normal">Downtime minimization</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFDE4D] leading-none">25%</div>
                <div className="text-sm text-white/70 mt-3 font-medium lines-normal">Asset utilization boost</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFDE4D] leading-none">15%</div>
                <div className="text-sm text-white/70 mt-3 font-medium lines-normal">Efficiency acceleration</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 bg-white relative before:content-[''] before:block before:w-full before:h-20 before:bg-[#111625] before:[clip-path:ellipse(55%_100%_at_50%_100%)]"></div>
      </div>

      {/* CHALLENGES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="text-xs font-bold text-[#3B66F5] uppercase tracking-wider mb-3.5">Problem Matrix</div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-12">The operational blindspots<br />we systematically address.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-9 bg-[#F4F7FF] rounded-xl border-l-4 border-[#3B66F5] hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3.5">⚠️</div>
              <h3 className="text-lg font-extrabold mb-2.5">Misplaced Engineering Equipment</h3>
              <p className="text-sm text-[#5C6784] leading-relaxed">Triggers immediate project downtime, safety compliance friction points, and expensive field emergency re-procurement overhead.</p>
            </div>
            <div className="p-9 bg-[#F4F7FF] rounded-xl border-l-4 border-[#3B66F5] hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3.5">🔴</div>
              <h3 className="text-lg font-extrabold mb-2.5">Calibration Outages & Breaches</h3>
              <p className="text-sm text-[#5C6784] leading-relaxed">Uncertified item usage risks severe environmental non-compliance, legal audits, and catastrophic equipment failure.</p>
            </div>
            <div className="p-9 bg-[#F4F7FF] rounded-xl border-l-4 border-[#3B66F5] hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3.5">📉</div>
              <h3 className="text-lg font-extrabold mb-2.5">Inventory Discrepancy Multipliers</h3>
              <p className="text-sm text-[#5C6784] leading-relaxed">Siloed operational units lead to stockouts on critical tasks, phantom warehouse supply values, and redundant procurement purchases.</p>
            </div>
            <div className="p-9 bg-[#F4F7FF] rounded-xl border-l-4 border-[#3B66F5] hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3.5">⏱️</div>
              <h3 className="text-lg font-extrabold mb-2.5">Delayed Reactive Maintenance</h3>
              <p className="text-sm text-[#5C6784] leading-relaxed">Fixing assets only after failure escalates costs, accelerates component depreciation, and degrades client trust levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="text-center mb-[72px]">
            <div className="text-xs font-bold text-[#3B66F5] uppercase tracking-wider mb-3.5">Features</div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">Built for complex field operations.</h2>
          </div>
          <div className="flex flex-col gap-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 border-b border-[#E2E8F0]">
              <div>
                <div className="flex items-center text-sm font-extrabold text-[#3B66F5] border-l-4 border-[#3B66F5] pl-3.5 mb-5">Seamless Tool Tracking</div>
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">Know where every tool is, always.</h3>
                <p className="text-base text-[#5C6784] leading-relaxed mb-6">Coordinates live fulfillment orders and multi-node material routing between staging hubs, transit loops, and client locations. Zero black holes in your inventory.</p>
                <a className="text-sm font-bold text-[#3B66F5] no-underline inline-flex items-center gap-1.5 hover:underline" href="#contact">Get a demo →</a>
              </div>
              <div className="bg-[#3B66F5] rounded-xl p-7 shadow-[0_24px_56px_rgba(59,102,245,0.15)] overflow-hidden">
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4">Live Tracking Feed</div>
                <div className="flex flex-col gap-2">
                  <div className="bg-white/10 rounded p-3 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#2EB67D] flex-shrink-0"></div>
                    <span className="text-xs text-white/90 font-semibold">Tool #TW-221 · In Transit · ETA 2h</span>
                  </div>
                  <div className="bg-white/10 rounded p-3 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#FFDE4D] flex-shrink-0"></div>
                    <span className="text-xs text-white/90 font-semibold">Tool #PG-44 · Calibration Due · 3d</span>
                  </div>
                  <div className="bg-white/10 rounded p-3 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#36C5F0] flex-shrink-0"></div>
                    <span className="text-xs text-white/90 font-semibold">Tool #HM-07 · Field Deployed</span>
                  </div>
                  <div className="bg-white/10 rounded p-3 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#2A52D8] flex-shrink-0"></div>
                    <span className="text-xs text-white/90 font-semibold">Tool #DR-09 · Repair · Vendor B</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 border-b border-[#E2E8F0]">
              <div className="lg:order-2">
                <div className="flex items-center text-sm font-extrabold text-[#3B66F5] border-l-4 border-[#3B66F5] pl-3.5 mb-5">Engineer Transfers</div>
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">Transfer tools between engineers. Instantly.</h3>
                <p className="text-base text-[#5C6784] leading-relaxed mb-6">Transfer system items securely directly between nearby active units, cutting central warehouse shipping costs and transit times dramatically.</p>
                <a className="text-sm font-bold text-[#3B66F5] no-underline inline-flex items-center gap-1.5 hover:underline" href="#contact">Get a demo →</a>
              </div>
              <div className="lg:order-1 bg-[#F4F7FF] rounded-xl p-7 shadow-sm overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3B66F5]/10 text-[#3B66F5] text-xs font-semibold mb-4">P2P Transfer</div>
                <div className="flex items-center justify-between py-5">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-[#3B66F5] text-white flex items-center justify-center text-xl mx-auto mb-2">👷</div>
                    <div className="text-xs font-bold text-[#111625]">Eng. Ravi</div>
                    <div className="text-[11px] text-[#5C6784]">Site A</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-xl text-[#3B66F5]">→</div>
                    <div className="text-[11px] font-bold text-[#3B66F5] bg-[#3B66F5]/10 px-2.5 py-1 rounded-full">Tool #TW-221</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-[#2EB67D] text-white flex items-center justify-center text-xl mx-auto mb-2">👷</div>
                    <div className="text-xs font-bold text-[#111625]">Eng. Priya</div>
                    <div className="text-[11px] text-[#5C6784]">Site B</div>
                  </div>
                </div>
                <div className="bg-[#2EB67D]/10 rounded p-2.5 text-center">
                  <span className="text-xs font-bold text-[#2EB67D]">✅ Transfer confirmed · Log updated</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 border-none">
              <div>
                <div className="flex items-center text-sm font-extrabold text-[#3B66F5] border-l-4 border-[#3B66F5] pl-3.5 mb-5">Audit-Ready Analytics</div>
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">Every action. Logged. Exportable.</h3>
                <p className="text-base text-[#5C6784] leading-relaxed mb-6">Export clear usage histories, pending transfer requests, calibration logs, and compliance records for quick internal audits. Protects with strict user role restrictions and cryptographic timestamps.</p>
                <a className="text-sm font-bold text-[#3B66F5] no-underline inline-flex items-center gap-1.5 hover:underline" href="#contact">Get a demo →</a>
              </div>
              <div className="bg-[#1E2538] rounded-xl p-7 shadow-[0_24px_56px_rgba(59,102,245,0.15)] overflow-hidden">
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4 font-mono">audit-log.json</div>
                <div className="font-mono text-xs text-white/65 leading-relaxed">
                  <div><span className="text-[#708FFF]">event</span>: <span className="text-[#2EB67D]">"TOOL_TRANSFERRED"</span></div>
                  <div><span className="text-[#708FFF]">tool_id</span>: <span className="text-[#FFDE4D]">"TW-221"</span></div>
                  <div><span className="text-[#708FFF]">from</span>: <span className="text-[#36C5F0]">"eng.ravi@site-a"</span></div>
                  <div><span className="text-[#708FFF]">to</span>: <span className="text-[#36C5F0]">"eng.priya@site-b"</span></div>
                  <div><span className="text-[#708FFF]">timestamp</span>: <span className="text-white/40">"2026-06-11T09:41Z"</span></div>
                  <div><span className="text-[#708FFF]">signed</span>: <span className="text-[#2EB67D]">true</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="bg-[#3B66F5] py-24 relative before:content-[''] before:block before:absolute before:-top-[79px] before:left-0 before:right-0 before:h-20 before:bg-[#3B66F5] before:[clip-path:ellipse(55%_100%_at_50%_100%)]" id="architecture">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
            <div>
              <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3.5">Infrastructure Layer</div>
              <h2 className="text-white text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">Built on resilient enterprise cloud systems.</h2>
              <p className="text-lg text-white/75 leading-relaxed mb-8">DTS operates entirely on global AWS cloud environments, using distributed computing frameworks to maintain high availability and security.</p>
              <div className="flex flex-wrap gap-2">
                {['TLS Transit Security', 'AES Token Isolation', 'AWS High Availability', 'Automated Disaster Recovery'].map((pill) => (
                  <span key={pill} className="py-2.5 px-4 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/90">{pill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#111625] rounded-xl border border-white/5 font-mono text-xs overflow-hidden shadow-xl">
              <div className="bg-[#1E2538] py-3 px-4 flex items-center gap-2">
                <div className="w-[11px] h-[11px] rounded-full" style={{ background: '#FF5F56' }}></div>
                <div className="w-[11px] h-[11px] rounded-full" style={{ background: '#FFBD2E' }}></div>
                <div className="w-[11px] h-[11px] rounded-full" style={{ background: '#27C93F' }}></div>
                <span className="text-white/40 text-xs ml-3">dts-auth-validator.js</span>
              </div>
              <div className="p-7 leading-loose text-white/65">
                <p>&gt; Initializing tracking cluster connection...</p>
                <p>&gt; Connection established with secure AWS instance node</p>
                <p>&gt; TLS 1.3 Encryption: <strong>ACTIVE</strong></p>
                <p>&gt; Session Key Storage: <strong>AES-256 Token Locked</strong></p>
                <p>&gt; Status: <span className="text-[#2EB67D] font-semibold">SYSTEM SECURE & OPERATIONAL</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-xs font-bold text-[#3B66F5] uppercase tracking-wider mb-3.5">Corporate DNA</div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">Sabado Technologies</h2>
              <p className="text-lg text-[#5C6784] leading-relaxed">Delivering agile, customer-centric software tools and systems to help forward-looking organizations optimize physical workflows since 2014.</p>
              <div className="grid grid-cols-2 gap-5 mt-9">
                <div className="p-6 bg-[#F4F7FF] rounded-lg"><div className="text-3xl font-extrabold text-[#3B66F5] tracking-tight">2014</div><div className="text-xs text-[#5C6784] mt-1 font-medium">Inception Milestone</div></div>
                <div className="p-6 bg-[#F4F7FF] rounded-lg"><div className="text-3xl font-extrabold text-[#3B66F5] tracking-tight">40+</div><div className="text-xs text-[#5C6784] mt-1 font-medium">Global Enterprise Clients</div></div>
                <div className="p-6 bg-[#F4F7FF] rounded-lg"><div className="text-3xl font-extrabold text-[#3B66F5] tracking-tight">200+</div><div className="text-xs text-[#5C6784] mt-1 font-medium">Combined Professional Years</div></div>
                <div className="p-6 bg-[#F4F7FF] rounded-lg"><div className="text-3xl font-extrabold text-[#3B66F5] tracking-tight">50+</div><div className="text-xs text-[#5C6784] mt-1 font-medium">System Engineers & Architects</div></div>
              </div>
            </div>
            <div className="p-12 bg-[#111625] rounded-2xl relative overflow-hidden before:content-['\\201C'] before:absolute before:-top-6 before:left-4 before:text-[220px] before:text-white/5 before:font-extrabold before:leading-none before:pointer-events-none">
              <p className="text-xl font-bold text-white relative z-10">"With Sabado's Digital Transformation Solutions, we aim to help businesses innovate, compete and win in a digital-first world."</p>
              <div className="text-xs text-white/50 mt-6 font-bold uppercase tracking-wider relative z-10">Sabado Technical Advisory Council</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="bg-[#3B66F5] text-white text-center py-20 px-12 rounded-2xl relative overflow-hidden before:content-[''] before:absolute before:w-[600px] before:h-[600px] before:bg-[radial-gradient(circle,rgba(255,222,77,0.15)_0%,transparent_70%)] before:-top-[200px] before:-right-[200px] before:pointer-events-none">
            <p className="text-lg text-white/80 mb-10 relative">Connect with our expert application architects for a customized deployment breakdown.</p>
            <div>
              <a className="px-9 py-3.5 rounded-full bg-white text-[#3B66F5] text-base font-bold no-underline inline-block hover:scale-105 hover:shadow-lg transition-all duration-200" href="mailto:info@sabadotechnologies.com">Email Technical Team</a>
              <a className="px-9 py-3.5 rounded-full border-2 border-white/40 text-white text-base font-bold no-underline inline-block hover:border-white hover:bg-white/10 transition-all duration-200 ml-3" href="https://sabadotechnologies.com" target="_blank" rel="noopener noreferrer">Visit Main Site →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-10 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#E2E8F0] text-xs text-[#94A0B8] gap-6 md:gap-0">
        <div className="flex flex-col gap-1">
          <span className="font-extrabold text-[#3B66F5] text-sm">DTS Asset Management Solutions</span>
          <span>Corporate Tech Hub: Bengaluru, Karnataka, India</span>
        </div>
        <ul className="flex gap-7 list-none m-0 p-0">
          <li><a href="#overview" className="text-[#94A0B8] no-underline font-medium hover:text-[#3B66F5] transition-colors duration-200">System Flows</a></li>
          <li><a href="#features" className="text-[#94A0B8] no-underline font-medium hover:text-[#3B66F5] transition-colors duration-200">Capabilities</a></li>
          <li><a href="#architecture" className="text-[#94A0B8] no-underline font-medium hover:text-[#3B66F5] transition-colors duration-200">Cloud Layer</a></li>
        </ul>
        <span>&copy; 2026 Sabado Technologies Pvt. Ltd. All rights reserved.</span>
      </footer>
    </div>
  );
}