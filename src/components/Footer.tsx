import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FiArrowUp } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', to: 'about' },
    { name: 'Work', to: 'projects' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: HiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: HiPhone, href: `https://wa.me/91${personalInfo.phone}`, label: 'WhatsApp' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {personalInfo.name.split(' ')[0]}
              </h3>
              <p className="text-white/60 font-light leading-relaxed max-w-md">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/40 hover:text-white transition-colors text-xl"
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-white/60 hover:text-white transition-colors cursor-pointer font-light text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-white transition-all group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white/60 hover:text-white transition-colors font-light text-sm block"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/91${personalInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors font-light text-sm block"
                >
                  +91 {personalInfo.phone}
                </a>
              </li>
            </ul>
            
            {/* Availability Badge */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/70 text-xs font-light">
                  {personalInfo.availability.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-xs font-light flex items-center gap-2">
            © {currentYear} {personalInfo.name}. Built with <FaHeart className="text-red-400 animate-pulse" size={12} /> and React
          </p>
          
          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-light tracking-wider uppercase group"
          >
            Back to Top
            <span className="w-6 h-6 border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-all">
              <FiArrowUp size={12} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
