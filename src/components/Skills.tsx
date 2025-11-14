import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/portfolio'
import { 
  FaReact, 
  FaNode, 
  FaGitAlt,
  FaCode
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiJavascript, 
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiVite,
  SiPostman,
  SiVisualstudiocode
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const iconMap: { [key: string]: any } = {
    'React.js': FaReact,
    'TypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'Tailwind CSS': SiTailwindcss,
    'HTML/CSS': SiHtml5,
    'Node.js': FaNode,
    'Express': SiExpress,
    'MongoDB': SiMongodb,
    'Git': FaGitAlt,
    'Vite': SiVite,
    'Postman': SiPostman,
    'VS Code': SiVisualstudiocode,
  }

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
    const Icon = iconMap[skill.name] || FaCode

    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: index * 0.1 }}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className="text-white/60 text-lg" />
            <span className="text-white/80 font-light text-sm tracking-wide">{skill.name}</span>
          </div>
          <span className="text-white/40 text-xs font-light">{skill.level}%</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </motion.div>
    )
  }

  const SkillCategory = ({ 
    title, 
    skillList, 
    delay 
  }: { 
    title: string; 
    skillList: { name: string; level: number }[]; 
    delay: number 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay }}
      className="glass rounded-none p-8 border border-white/10 space-y-6"
    >
      <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
        {title}
      </h3>
      <div className="space-y-6">
        {skillList.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Skills</span>
            </h2>
            <div className="w-24 h-px bg-white/20 mx-auto mb-8"></div>
            <p className="text-white/50 text-lg font-light">
              Technologies I work with to build amazing products
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory title="Frontend" skillList={skills.frontend} delay={0.2} />
            <SkillCategory title="Backend" skillList={skills.backend} delay={0.4} />
            <SkillCategory title="Tools" skillList={skills.tools} delay={0.6} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
