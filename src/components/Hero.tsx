import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { personalInfo } from '../data/portfolio'

const Hero = () => {
  const [currentIntro, setCurrentIntro] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  
  // Custom cursor
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntro((prev) => (prev + 1) % personalInfo.intro.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const heroSection = document.getElementById('hero')
    if (!heroSection) return

    const handleMouseEnter = () => {
      setShowCursor(true)
      document.body.classList.add('custom-cursor-active')
    }

    const handleMouseLeave = () => {
      setShowCursor(false)
      document.body.classList.remove('custom-cursor-active')
    }

    heroSection.addEventListener('mouseenter', handleMouseEnter)
    heroSection.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousemove', moveCursor)

    return () => {
      heroSection.removeEventListener('mouseenter', handleMouseEnter)
      heroSection.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousemove', moveCursor)
      setShowCursor(false)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [cursorX, cursorY])

  // Split name for animation
  const firstName = personalInfo.name.split(' ')[0]
  const lastName = personalInfo.name.split(' ')[1]

  return (
    <>
      {/* Custom Cursor - Only visible in Hero section */}
      {showCursor && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        >
          <div className="w-full h-full rounded-full bg-white"></div>
        </motion.div>
      )}

      <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-black pt-20">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Content - Balanced Design */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Name & Main Content */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-white/60 text-xs md:text-sm font-light tracking-[0.3em] uppercase"
                >
                  {personalInfo.heroText.greeting}
                </motion.p>

                {/* Animated Name */}
                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
                  >
                    {/* First Name */}
                    <div className="flex items-center justify-start gap-1 md:gap-2">
                      {firstName.split('').map((letter, index) => (
                        <motion.span
                          key={`first-${index}`}
                          initial={{ opacity: 0, y: 30, rotateX: -90 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            delay: 0.3 + index * 0.03,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.15,
                            y: -8,
                            transition: { duration: 0.2 }
                          }}
                          className="inline-block text-gradient cursor-default"
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Last Name */}
                    <div className="flex items-center justify-start gap-1 md:gap-2 mt-1">
                      {lastName.split('').map((letter, index) => (
                        <motion.span
                          key={`last-${index}`}
                          initial={{ opacity: 0, y: 30, rotateX: -90 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            delay: 0.6 + index * 0.03,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.15,
                            y: -8,
                            transition: { duration: 0.2 }
                          }}
                          className="inline-block text-white cursor-default"
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                      ))}
                    </div>
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-white/80 font-light tracking-wide"
                >
                  {personalInfo.heroText.subtitle}
                </motion.p>

                {/* Rotating Intro Text */}
                <motion.div
                  key={currentIntro}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="h-14 md:h-16 flex items-center justify-start"
                >
                  <p className="text-base md:text-lg lg:text-xl text-white/70 font-light italic max-w-2xl">
                    "{personalInfo.intro[currentIntro]}"
                  </p>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="space-y-2 max-w-2xl"
                >
                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                    {personalInfo.heroText.description}
                  </p>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 -mt-2"
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 8px 30px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-10 py-4 bg-white text-black font-semibold text-sm tracking-widest uppercase overflow-hidden group"
                  >
                    <span className="relative z-10">View Work</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 glass text-white font-semibold text-sm tracking-widest uppercase border-2 border-white/20 transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex items-center gap-6 pt-2"
              >
                {[
                  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: HiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                  { icon: HiPhone, href: `https://wa.me/91${personalInfo.phone}`, label: 'Phone' },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{ 
                        scale: 1.4, 
                        y: -5,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/50 hover:text-white transition-colors relative group"
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-300"
                        style={{ borderRadius: '50%' }}
                      />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Right Column - Visual Element (Optional) */}
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative h-full flex items-center justify-end"
              >
                <div className="w-full max-w-xs space-y-4">
                  <div className="glass rounded-none p-6 border border-white/10">
                    <div className="text-white/40 text-xs font-light tracking-wider uppercase mb-2">Status</div>
                    <div className="text-white text-lg font-light">Available for projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
