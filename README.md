# For Lameez 💕

A romantic, modern gift website built with Next.js, featuring smooth animations and an elegant design.

## Quick Start

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## How to Edit Content

All text content is centralized in one file for easy editing:

**[lib/content.ts](lib/content.ts)**

This file contains:
- Her name
- Hero section text
- Qualities you adore
- Favorite flowers
- Independent era wishlist items
- Lupsy's description
- Closing message

Simply open this file and edit any text you want. No need to touch the component files.

### Example: Changing the Hero Message

In [lib/content.ts](lib/content.ts), find:

```typescript
hero: {
  title: "For Lameez",
  subtitle: "A collection of moments and dreams, just for you",
}
```

Change the subtitle to whatever you'd like:

```typescript
hero: {
  title: "For Lameez",
  subtitle: "Your new custom message here",
}
```

## How to Change Lupsy's Photo

### Option 1: Use the default filename

1. Place your image in the `/public` folder
2. Name it `lupsy.jpg`
3. The site will automatically use it

### Option 2: Use a custom filename

1. Place your image in the `/public` folder (e.g., `cat-photo.png`)
2. Open [lib/content.ts](lib/content.ts)
3. Find the `lupsy` section:

```typescript
lupsy: {
  // ...
  imagePath: "/lupsy.jpg",  // Change this to "/cat-photo.png"
  imageAlt: "Lupsy the cat",
}
```

4. Update `imagePath` to match your filename

**Supported formats:** JPG, PNG, WebP, AVIF

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Build your project
- Deploy it
- Give you a live URL
- Deploy updates when you push to GitHub

### Environment Setup (if needed)

No environment variables required for this project.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom romantic color palette
- **Framer Motion** - Smooth animations
- **next/image** - Optimized image loading

## Features

- Romantic entrance animation with "Open" button
- Floating petals background
- Smooth scroll animations
- Hover micro-interactions
- Fully responsive (mobile-first)
- Respects `prefers-reduced-motion` for accessibility
- Lightweight and fast
- Easy content editing through centralized file

## Project Structure

```
lameez/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── AdoreSection.tsx    # "What I adore" section
│   ├── FavoritesSection.tsx # Favorite flowers
│   ├── WishlistSection.tsx  # Independent era wishlist
│   ├── LupsySection.tsx    # Cat section
│   ├── ClosingSection.tsx  # Final message
│   ├── Section.tsx         # Reusable section wrapper
│   ├── AnimatedCard.tsx    # Reusable animated card
│   ├── PetalsBackground.tsx # Floating petals animation
│   └── RevealIntro.tsx     # Entrance animation
├── lib/
│   └── content.ts          # ⭐ EDIT THIS FILE for all text
└── public/
    └── lupsy.jpg           # Add your cat photo here
```

## Customization Tips

### Adding More Qualities to "What I Adore"

In [lib/content.ts](lib/content.ts), add items to the `qualities` array:

```typescript
qualities: [
  // existing items...
  {
    title: "Your Creativity",
    description: "You make the world more colorful",
  },
]
```

### Adding More Flowers

```typescript
flowers: [
  // existing items...
  {
    name: "Tulips",
    description: "Simple and elegant",
    emoji: "🌷",
    color: "from-red-200 to-pink-300",
  },
]
```

### Changing Colors

Edit [tailwind.config.ts](tailwind.config.ts) to adjust the romantic color palette.

## Support

If you encounter any issues:
1. Make sure you ran `npm install`
2. Try deleting `.next` folder and running `npm run dev` again
3. Check that all files are in the correct locations

---

Made with love 💕
