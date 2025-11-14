import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
