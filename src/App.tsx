import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CallToActionSection } from './sections/CallToActionSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { ScreenshotsSection } from './sections/ScreenshotsSection'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <Navbar />

      <main>
        <HeroSection />
        <ScreenshotsSection />
        <FeaturesSection />
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  )
}

export default App