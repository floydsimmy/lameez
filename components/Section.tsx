'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px', amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative px-6 py-16 md:py-24 touch-pan-y ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
