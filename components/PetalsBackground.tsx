'use client'

import { motion } from 'framer-motion'

interface Petal {
  id: number
  left: string
  delay: number
  duration: number
  size: number
}

const petals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 10,
  size: 20 + Math.random() * 20,
}))

export default function PetalsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-10"
          style={{
            left: petal.left,
          }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 0.6, 0.6, 0],
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
            className="text-rose-300/40"
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
