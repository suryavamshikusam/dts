import { Globe, Warehouse, Truck, Activity } from 'lucide-react';
import FadeIn from './FadeIn';

const features = [
  {
    icon: Globe,
    title: 'Global Freight Network',
    description: 'Seamless integration across continents with end-to-end visibility and cross-border compliance.',
  },
  {
    icon: Warehouse,
    title: 'Smart Warehousing',
    description: 'Automated fulfillment centers driven by predictive AI models and real-time inventory tracking.',
  },
  {
    icon: Truck,
    title: 'Dynamic Routing',
    description: 'Adaptive logistics paths minimizing transit time, reducing costs, and lowering carbon footprint.',
  },
  {
    icon: Activity,
    title: 'Live Telemetry',
    description: 'Micro-second tracking ensuring cargo security, condition monitoring, and precise ETA delivery.',
  },
];

export default function SupplyChainFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-12">
      {features.map((feature, i) => (
        <FadeIn key={i} delay={i * 200} duration={800}>
          <div className="liquid-glass border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-500 group h-full">
            <feature.icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
            <h3 className="text-2xl font-light text-white mb-4">{feature.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
