import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h3>
              <p className="text-gray-500 mb-8">Reach out to us for any inquiries, demos, or support. We're here to help.</p>

              <div className="space-y-4">
                <a href="mailto:info@sabadotechnologies.com" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-blue-600 font-medium">info@sabadotechnologies.com</p>
                  </div>
                </a>

                <a href="tel:+918861111186" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-blue-600 font-medium">+91 88611 11186</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-700 block mb-1">Global Headquarters:</strong>
                  309, Sai Paragon Meadows, Brookefields, BEML Layout, Bengaluru, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
