import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { personalInfo } from '../data/portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FiArrowRight, FiSend } from 'react-icons/fi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
      window.location.href = mailtoLink
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 500)
  }

  const contactMethods = [
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: HiPhone,
      label: 'WhatsApp',
      value: `+91 ${personalInfo.phone}`,
      link: `https://wa.me/91${personalInfo.phone}`,
      description: 'Chat with me instantly'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Let\'s connect',
      link: personalInfo.linkedin,
      description: 'Professional networking'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my code',
      link: personalInfo.github,
      description: 'Explore my repositories'
    },
  ]

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="space-y-20"
        >
          {/* Section Header - Centered & Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6"
            >
              Let's Work Together
            </motion.p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">Get In Touch</span>
            </h2>
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8 mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Have a project in mind? Let's discuss how I can help bring your vision to life
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
                <div className="grid gap-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <motion.a
                        key={index}
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        className="glass rounded-none p-6 border border-white/10 hover:border-white/30 transition-all group relative overflow-hidden"
                      >
                        {/* Hover gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative flex items-start gap-4">
                          <motion.div 
                            className="text-white/60 group-hover:text-white text-3xl transition-colors flex-shrink-0"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white/40 text-xs font-light tracking-wider uppercase mb-1">
                              {method.label}
                            </div>
                            <div className="text-white font-light mb-1 truncate">{method.value}</div>
                            <div className="text-white/50 text-xs font-light">{method.description}</div>
                          </div>
                          <FiArrowRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
                className="glass-strong rounded-none p-6 border border-white/20"
              >
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for Projects
                </h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Currently accepting new projects. Typical response time: within 24 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-none p-8 md:p-10 border border-white/20 space-y-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 font-light text-xs tracking-wider uppercase mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 font-light text-xs tracking-wider uppercase mb-3">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white/70 font-light text-xs tracking-wider uppercase mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none font-light"
                      placeholder="Tell me about your project, timeline, and budget..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-5 bg-white text-black rounded-none font-semibold text-sm tracking-widest uppercase hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <motion.div
                        className="relative z-10"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <FiSend />
                      </motion.div>
                    )}
                  </motion.button>
                  <p className="text-white/40 text-xs font-light text-center">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
