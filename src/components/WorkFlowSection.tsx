import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import _Xarrow, { Xwrapper, useXarrow } from 'react-xarrows';

// Handle Vite ESM/CJS default export interop
const Xarrow = (_Xarrow as any).default || _Xarrow;

// Node Component
const Node = ({ id, children, type }: { id: string; children: React.ReactNode; type: 'blue' | 'yellow' | 'white' }) => {
  const baseClasses = "rounded-full py-1.5 px-4 shadow-sm text-[11px] font-bold tracking-wide text-center z-10 w-max max-w-[140px] md:max-w-[180px] relative transition-transform hover:scale-105";
  let colorClasses = "";
  
  if (type === 'blue') {
    colorClasses = "bg-blue-50 text-blue-600 border border-blue-200";
  } else if (type === 'yellow') {
    colorClasses = "bg-orange-50 text-orange-600 border border-orange-200";
  } else {
    colorClasses = "bg-white text-gray-600 border border-gray-200";
  }

  return (
    <div id={id} className={`${baseClasses} ${colorClasses}`}>
      {children}
    </div>
  );
};

// Label Component
const Label = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <div id={id} className="text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gray-100 z-10">
    {children}
  </div>
);

// Arrow Component
const FlowArrow = ({ start, end }: { start: string; end: string }) => {
  return (
    <Xarrow 
      start={start} 
      end={end} 
      path="smooth" 
      color="#93c5fd" 
      headSize={5} 
      strokeWidth={2.5}
      arrowBodyProps={{ className: 'animated-flow-line' }}
    />
  );
};

// Arrow Wrapper to delay rendering until nodes are painted
const DelayedArrows = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Wait a tiny bit for Framer Motion to paint the DOM
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);
  
  if (!mounted) return null;
  return <>{children}</>;
};

// Container to force arrows to update
const FlowContainer = ({ children }: { children: React.ReactNode }) => {
  const updateXarrow = useXarrow();
  // Trigger an update after mount to ensure arrows render correctly
  useEffect(() => {
    const timeout = setTimeout(updateXarrow, 100);
    return () => clearTimeout(timeout);
  }, [updateXarrow]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-row items-center w-max min-w-full justify-start py-10 px-4 md:px-12"
      onUpdate={updateXarrow}
    >
      {children}
    </motion.div>
  );
};

