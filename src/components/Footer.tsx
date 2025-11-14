import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { personalInfo } from '../data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/40 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/40 hover:text-white transition-colors"
            >
              <FaLinkedin size={16} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/40 hover:text-white transition-colors"
            >
              <HiMail size={16} />
            </motion.a>
          </div>
          <p className="text-white/20 text-xs font-light">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
