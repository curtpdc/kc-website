import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Kayla Clark | Professional Model',
  description: 'Learn more about Kayla Clark, a DMV-based professional model known for blending elegance, emotion, and intentional storytelling in every project.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/kayla-portrait.jpg"
            alt="Kayla Clark"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              About Kayla
            </h1>
            <p className="text-xl text-gray-700">
              Professional Model & Visual Storyteller
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div className="animate-fade-in-up">
              <h2 className="font-playfair text-3xl font-semibold text-gray-900 mb-4">
                Crafting Visual Stories with Intention
              </h2>
              <p>
                Kayla Clark is a DMV-based professional model known for blending elegance, emotion, and intentional storytelling. Whether in front of the camera for beauty, editorial, or commercial shoots, Kayla brings a thoughtful, collaborative energy to every project.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <p>
                Her work spans beauty photography, editorial fashion, commercial campaigns, and conceptual shoots. Kayla is recognized for her ability to bring creative visions to life with precision and artistry. Her modeling process is rooted in collaboration, thoughtful execution, and a deep love for visual storytelling.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 animate-fade-in-up">
              <p className="font-playfair text-2xl italic text-gray-900 text-center">
                "She believes every image should feel like emotion in motion."
              </p>
            </div>

            <div className="animate-fade-in-up">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Modeling Philosophy
              </h3>
              <p>
                Kayla approaches each project with professionalism and creative openness. Her portfolio showcases versatility across genres—from high-fashion editorials to natural beauty campaigns—each image a reflection of her commitment to authenticity and artistic excellence.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Services & Specialties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-6">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    Beauty Photography
                  </h4>
                  <p className="text-gray-700">
                    Soft glam, natural beauty, and creative makeup campaigns
                  </p>
                </div>
                <div className="glass rounded-xl p-6">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    Editorial Fashion
                  </h4>
                  <p className="text-gray-700">
                    High fashion, contemporary, and artistic editorials
                  </p>
                </div>
                <div className="glass rounded-xl p-6">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    Commercial Campaigns
                  </h4>
                  <p className="text-gray-700">
                    Brand storytelling, lifestyle, and product photography
                  </p>
                </div>
                <div className="glass rounded-xl p-6">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    Creative Direction
                  </h4>
                  <p className="text-gray-700">
                    Conceptual shoots and collaborative projects
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Management & Representation
              </h3>
              <p>
                Kayla is represented by{' '}
                <a 
                  href="https://www.aftalentmanagement.com/women-main/kayla-clark" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  AF Talent Management
                </a>
                , one of the premier modeling agencies in the DMV area.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in-up">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Kayla for Your Next Project
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-semibold text-gray-900 mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse into Kayla&apos;s portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              '/images/beauty/beauty-4.jpg',
              '/images/editorial/editorial-1.jpg',
              '/images/beauty/beauty-5.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 glass-card border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
