'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Petal {
  id: number
  left: string
  delay: number
  duration: number
  size: number
}

// Reduce petals on mobile for better performance
const desktopPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 10,
  size: 20 + Math.random() * 20,
}))

const mobilePetals: Petal[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 12 + Math.random() * 8,
  size: 20 + Math.random() * 15,
}))

export default function PetalsBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const petals = isMobile ? mobilePetals : desktopPetals

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 touch-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-10 will-change-transform"
          style={{
            left: petal.left,
          }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 0.5, 0.5, 0],
            rotate: 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="text-rose-300/30"
            style={{
              fontSize: `${petal.size}px`,
            }}
          >
            🌸
          </div>
        </motion.div>
      ))}
    </div>
  )
}
