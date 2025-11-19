import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '../data/portfolio'
import { FiExternalLink, FiX, FiArrowRight } from 'react-icons/fi'
import MagneticButton from './ui/MagneticButton'
import TextReveal from './ui/TextReveal'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
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
          className="space-y-24"
        >
          {/* Section Header - Left Aligned */}
          <TextReveal>
            <div className="max-w-3xl">
              <motion.h2 
                className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span 
                  className="text-white inline-block"
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  Work
                </motion.span>
              </motion.h2>
              <motion.div 
                className="w-32 h-px bg-white/20 mb-8"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.p 
                className="text-white/60 text-lg font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Building real-world solutions that make a difference
              </motion.p>
            </div>
          </TextReveal>

          {/* Project - Slick Design */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Image - Left - Enhanced with 3D Effect */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -15 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="lg:col-span-7 relative overflow-hidden border border-white/10 group-hover:border-white/30 transition-all perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="w-full h-96 bg-white/5 flex items-center justify-center">
                      <motion.div 
                        className="text-6xl font-bold text-white/10"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        {project.name[0]}
                      </motion.div>
                    </div>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ y: 100 }}
                    whileHover={{ y: 0 }}
                  />
                  <motion.div 
                    className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-white text-sm font-light tracking-wider uppercase">
                      View Project <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><FiArrowRight /></motion.span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="lg:col-span-5 space-y-6"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {project.name}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-white/10 text-white text-xs font-light tracking-wider uppercase border border-white/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-white/5 text-white/70 text-xs font-light tracking-wider uppercase border border-white/10 hover:border-white/30 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Actions - Magnetic Buttons */}
                  <div className="flex items-center gap-6 pt-4 relative z-10">
                    {project.link !== '#' && (
                      <MagneticButton>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm tracking-wider uppercase hover:bg-white/90 transition-all cursor-pointer"
                        >
                          <motion.span
                            whileHover={{ rotate: [0, -15, 15, -15, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <FiExternalLink />
                          </motion.span>
                          View Live
                        </a>
                      </MagneticButton>
                    )}
                    <MagneticButton>
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="flex items-center gap-2 px-6 py-3 text-white border border-white/20 font-light text-sm tracking-wider uppercase hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer"
                      >
                        View Details
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FiArrowRight />
                        </motion.span>
                      </button>
                    </MagneticButton>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)
              if (!project) return null
              return (
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-8">
                    <h3 className="text-4xl font-bold text-white tracking-tight">{project.name}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed font-light mb-8">
                    {project.longDescription}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-white/5 text-white/70 text-xs font-light tracking-wider uppercase border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link !== '#' && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-none font-semibold text-sm tracking-wider uppercase hover:bg-white/90 transition-all"
                      >
                        <FiExternalLink />
                        Visit Live Site
                      </motion.a>
                    )}
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects
