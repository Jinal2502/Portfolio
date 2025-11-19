import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import SmoothScroll from './components/ui/SmoothScroll'
import ParticlesBackground from './components/ui/ParticlesBackground'
import ScrollProgress from './components/ui/ScrollProgress'
import CursorEffect from './components/ui/CursorEffect'

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black overflow-x-hidden w-full relative">
        <ParticlesBackground />
        <ScrollProgress />
        <CursorEffect />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
