import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { pricing } from '../data/portfolio'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="space-y-16"
        >
          {/* Section Header - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="max-w-3xl"
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">Pricing</span>
            </h2>
            <div className="w-32 h-px bg-white/20 mb-8"></div>
            <p className="text-white/60 text-lg font-light">
              Transparent pricing for your development needs
            </p>
          </motion.div>

          {/* Pricing Card - Improved Design */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Spacer */}
            <div className="lg:col-span-3"></div>
            
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="lg:col-span-6 glass-strong rounded-none p-10 md:p-12 border-2 border-white/20 hover:border-white/40 transition-all relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="text-white/40 text-xs font-light tracking-wider uppercase mb-4">
                    {pricing.fullStackPlatform.description}
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-7xl md:text-8xl font-bold text-white tracking-tight">
                      {pricing.fullStackPlatform.price}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm font-light">
                    One-time payment for complete platform
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/10">
                  <h4 className="text-xl font-semibold text-white">What's Included:</h4>
                  <ul className="space-y-4">
                    {pricing.fullStackPlatform.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 text-white/80 font-light"
                      >
                        <FiCheck className="text-white flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-white text-black rounded-none font-semibold text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
                    >
                      Get Started
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </Link>
                  <p className="text-white/40 text-xs font-light text-center mt-4">
                    {pricing.note}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Spacer */}
            <div className="lg:col-span-3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
