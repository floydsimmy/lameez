'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from './Section'
import { content } from '@/lib/content'

export default function LupsySection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-romantic-700 mb-4">
          {content.lupsy.title}
        </h2>
        <p className="text-lg text-gray-600">
          {content.lupsy.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="
            relative rounded-3xl overflow-hidden
            shadow-2xl shadow-rose-300/30
            border-4 border-white
            bg-gradient-to-br from-rose-100 to-pink-100
          "
        >
          <div className="relative aspect-square">
            <Image
              src={content.lupsy.imagePath}
              alt={content.lupsy.imageAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 672px"
              priority={false}
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                const target = e.target as HTMLImageElement
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23fce7f3"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="80" fill="%23ec4899"%3E🐱%3C/text%3E%3C/svg%3E'
              }}
            />
          </div>

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white text-center text-lg font-medium">
              {content.lupsy.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-center mt-8 text-4xl"
        >
          💗
        </motion.div>
      </motion.div>
    </Section>
  )
}
