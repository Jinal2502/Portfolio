import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { pricing } from '../data/portfolio'
import { FiCheck, FiArrowRight, FiStar } from 'react-icons/fi'
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

          {/* Three-Tier Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricing.tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.1 + index * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`
                  glass-strong rounded-none p-8 md:p-10 relative overflow-hidden group
                  ${tier.popular 
                    ? 'border-2 border-white/40' 
                    : 'border border-white/20 hover:border-white/30'
                  }
                  transition-all
                `}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 text-xs font-semibold tracking-wider uppercase flex items-center gap-1">
                    <FiStar size={12} />
                    Popular
                  </div>
                )}

                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 
                  ${tier.popular ? 'opacity-30' : 'opacity-0'}
                  group-hover:opacity-100 transition-opacity
                `}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Tier Name */}
                  <div className={tier.popular ? 'pt-6' : ''}>
                    <h3 className="text-white/40 text-xs font-light tracking-wider uppercase mb-2">
                      {tier.description}
                    </h3>
                    <h4 className="text-3xl font-bold text-white tracking-tight mb-1">
                      {tier.name}
                    </h4>
                  </div>

                  {/* Price */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-white/50 text-xs font-light">
                      One-time project fee
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.2 + index * 0.15 + featureIndex * 0.05 }}
                          className="flex items-start gap-3 text-white/70 font-light text-sm"
                        >
                          <FiCheck className="text-white flex-shrink-0 mt-0.5" size={16} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={500}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          w-full px-6 py-3 rounded-none font-semibold text-xs tracking-widest uppercase 
                          transition-all flex items-center justify-center gap-2 group
                          ${tier.popular
                            ? 'bg-white text-black hover:bg-white/90'
                            : 'border border-white/30 text-white hover:bg-white/10'
                          }
                        `}
                      >
                        Get Started
                        <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white/40 text-sm font-light text-center"
          >
            {pricing.note}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
