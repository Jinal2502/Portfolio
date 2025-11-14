import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Work', to: 'projects' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="text-xl font-bold text-white cursor-pointer tracking-tight"
            >
              JR
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer text-xs font-light tracking-[0.15em] uppercase relative group"
                  activeClass="text-white"
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-[1px] bg-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 space-y-4 border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/60 hover:text-white transition-colors cursor-pointer text-sm font-light tracking-[0.15em] uppercase py-2"
                activeClass="text-white"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
