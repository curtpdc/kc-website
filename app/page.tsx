import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="main-content" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DSC08907EDIT.JPG"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: 'center 20%' }}
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content with Glassmorphism */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card-light rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              KAYLA CLARK
            </h1>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-6">
              Professional Model
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Crafting visual stories with intention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              >
                View Portfolio
              </Link>
              <Link
                href="#contact"
                className="inline-block px-8 py-3 glass border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
              >
                Book Kayla
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A curated collection of recent modeling work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { src: '/images/beauty/beauty-1.jpg', alt: 'Soft Glam Beauty', category: 'Beauty' },
              { src: '/images/editorial/editorial-1.jpg', alt: 'High Fashion Editorial', category: 'Editorial' },
              { src: '/images/commercial/commercial-1.jpg', alt: 'Brand Campaign', category: 'Commercial' },
              { src: '/images/beauty/beauty-2.jpg', alt: 'Golden Hour Beauty', category: 'Beauty' },
              { src: '/images/editorial/editorial-2.jpg', alt: 'Contemporary Editorial', category: 'Editorial' },
              { src: '/images/commercial/commercial-2.jpg', alt: 'Lifestyle Campaign', category: 'Commercial' },
              { src: '/images/beauty/beauty-3.jpg', alt: 'Natural Beauty Portrait', category: 'Beauty' },
              { src: '/images/editorial/editorial-3.jpg', alt: 'Fashion Statement', category: 'Editorial' },
              { src: '/images/commercial/commercial-3.jpg', alt: 'Brand Storytelling', category: 'Commercial' },
            ].map((item, index) => (
              <div
                key={index}
                className="portfolio-container group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="portfolio-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-playfair text-xl font-semibold">{item.alt}</p>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 glass-card border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-playfair text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
                Professional Model
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Kayla Clark is a DMV-based professional model known for blending elegance, emotion, and intentional storytelling. Whether in front of the camera for beauty, editorial, or commercial shoots, Kayla brings a thoughtful, collaborative energy to every project.
                </p>
                <p>
                  Her work spans beauty photography, editorial fashion, commercial campaigns, and conceptual shoots. Kayla is recognized for her ability to bring creative visions to life with precision and artistry. Her modeling process is rooted in collaboration, thoughtful execution, and a deep love for visual storytelling.
                </p>
                <p className="font-playfair text-xl italic">
                  She believes every image should feel like emotion in motion.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Meet Kayla
              </Link>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
              <Image
                src="/images/about/kayla-portrait.jpg"
                alt="Kayla Clark - Professional Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beauty/beauty-2.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Whether you need modeling services or collaborative partnership, let&apos;s discuss your next project.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Kayla
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Book Kayla
            </h2>
            <p className="text-lg text-gray-600">
              For modeling inquiries, collaborations, or brand partnerships, please reach out via email or Instagram.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 mb-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Type *
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                >
                  <option value="">Select Project Type</option>
                  <option value="modeling">Modeling</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="brand-partnership">Brand Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-900 mb-2">
                  Date / Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  placeholder="e.g., March 2024, ASAP, Flexible"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, vision, and any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center space-y-2 text-gray-600">
            <p>
              <strong className="text-gray-900">Contact for Inquiries:</strong>
            </p>
            <p>
              Email: <a href="mailto:kceclark02@gmail.com" className="text-gray-900 hover:underline">kceclark02@gmail.com</a>
            </p>
            <p>
              Instagram:{' '}
              <a 
                href="https://instagram.com/kayla.c1erra.offical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline"
              >
                @Kayla.C1erra.offical
              </a>
            </p>
            <p>Location: DMV Based</p>
          </div>
        </div>
      </section>
    </>
  )
}
