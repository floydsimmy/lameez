'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface RevealIntroProps {
  onComplete: () => void
}

export default function RevealIntro({ onComplete }: RevealIntroProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(onComplete, 1500)
  }

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-8xl mb-8"
            >
              💌
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif text-romantic-700 mb-6">
              A special gift awaits
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="
                px-8 py-4
                bg-gradient-to-r from-rose-400 to-pink-400
                text-white font-medium rounded-full
                shadow-lg shadow-rose-300/50
                hover:shadow-xl hover:shadow-rose-400/50
                transition-shadow duration-300
              "
            >
              Open
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
