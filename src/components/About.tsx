import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/portfolio'
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: FaCode, value: '100%', label: 'Self-Taught', color: 'text-white' },
    { icon: FaRocket, value: '6+', label: 'Months Tech Lead', color: 'text-white' },
    { icon: FaUsers, value: 'Live', label: 'Platform Users', color: 'text-white' },
    { icon: FaAward, value: '1', label: 'Platform Built', color: 'text-white' },
  ]

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
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
          className="space-y-20"
        >
          {/* Section Header - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="text-right max-w-4xl ml-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                <span className="text-white">About</span>
              </h2>
              <div className="w-32 h-px bg-white/20 ml-auto mb-8"></div>
            </motion.div>
          </motion.div>

          {/* Main Content - Right Aligned Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 space-y-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-none p-6 border border-white/10 hover:border-white/30 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`${stat.color} text-2xl group-hover:scale-110 transition-transform`} />
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-white/50 text-xs font-light tracking-wider uppercase">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-8 space-y-8 text-right"
            >
              {/* Main Bio */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/80 text-lg md:text-xl leading-relaxed font-light ml-auto max-w-2xl"
                >
                  {personalInfo.bio}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                  className="text-white/70 text-base md:text-lg leading-relaxed font-light ml-auto max-w-2xl"
                >
                  The platform I built, <span className="text-white font-semibold">GUIDOPIA</span>, 
                  is live and serving users, demonstrating scalable architecture and modern development practices. 
                  I've also worked on AI-powered solutions for educational institutions, automating complex processes 
                  and delivering instant insights.
                </motion.p>
              </div>

              {/* Journey Timeline - Right Aligned */}
              <div className="space-y-6 pt-8">
                {personalInfo.journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 0.8 + index * 0.15 }}
                    whileHover={{ x: -10 }}
                    className="glass rounded-none p-6 border-r-2 border-white/20 hover:border-white/40 transition-all ml-auto max-w-xl group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-right flex-1">
                        <h4 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.1 }}
                className="glass-strong rounded-none p-8 border-2 border-white/20 ml-auto max-w-xl mt-8"
              >
                <div className="text-right space-y-3">
                  <div className="text-white/40 text-xs font-light tracking-wider uppercase">Focus</div>
                  <p className="text-white text-lg font-light leading-relaxed">
                    Building scalable platforms that solve real problems and deliver exceptional user experiences.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
