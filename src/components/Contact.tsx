import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { personalInfo } from '../data/portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'

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
    },
    {
      icon: HiPhone,
      label: 'Phone / WhatsApp',
      value: personalInfo.phone,
      link: `https://wa.me/91${personalInfo.phone}`,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Check my code',
      link: personalInfo.github,
    },
  ]

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
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
              <span className="text-white">Get In Touch</span>
            </h2>
            <div className="w-32 h-px bg-white/20 mb-8"></div>
            <p className="text-white/60 text-lg font-light">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Methods - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-4"
            >
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
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass rounded-none p-6 border border-white/10 hover:border-white/30 transition-all flex items-center gap-4 group"
                  >
                    <div className="text-white/60 group-hover:text-white text-2xl transition-colors">
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <div className="text-white/40 text-xs font-light tracking-wider uppercase mb-1">
                        {method.label}
                      </div>
                      <div className="text-white font-light">{method.value}</div>
                    </div>
                    <FiArrowRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Contact Form - Right */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="lg:col-span-7 glass rounded-none p-8 md:p-10 border border-white/10 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-white/60 font-light text-xs tracking-wider uppercase mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all font-light"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/60 font-light text-xs tracking-wider uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all font-light"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/60 font-light text-xs tracking-wider uppercase mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all resize-none font-light"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-white text-black rounded-none font-semibold text-sm tracking-widest uppercase hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
