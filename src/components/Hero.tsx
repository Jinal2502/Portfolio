import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { personalInfo } from '../data/portfolio'

const Hero = () => {
  const [currentIntro, setCurrentIntro] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntro((prev) => (prev + 1) % personalInfo.intro.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
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
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {/* FOMO Availability Status */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-white/60 text-sm font-light tracking-wider uppercase"
                >
                  {personalInfo.availability.status}
                </motion.p>

                {/* Service-Focused Headline */}
                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
                  >
                    {personalInfo.heroText.headline}
                  </motion.h1>
                </div>

                {/* Sub-headline */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-3xl"
                >
                  {personalInfo.heroText.subheadline}
                </motion.p>

                {/* Name & Title */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="pt-2"
                >
                  <p className="text-white/50 text-sm font-light">
                    {personalInfo.name} • {personalInfo.title}
                  </p>
                </motion.div>

                {/* Rotating Intro Text */}
                <motion.div
                  key={currentIntro}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="h-12 md:h-14 flex items-center justify-start pt-2"
                >
                  <p className="text-sm md:text-base lg:text-lg text-white/60 font-light italic max-w-2xl">
                    "{personalInfo.intro[currentIntro]}"
                  </p>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 -mt-2"
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
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
                  offset={-64}
                  duration={500}
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
                transition={{ delay: 1.0, duration: 0.5 }}
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
                      transition={{ delay: 1.2 + index * 0.1, type: 'spring', stiffness: 200 }}
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
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative h-full flex items-center justify-end"
              >
                <div className="w-full max-w-xs space-y-4">
                  <div className="glass rounded-none p-6 border border-white/10">
                    <div className="text-white/40 text-xs font-light tracking-wider uppercase mb-2">Status</div>
                    <div className="text-white text-lg font-light">{personalInfo.availability.status}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
