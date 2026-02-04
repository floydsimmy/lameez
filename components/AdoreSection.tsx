'use client'

import Section from './Section'
import AnimatedCard from './AnimatedCard'
import { content } from '@/lib/content'

export default function AdoreSection() {
  return (
    <Section className="bg-gradient-to-b from-transparent to-rose-50/30">
      <h2 className="text-4xl md:text-5xl font-serif text-center text-romantic-700 mb-16">
        {content.adore.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.adore.qualities.map((quality, index) => (
          <AnimatedCard
            key={index}
            delay={index * 0.1}
            gradient="from-white/90 to-rose-50/90"
          >
            <h3 className="text-2xl font-semibold text-romantic-600 mb-3">
              {quality.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {quality.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  )
}
