'use client'

import { useState } from 'react'
import PetalsBackground from '@/components/PetalsBackground'
import RevealIntro from '@/components/RevealIntro'
import Hero from '@/components/Hero'
import AdoreSection from '@/components/AdoreSection'
import FavoritesSection from '@/components/FavoritesSection'
import WishlistSection from '@/components/WishlistSection'
import LupsySection from '@/components/LupsySection'
import ClosingSection from '@/components/ClosingSection'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="relative min-h-screen overflow-x-hidden touch-pan-y">
      <PetalsBackground />

      <RevealIntro onComplete={() => setShowContent(true)} />

      {showContent && (
        <div className="relative z-10 touch-pan-y">
          <Hero />
          <AdoreSection />
          <FavoritesSection />
          <WishlistSection />
          <LupsySection />
          <ClosingSection />
        </div>
      )}
    </main>
  )
}
