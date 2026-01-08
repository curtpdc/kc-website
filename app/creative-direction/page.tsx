import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative Direction - Kayla Clark',
  description: 'Explore Kayla Clark\'s creative direction work - conceptual shoots, artistic collaborations, and innovative visual projects.',
}

export default function CreativeDirectionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/creative-direction/cd-1.jpg"
            alt="Creative Direction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Creative Direction
            </h1>
            <p className="text-xl text-gray-700">
              Conceptual shoots, artistic collaborations, and innovative visual projects
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed animate-fade-in-up">
            <h2 className="font-playfair text-4xl font-semibold text-gray-900 mb-6">
              Beyond Modeling
            </h2>
            <p>
              Kayla Clark brings a unique perspective to creative direction, blending her modeling experience with artistic vision to create compelling visual narratives. Her approach combines technical expertise with emotional storytelling, resulting in projects that resonate on multiple levels.
            </p>
            <p>
              Whether conceptualizing a shoot from scratch, collaborating with photographers and stylists, or bringing a brand's vision to life, Kayla's creative direction services offer a comprehensive approach to visual storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-semibold text-gray-900 mb-4">
              Creative Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive creative direction for your visual projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Concept Development',
                description: 'Creating unique visual narratives and mood boards that bring your vision to life',
                icon: '💡',
              },
              {
                title: 'Collaborative Shoots',
                description: 'Working closely with photographers, stylists, and creative teams',
                icon: '🤝',
              },
              {
                title: 'Brand Storytelling',
                description: 'Developing cohesive visual identities for brands and campaigns',
                icon: '📖',
              },
              {
                title: 'Art Direction',
                description: 'Guiding the aesthetic and emotional tone of photo shoots',
                icon: '🎨',
              },
              {
                title: 'Styling Consultation',
                description: 'Advising on wardrobe, makeup, and overall visual presentation',
                icon: '✨',
              },
              {
                title: 'Project Management',
                description: 'Coordinating all aspects of creative productions from start to finish',
                icon: '📋',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-semibold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A selection of creative direction work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              '/images/creative-direction/cd-1.jpg',
              '/images/creative-direction/cd-2.jpg',
              '/images/creative-direction/cd-3.jpg',
              '/images/creative-direction/cd-4.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Image
                  src={src}
                  alt={`Creative direction project ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-playfair text-2xl font-semibold">
                    Project {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-semibold text-gray-900 mb-12 text-center">
            The Creative Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery & Vision',
                description: 'Understanding your goals, brand identity, and desired aesthetic through collaborative discussion.',
              },
              {
                step: '02',
                title: 'Concept Development',
                description: 'Creating mood boards, style guides, and detailed visual concepts that align with your vision.',
              },
              {
                step: '03',
                title: 'Planning & Coordination',
                description: 'Managing logistics, assembling the creative team, and ensuring all details are perfected.',
              },
              {
                step: '04',
                title: 'Execution',
                description: 'Directing the shoot with precision, ensuring the vision comes to life authentically.',
              },
              {
                step: '05',
                title: 'Refinement',
                description: 'Reviewing results, providing feedback, and ensuring the final output exceeds expectations.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-playfair text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl font-semibold text-gray-900 mb-6">
              Let's Create Together
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to bring your creative vision to life? Let's collaborate on your next project.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
