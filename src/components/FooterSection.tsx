export function FooterSection() {
  return (
    <footer className="w-full bg-[#f8f9fa] text-gray-800 py-20 px-6 md:px-12 flex flex-col items-center border-t border-gray-200">
      <div className="w-full max-w-7xl flex flex-col gap-16">
        
        {/* Top row: Footprint & Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Global Footprint */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-gray-900">Global Footprint</h4>
            
            <div className="space-y-8">
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Global Headquarters:</h5>
                <p className="text-gray-600 font-light leading-relaxed">
                  309, Sai Paragon Meadows, Brookefields, BEML<br/>
                  Layout, Bengaluru, India
                </p>
              </div>

              <div>
                <h5 className="font-bold text-gray-800 mb-2">US Office:</h5>
                <p className="text-gray-600 font-light">860, Glenhill Dr, Fremont, CA – 94539, USA</p>
              </div>
            </div>
          </div>
          
          {/* Right: Connect Channels */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-gray-900">Connect Channels</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800">Telephone:</span>
                <a href="tel:+918861111186" className="text-[#0055FF] hover:underline font-light">+91 88611 11186</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800">Corporate Web:</span>
                <a href="https://sabadotechnologies.com" target="_blank" rel="noreferrer" className="text-[#0055FF] hover:underline font-light">sabadotechnologies.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800">Product Hub:</span>
                <a href="https://ringpe.com" target="_blank" rel="noreferrer" className="text-[#0055FF] hover:underline font-light">ringpe.com</a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200" />
        
        {/* Bottom row: Mission & Copyright */}
        <div className="flex flex-col items-center text-center gap-8">
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-4xl leading-relaxed">
            With Sabado's Digital Transformation Solutions, we aim to help businesses innovate, compete and win in a digital-first world.<br/>
            Because, we're here to help.
          </p>
          
          <p className="text-gray-400 font-light text-sm mt-8">
            © 2026 Sabado Technologies. All rights reserved. Built with the latest web tech.
          </p>
        </div>

      </div>
    </footer>
  )
}
