import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { pricing } from '../data/portfolio'
import { FiCheck, FiArrowRight, FiStar, FiZap, FiAward } from 'react-icons/fi'
import { Link } from 'react-scroll'
import MagneticButton from './ui/MagneticButton'
import TextReveal from './ui/TextReveal'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-20 md:py-24 bg-black relative overflow-hidden min-h-screen flex items-center">
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
          className="space-y-8 md:space-y-10"
        >
          {/* Section Header - Compact */}
          <TextReveal>
            <div className="max-w-3xl mb-8 md:mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              >
                <span className="text-white">Pricing</span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-24 h-px bg-white/20 mb-4"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-base font-light"
              >
                Transparent pricing for your development needs
              </motion.p>
            </div>
          </TextReveal>

          {/* Pricing Grid - Equal Size, Premium Highlighted */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
            {pricing.tiers.map((tier, index) => {
              const isElite = tier.premium
              const isPopular = tier.popular
              
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                  transition={{ 
                    delay: 0.1 + index * 0.1, 
                    type: 'spring', 
                    stiffness: 100,
                    duration: 0.6
                  }}
                  whileHover={isElite ? { scale: 1.03, y: -10 } : { scale: 1.02, y: -8 }}
                  className={`
                    relative overflow-hidden group flex flex-col
                    ${isElite 
                      ? 'glass-strong rounded-none p-6 md:p-8 border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] ring-2 ring-cyan-400/15' 
                      : 'glass-strong rounded-none p-6 md:p-8 border border-white/20 hover:border-white/30'
                    }
                    ${isPopular ? 'border-2 border-white/40' : ''}
                    transition-all
                  `}
                >
                  {/* Premium Elite - Special Effects */}
                  {isElite && (
                    <>
                      {/* Animated gradient border - Balanced */}
                      <motion.div
                        className="absolute inset-0 rounded-none opacity-50"
                        style={{
                          background: 'linear-gradient(45deg, rgba(6,182,212,0.15), rgba(59,130,246,0.2), rgba(6,182,212,0.15))',
                          backgroundSize: '200% 200%',
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      {/* Premium Badge - Visible but refined */}
                      <div className="absolute top-3 right-3 bg-gradient-to-br from-cyan-500/20 via-cyan-400/25 to-cyan-500/20 backdrop-blur-md border border-cyan-400/50 text-cyan-300 px-4 py-1.5 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-cyan-500/30 z-10">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        >
                          <FiZap size={12} className="text-cyan-300" />
                        </motion.div>
                        Premium
                      </div>
                      {/* Corner accent - More visible */}
                      <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-cyan-400/50" />
                      <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-cyan-400/50" />
                      {/* Glow effect - Balanced */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-blue-500/5 to-transparent"
                        animate={{
                          opacity: [0.3, 0.4, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </>
                  )}

                  {/* Popular Badge for Essential */}
                  {isPopular && !isElite && (
                    <div className="absolute top-3 right-3 bg-white text-black px-3 py-1 text-xs font-semibold tracking-wider uppercase flex items-center gap-1 z-10">
                      <FiStar size={12} />
                      Popular
                    </div>
                  )}


                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 
                    ${isPopular || isElite ? 'opacity-30' : 'opacity-0'}
                    group-hover:opacity-100 transition-opacity
                  `}></div>
                  
                  <div className="relative z-10 flex flex-col flex-1 space-y-4">
                    {/* Tier Name - Enhanced */}
                    <div className={isPopular || isElite ? 'pt-6' : 'pt-0'}>
                      <h3 className={`text-white/70 font-medium tracking-wider uppercase mb-2 ${isElite ? 'text-sm' : 'text-xs'}`}>
                        {tier.description}
                      </h3>
                      {tier.subDescription && (
                        <p className="text-white/50 text-xs font-light mb-3">
                          {tier.subDescription}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <h4 className={`font-bold text-white tracking-tight ${isElite ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
                          {tier.name}
                        </h4>
                        {isElite && (
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          >
                            <FiAward className="text-cyan-400" size={20} />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Price - Enhanced */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className={`font-bold text-white tracking-tight ${isElite ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`}>
                          {tier.price}
                        </span>
                      </div>
                      <p className="text-white/60 text-xs font-medium">
                        One-time project fee
                      </p>
                      {isElite && tier.value && (
                        <motion.p
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.4 }}
                          className="text-cyan-400 text-sm font-bold mt-2 flex items-center gap-1.5"
                        >
                          <FiZap size={14} />
                          {tier.value}
                        </motion.p>
                      )}
                    </div>

                    {/* Features - Enhanced List */}
                    <div className="space-y-2 pt-4 border-t border-white/10 flex-1">
                      <ul className="space-y-2.5">
                        {tier.features.map((feature, featureIndex) => {
                          // Highlight key terms in features
                          const highlightTerms = (text: string) => {
                            const terms = ['Frontend', 'Backend', 'Design', 'UI/UX', 'Figma', 'Adobe XD', 'Database', 'API', 'Authentication', 'Deployment', 'Support', 'Manager', 'Updates'];
                            let highlightedText = text;
                            terms.forEach(term => {
                              const regex = new RegExp(`(${term})`, 'gi');
                              highlightedText = highlightedText.replace(regex, `<span class="text-white font-semibold">$1</span>`);
                            });
                            return highlightedText;
                          };

                          return (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.2 + index * 0.1 + featureIndex * 0.03 }}
                              className="flex items-start gap-2.5 text-white/80 font-medium text-sm"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 mt-0.5"
                              >
                                <FiCheck className={`${isElite ? 'text-cyan-400' : 'text-white'}`} size={16} />
                              </motion.div>
                              <span 
                                className="leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: highlightTerms(feature) }}
                              />
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* CTA Button - Compact */}
                    <div className="pt-4 mt-auto">
                      <MagneticButton>
                        <Link
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-64}
                          duration={500}
                        >
                          <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                              w-full rounded-none font-semibold tracking-widest uppercase 
                              transition-all flex items-center justify-center gap-2 group relative overflow-hidden
                              ${isElite
                                ? 'px-6 py-3.5 bg-gradient-to-r from-cyan-500/15 via-cyan-400/20 to-cyan-500/15 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 hover:from-cyan-500/25 hover:via-cyan-400/30 hover:to-cyan-500/25 hover:border-cyan-400/70 text-xs shadow-lg shadow-cyan-500/25'
                                : isPopular
                                ? 'px-5 py-2.5 bg-white text-black hover:bg-white/90 text-xs'
                                : 'px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 text-xs'
                              }
                            `}
                          >
                            {isElite && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-cyan-300/40 to-cyan-400/30"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                              />
                            )}
                            <span className="relative z-10">
                              {isElite ? 'Get Premium' : 'Get Started'}
                            </span>
                            <motion.span
                              className="relative z-10"
                              animate={isElite ? { x: [0, 4, 0] } : {}}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <FiArrowRight className={isElite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'} size={14} />
                            </motion.span>
                          </motion.button>
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Note - Compact */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/40 text-xs font-light text-center mt-8"
          >
            {pricing.note}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
