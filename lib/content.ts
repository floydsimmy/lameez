// ============================================
// CENTRALIZED CONTENT FILE
// Edit this file to change all text and images
// ============================================

export const content = {
  // Her name (used throughout the site)
  name: "Lameez",

  // Hero Section
  hero: {
    title: "For Lameez",
    subtitle: "A collection of moments and dreams, just for you",
  },

  // What I Adore Section
  adore: {
    title: "What I Adore About You",
    qualities: [
      {
        title: "Your Kindness",
        description: "The way you care for those around you warms my heart",
      },
      {
        title: "Your Strength",
        description: "You face challenges with grace and determination",
      },
      {
        title: "Your Laughter",
        description: "It lights up every room and makes every moment better",
      },
      {
        title: "Your Dreams",
        description: "Watching you chase your aspirations inspires me daily",
      },
      {
        title: "Your Spirit",
        description: "Your joy and energy make life more beautiful",
      },
      {
        title: "Your Heart",
        description: "The love and compassion you share makes the world better",
      },
    ],
  },

  // Favorites Section (Flowers)
  favorites: {
    title: "Your Favorites",
    subtitle: "The flowers that remind me of you",
    flowers: [
      {
        name: "Peonies",
        description: "Soft, lush, and full of romance",
        emoji: "🌸",
        color: "from-pink-200 to-rose-300",
      },
      {
        name: "Roses",
        description: "Classic beauty, timeless elegance",
        emoji: "🌹",
        color: "from-rose-300 to-romantic-400",
      },
    ],
  },

  // Independent Era Wishlist
  wishlist: {
    title: "Your Independent Era",
    subtitle: "Dreams for when you're soaring on your own",
    items: [
      {
        title: "Heels",
        description: "Stepping confidently into every opportunity",
        icon: "👠",
      },
      {
        title: "Clothes",
        description: "Expressing your style and elegance",
        icon: "👗",
      },
      {
        title: "Jewelry",
        description: "Sparkling as bright as your spirit",
        icon: "💎",
      },
    ],
  },

  // Lupsy Section (Cat)
  lupsy: {
    title: "Lupsy",
    subtitle: "Your beloved companion",
    description: "Pronto para te dar uma purrada 🤣",
    // To change Lupsy's photo:
    // 1. Place your image in /public/lupsy.jpg
    // 2. Or update the path below to match your filename
    imagePath: "/lupsy.jpg",
    imageAlt: "Lupsy the cat",
  },

  // Closing Section
  closing: {
    title: "Always",
    message: "Every moment with you is a gift. Here's to all the beautiful days ahead.",
    footnote: "Made with love",
  },
}

export type Content = typeof content