export function WorkFlowSection() {
  const [activeFlow, setActiveFlow] = useState('tool-order');

  useEffect(() => {
    const handleFlowChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setActiveFlow(customEvent.detail);
      }
    };
    window.addEventListener('change-workflow-tab', handleFlowChange);
    return () => window.removeEventListener('change-workflow-tab', handleFlowChange);
  }, []);

  return (
    <section className="w-full bg-[#fcfbfa] text-black py-20 font-sans overflow-hidden border-t border-gray-100">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Workflow Intelligence
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Automated logic powering your entire tool lifecycle.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { id: 'tool-order', label: 'Tool Order' },
            { id: 'repair', label: 'Repair' },
            { id: 'calibration', label: 'Calibration' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFlow(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeFlow === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px] w-full max-w-full overflow-x-auto pb-10 hide-scrollbar scroll-smooth">
          <Xwrapper>
            <AnimatePresence mode="wait">
              
              {/* TOOL ORDER FLOW */}
              {activeFlow === 'tool-order' && (
                <FlowContainer key="tool-order">
                  <div className="flex flex-row items-center gap-16 md:gap-24 w-max">
                    {/* Node 1 */}
                    <Node id="to-raise" type="blue">FE - Raise a Tool Order</Node>
                    
                    {/* Split 1 */}
                    <div className="flex flex-col justify-center gap-16">
                      <Node id="to-avail" type="yellow">Available Quantity</Node>
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Node id="to-not-avail" type="yellow">Not Available</Node>
                        <Node id="to-sa-stock" type="blue">Super Admin - Raise Stock Transfer</Node>
                      </div>
                    </div>

                    {/* Linear Path */}
                    <Node id="to-ship" type="white">Logistics - Shipment</Node>
                    <Node id="to-fe-ack" type="white">FE - Acknowledgement</Node>
                    <Node id="to-fe-return" type="blue">FE - Tool Return</Node>

                    {/* Final Split */}
                    <div className="flex flex-col justify-center gap-24">
                      {/* Return to WH */}
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Label id="to-lbl-wh">Return to WH</Label>
                        <Node id="to-wh-pickup" type="white">Logistics - Pickup</Node>
                        <Node id="to-wh-ack" type="white">Logistics - Acknowledgement</Node>
                        <Node id="to-wh-close" type="blue">Tool Order Closed</Node>
                      </div>

                      {/* Return to FE */}
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Label id="to-lbl-fe">Return to FE</Label>
                        <Node id="to-fe-sa-app" type="blue">Super Admin - Approval</Node>
                        <Node id="to-fe-pickup" type="white">Logistics - Pickup</Node>
                        <Node id="to-fe-fe2ack" type="white">FE 2- Acknowledgement</Node>
                        <Node id="to-fe-close" type="blue">Tool Order Closed</Node>
                      </div>
                    </div>

                    {/* Tool Order Arrows */}
                    <DelayedArrows>
                      <FlowArrow start="to-raise" end="to-avail" />
                      <FlowArrow start="to-raise" end="to-not-avail" />
                      <FlowArrow start="to-not-avail" end="to-sa-stock" />
                      <FlowArrow start="to-avail" end="to-ship" />
                      <FlowArrow start="to-sa-stock" end="to-ship" />
                      <FlowArrow start="to-ship" end="to-fe-ack" />
                      <FlowArrow start="to-fe-ack" end="to-fe-return" />
                      
                      <FlowArrow start="to-fe-return" end="to-lbl-wh" />
                      <FlowArrow start="to-fe-return" end="to-lbl-fe" />
                      
                      <FlowArrow start="to-lbl-wh" end="to-wh-pickup" />
                      <FlowArrow start="to-wh-pickup" end="to-wh-ack" />
                      <FlowArrow start="to-wh-ack" end="to-wh-close" />
                      
                      <FlowArrow start="to-lbl-fe" end="to-fe-sa-app" />
                      <FlowArrow start="to-fe-sa-app" end="to-fe-pickup" />
                      <FlowArrow start="to-fe-pickup" end="to-fe-fe2ack" />
                      <FlowArrow start="to-fe-fe2ack" end="to-fe-close" />
                    </DelayedArrows>
                  </div>
                </FlowContainer>
              )}

              {/* REPAIR FLOW */}
              {activeFlow === 'repair' && (
                <FlowContainer key="repair">
                  <div className="flex flex-row items-center gap-16 md:gap-24 w-max">
                    <Node id="rep-raise" type="blue">Super Admin-Raise a Repair Request</Node>
                    <Node id="rep-ship" type="white">Shipment to Vendor</Node>
                    <Node id="rep-ack" type="white">Logistics Acknowledgement</Node>
                    <Node id="rep-conf" type="blue">SA- Confirmation on Repair</Node>
                    
                    <div className="flex flex-col justify-center gap-16">
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Node id="rep-repaired" type="yellow">Repaired</Node>
                        <Node id="rep-add-inv" type="white">Added to Inventory</Node>
                      </div>
                      
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Node id="rep-scrap" type="yellow">Scrap</Node>
                        <Node id="rep-flag-scrap" type="white">Asset will be Flagged as Scrap</Node>
                      </div>
                    </div>

                    {/* Repair Arrows */}
                    <DelayedArrows>
                      <FlowArrow start="rep-raise" end="rep-ship" />
                      <FlowArrow start="rep-ship" end="rep-ack" />
                      <FlowArrow start="rep-ack" end="rep-conf" />
                      <FlowArrow start="rep-conf" end="rep-repaired" />
                      <FlowArrow start="rep-conf" end="rep-scrap" />
                      <FlowArrow start="rep-repaired" end="rep-add-inv" />
                      <FlowArrow start="rep-scrap" end="rep-flag-scrap" />
                    </DelayedArrows>
                  </div>
                </FlowContainer>
              )}

              {/* CALIBRATION FLOW */}
              {activeFlow === 'calibration' && (
                <FlowContainer key="calibration">
                  <div className="flex flex-row items-center gap-16 md:gap-24 w-max">
                    <Node id="cal-due" type="white">Asset crossed the Calibration Due date</Node>
                    <Node id="cal-raise" type="blue">Super Admin-Raise a Calibration Request</Node>
                    <Node id="cal-ship" type="white">Shipment to Vendor</Node>
                    <Node id="cal-ack" type="white">Logistics Acknowledgement</Node>
                    <Node id="cal-conf" type="blue">SA- Confirmation on Calibration</Node>
                    
                    <div className="flex flex-col justify-center gap-16">
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Node id="cal-calibrated" type="yellow">Calibrated</Node>
                        <Node id="cal-add-inv" type="white">Added to Inventory</Node>
                      </div>
                      
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Node id="cal-recal" type="yellow">Re-Calibration</Node>
                        <Node id="cal-continue" type="white">Continue with Calibration Workflow</Node>
                      </div>
                      
                      <div className="flex flex-row items-center gap-16 md:gap-24">
                        <Node id="cal-scrap" type="yellow">Scrap</Node>
                        <Node id="cal-flag" type="white">Asset will be Flagged as Scrap</Node>
                      </div>
                    </div>

                    {/* Calibration Arrows */}
                    <DelayedArrows>
                      <FlowArrow start="cal-due" end="cal-raise" />
                      <FlowArrow start="cal-raise" end="cal-ship" />
                      <FlowArrow start="cal-ship" end="cal-ack" />
                      <FlowArrow start="cal-ack" end="cal-conf" />
                      <FlowArrow start="cal-conf" end="cal-calibrated" />
                      <FlowArrow start="cal-conf" end="cal-recal" />
                      <FlowArrow start="cal-conf" end="cal-scrap" />
                      
                      <FlowArrow start="cal-calibrated" end="cal-add-inv" />
                      <FlowArrow start="cal-recal" end="cal-continue" />
                      <FlowArrow start="cal-scrap" end="cal-flag" />
                    </DelayedArrows>
                  </div>
                </FlowContainer>
              )}

            </AnimatePresence>
          </Xwrapper>
        </div>
      </div>
    </section>
  );
}
