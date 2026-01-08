'use client'

import Image from 'next/image'
import { useState } from 'react'

const portfolioImages = {
  beauty: [
    { src: '/images/beauty/beauty-1.jpg', alt: 'Soft Glam Beauty' },
    { src: '/images/beauty/beauty-2.jpg', alt: 'Golden Hour Beauty' },
    { src: '/images/beauty/beauty-3.jpg', alt: 'Natural Beauty Portrait' },
    { src: '/images/beauty/beauty-4.jpg', alt: 'Elegant Beauty' },
    { src: '/images/beauty/beauty-5.jpg', alt: 'Classic Beauty' },
    { src: '/images/beauty/beauty-6.jpg', alt: 'Contemporary Beauty' },
    { src: '/images/beauty/beauty-7.jpg', alt: 'Artistic Beauty' },
    { src: '/images/beauty/beauty-8.jpg', alt: 'Modern Beauty' },
  ],
  editorial: [
    { src: '/images/editorial/editorial-1.jpg', alt: 'High Fashion Editorial' },
    { src: '/images/editorial/editorial-2.jpg', alt: 'Contemporary Editorial' },
    { src: '/images/editorial/editorial-3.jpg', alt: 'Fashion Statement' },
  ],
  commercial: [
    { src: '/images/commercial/commercial-1.jpg', alt: 'Brand Campaign' },
    { src: '/images/commercial/commercial-2.jpg', alt: 'Lifestyle Campaign' },
    { src: '/images/commercial/commercial-3.jpg', alt: 'Brand Storytelling' },
  ],
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'beauty' | 'editorial' | 'commercial'>('all')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const categories = [
    { id: 'all' as const, label: 'All Work' },
    { id: 'beauty' as const, label: 'Beauty' },
    { id: 'editorial' as const, label: 'Editorial' },
    { id: 'commercial' as const, label: 'Commercial' },
  ]

  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return [
        ...portfolioImages.beauty,
        ...portfolioImages.editorial,
        ...portfolioImages.commercial,
      ]
    }
    return portfolioImages[activeCategory]
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-100 to-gray-200" />

        <div className="relative z-10 text-center px-4">
          <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Portfolio
            </h1>
            <p className="text-xl text-gray-700">
              A curated collection of modeling work across beauty, editorial, and commercial projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 py-6 glass-light border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'glass border border-gray-300 text-gray-700 hover:border-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredImages().map((image, index) => (
              <div
                key={index}
                className="portfolio-container group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setLightboxImage(image.src)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="portfolio-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Glass overlay on hover - ensures images are not obscured */}
                  <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-playfair text-xl font-semibold mb-2">
                        {image.alt}
                      </p>
                      <p className="text-white/80 text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-dark cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full glass-light text-gray-900 hover:bg-white transition-all z-10"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={lightboxImage}
                alt="Portfolio image"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
