import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ParticlesBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const particles = Array.from({ length: 30 }, (_, i) => i)

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const randomX = Math.random() * dimensions.width
        const randomY = Math.random() * dimensions.height
        const randomOpacity = Math.random() * 0.5 + 0.1
        const randomDuration = Math.random() * 20 + 10
        
        return (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: randomX,
              y: randomY,
              opacity: randomOpacity,
            }}
            animate={{
              y: [randomY, Math.random() * dimensions.height],
              x: [randomX, Math.random() * dimensions.width],
              opacity: [randomOpacity, Math.random() * 0.5 + 0.1],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )
      })}
      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0 0', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

export default ParticlesBackground

