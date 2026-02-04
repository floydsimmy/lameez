'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import AnimatedCard from './AnimatedCard'
import { content } from '@/lib/content'

export default function WishlistSection() {
  return (
    <Section className="bg-gradient-to-b from-rose-50/30 to-purple-50/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-romantic-700 mb-4">
          {content.wishlist.title}
        </h2>
        <p className="text-lg text-gray-600">
          {content.wishlist.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.wishlist.items.map((item, index) => (
          <AnimatedCard
            key={index}
            delay={index * 0.15}
            gradient="from-purple-50/90 to-pink-50/90"
          >
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              className="text-6xl mb-4 text-center"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-romantic-600 mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              {item.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  )
}
