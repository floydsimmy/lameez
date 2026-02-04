'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import { content } from '@/lib/content'

export default function ClosingSection() {
  return (
    <Section className="min-h-screen flex items-center bg-gradient-to-b from-purple-50/30 to-rose-100/30">
      <div className="text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-8">
            {content.closing.title}
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            {content.closing.message}
          </p>

          <motion.div
            className="flex justify-center gap-4 text-6xl mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {['💖', '✨', '🌸', '✨', '💖'].map((emoji, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-500 font-light"
          >
            {content.closing.footnote}
          </motion.p>
        </motion.div>
      </div>
    </Section>
  )
}
