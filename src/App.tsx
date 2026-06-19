import Navbar from './components/Navbar'
import AnimatedHeading from './components/AnimatedHeading'
import FadeIn from './components/FadeIn'
import { DashboardFeaturesSection } from './components/DashboardFeaturesSection'
import { DTTsOverviewSection } from './components/DTTsOverviewSection'
import { IndustryChallengesSection } from './components/IndustryChallengesSection'
import { AboutUsSection } from './components/AboutUsSection'
import { FooterSection } from './components/FooterSection'
import ContactModal from './components/ContactModal'

const VIDEO_URL = '/combined_background.mp4'

export default function App() {
  return (
    <div className="w-full bg-black relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden text-white selection:bg-white/30 font-sans">
        {/* Background video — fixed behind everything */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src={VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
        </div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Hero content pushed to bottom */}
          <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

              {/* Left column - spans 8 columns for wider text area */}
              <div className="lg:col-span-8">
                <AnimatedHeading
                  text={"Digital Tools &\nTracking System"}
                  className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] mb-6 tracking-tight drop-shadow-xl"
                  initialDelay={200}
                  charDelay={30}
                />

                <FadeIn delay={1000} duration={1000}>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-light max-w-2xl drop-shadow-md">
                    Transforming Enterprise Tool Management with Sabado Technologies
                  </p>
                </FadeIn>

                <FadeIn delay={1400} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                      className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-white/10"
                    >
                      Get Started
                    </button>
                  </div>
                </FadeIn>
              </div>

              {/* Right column — tag */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <FadeIn delay={1600} duration={1000} className="w-full lg:w-auto">
                  <div className="liquid-glass border border-white/20 px-8 py-5 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-md">
                    <span className="text-lg md:text-xl font-light text-gray-100 block">
                      Assets. Management. Intelligence.
                    </span>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <div id="overview">
        <DTTsOverviewSection />
      </div>

      {/* Features Sub-section */}
      <div id="features">
        <DashboardFeaturesSection />
      </div>

      <IndustryChallengesSection />

      {/* About Us Section */}
      <div id="about">
        <AboutUsSection />
      </div>

      <ContactModal />
      {/* Footer Section */}
      <FooterSection />

    </div>
  )
}
