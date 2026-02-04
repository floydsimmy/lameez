'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import AnimatedCard from './AnimatedCard'
import { content } from '@/lib/content'

export default function FavoritesSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-romantic-700 mb-4">
          {content.favorites.title}
        </h2>
        <p className="text-lg text-gray-600">
          {content.favorites.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {content.favorites.flowers.map((flower, index) => (
          <AnimatedCard
            key={index}
            delay={index * 0.2}
            gradient={flower.color}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-7xl mb-4 text-center"
            >
              {flower.emoji}
            </motion.div>
            <h3 className="text-3xl font-semibold text-romantic-700 mb-3 text-center">
              {flower.name}
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              {flower.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  )
}
