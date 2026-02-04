'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  gradient?: string
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  gradient = 'from-white/80 to-rose-50/80'
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`
        relative p-6 md:p-8 rounded-2xl
        bg-gradient-to-br ${gradient}
        backdrop-blur-sm
        shadow-lg shadow-rose-200/50
        border border-white/60
        transition-shadow duration-300
        hover:shadow-xl hover:shadow-rose-300/50
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
