import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Luxury Massage Packages | Exclusive In-Home Spa Experiences',
  description: 'Discover curated massage bundles designed for romance, stress relief, and recovery. Luxury massage packages at home in South Florida.',
  keywords: 'luxury massage packages, back to back couples massage at home, sequential couples massage, athlete recovery massage, executive stress relief',
};

export default function PackagesPage() {
  const packages = [
    {
      name: 'Executive Stress Relief',
      tagline: 'Escape the Boardroom',
      duration: '90 minutes',
      price: 'Premium Package',
      description: 'Designed for busy professionals who need deep relaxation and mental clarity. This intensive package melts away tension from long hours and high-stress environments.',
      includes: [
        'Deep tissue massage (60 min)',
        'Aromatherapy with stress-relief blend',
        'Hot towel treatment',
        'Scalp and neck focus (30 min)',
        'Premium CBD oil upgrade',
      ],
      idealFor: 'Executives, entrepreneurs, and busy professionals',
      imageSrc: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      imageAlt: 'Executive stress relief massage',
      accentColor: 'gold',
    },
    {
      name: 'Couples Retreat',
      tagline: 'Romance & Relaxation',
      duration: '180 minutes total (90 min per person)',
      price: 'Romantic Package',
      description: 'An unforgettable shared spa experience in the intimacy of your home or hotel. One skilled therapist provides consecutive massage sessions for both partners, creating a romantic journey of relaxation.',
      includes: [
        'Back-to-back Swedish or deep tissue massage (90 min each)',
        'Rose petal aromatherapy',
        'Champagne and chocolate pairing',
        'Candlelit ambiance setup',
        'Complimentary luxury gift',
      ],
      idealFor: 'Couples, anniversaries, special celebrations',
      imageSrc: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80',
      imageAlt: 'Back-to-back couples massage retreat',
      accentColor: 'terracotta',
    },
    {
      name: 'Athlete Recovery',
      tagline: 'Performance & Restoration',
      duration: '75 minutes',
      price: 'Performance Package',
      description: 'Sport-specific therapy designed to enhance performance, prevent injury, and accelerate recovery. Perfect for athletes at all levels.',
      includes: [
        'Sports massage with targeted muscle work',
        'Dynamic stretching session',
        'CBD muscle recovery treatment',
        'Percussion therapy',
        'Customized recovery plan',
      ],
      idealFor: 'Athletes, fitness enthusiasts, active individuals',
      imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      imageAlt: 'Athlete recovery massage',
      accentColor: 'gold',
    },
    {
      name: 'Ultimate Indulgence',
      tagline: 'Pure Luxury',
      duration: '120 minutes',
      price: 'Signature Package',
      description: 'Our most comprehensive treatment—a full two hours of blissful luxury. This is the pinnacle of at-home spa experiences.',
      includes: [
        'Full body Swedish massage (60 min)',
        'Hot stone therapy (30 min)',
        'Aromatherapy facial massage',
        'Hand and foot reflexology (30 min)',
        'Premium organic oils and products',
      ],
      idealFor: 'Special occasions, ultimate relaxation seekers',
      imageSrc: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      imageAlt: 'Ultimate indulgence spa package',
      accentColor: 'terracotta',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-900 mb-6">
              Luxury Packages for Every Occasion
            </h1>
            <p className="text-xl text-charcoal-900/70 leading-relaxed mb-8">
              Curated massage experiences designed to deliver maximum relaxation, recovery, and rejuvenation. Each package includes premium enhancements for an unforgettable spa experience at home.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.imageSrc}
                    alt={pkg.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1 bg-gold-500 text-white text-sm font-medium rounded-full mb-2">
                      {pkg.duration}
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-white">
                      {pkg.name}
                    </h2>
                    <p className="text-gold-300 font-medium italic">
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-charcoal-900/80 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                      Package Includes:
                    </h3>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-charcoal-900/70 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-lg">
                    <p className="text-sm text-charcoal-900/60 mb-1">Ideal For:</p>
                    <p className="text-charcoal-900 font-medium">{pkg.idealFor}</p>
                  </div>

                  <CTAButton
                    href="/contact"
                    variant={pkg.accentColor === 'gold' ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Book {pkg.name}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
              Create Your Custom Package
            </h2>
            <p className="text-lg text-charcoal-900/70 mb-8 leading-relaxed">
              Have something special in mind? We'll work with you to design a bespoke massage experience tailored to your exact needs and preferences. Perfect for special events, corporate wellness, bridal parties, and unique celebrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-charcoal-900 mb-2">Corporate Events</h3>
                <p className="text-sm text-charcoal-900/70">
                  On-site chair massage or full sessions for team wellness days
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-charcoal-900 mb-2">Bridal Parties</h3>
                <p className="text-sm text-charcoal-900/70">
                  Pre-wedding relaxation for the entire wedding party
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-charcoal-900 mb-2">Special Occasions</h3>
                <p className="text-sm text-charcoal-900/70">
                  Birthday celebrations, retreats, or wellness weekends
                </p>
              </div>
            </div>
            <CTAButton href="/contact" variant="primary">
              Inquire About Custom Packages
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Monthly Wellness Membership
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Make self-care a regular practice with our exclusive membership program
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority booking and scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Exclusive member pricing (save up to 20%)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complimentary upgrades and add-ons</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Flexible session rollover</span>
                </li>
              </ul>
            </div>
            <CTAButton
              href="/contact"
              variant="outline"
              className="bg-white text-gold-600 hover:bg-cream-100 border-white"
            >
              Learn About Membership
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-charcoal-900/70 mb-8 max-w-2xl mx-auto">
            Book your package today and discover why South Florida's elite choose us for their at-home spa experiences.
          </p>
          <CTAButton href="/contact" variant="primary">
            Schedule Your Package
          </CTAButton>
        </div>
      </section>
    </>
  );
}
