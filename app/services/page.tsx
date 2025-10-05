import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'In-Home Massage Services | Luxury Mobile Spa Treatments',
  description: 'Explore Swedish, Deep Tissue, Back-to-Back Couples, and Hot Stone massage. Book your private in-home spa experience today in South Florida.',
  keywords: 'Swedish massage at home, deep tissue massage near me, back to back couples massage, sequential couples massage at home, hot stone massage service',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Swedish Massage',
      duration: '60 / 90 / 120 minutes',
      pricing: '$XXX / $XXX / $XXX',
      description: 'Experience the classic relaxation massage with gentle, flowing strokes designed to release tension and restore balance. Perfect for stress relief and improving circulation.',
      benefits: [
        'Reduces stress and anxiety',
        'Improves blood circulation',
        'Promotes better sleep',
        'Eases muscle tension',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      imageAlt: 'Swedish Massage Therapy',
    },
    {
      title: 'Deep Tissue Massage',
      duration: '60 / 90 / 120 minutes',
      pricing: '$XXX / $XXX / $XXX',
      description: 'Targeted therapy using firm pressure to reach deeper muscle layers. Ideal for athletes, chronic pain sufferers, or anyone with persistent muscle tension and knots.',
      benefits: [
        'Relieves chronic muscle pain',
        'Breaks up scar tissue',
        'Improves athletic recovery',
        'Increases range of motion',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
      imageAlt: 'Deep Tissue Massage',
    },
    {
      title: 'Back-to-Back Couples Massage',
      duration: '120 min / 180 min (for both partners)',
      pricing: '$XXX / $XXX (total for both)',
      description: 'Share the luxury spa experience with someone special. One skilled therapist provides consecutive massage sessions for both partners in the comfort of your home or hotel. Each person receives individual attention and a fully customized massage. Perfect for anniversaries, celebrations, or romantic relaxation.',
      benefits: [
        'Personalized attention for each partner',
        'Romantic shared experience',
        'Perfect for special occasions',
        'More affordable than dual-therapist sessions',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80',
      imageAlt: 'Back-to-Back Couples Massage Experience',
    },
    {
      title: 'Hot Stone Massage',
      duration: '75 / 90 / 120 minutes',
      pricing: '$XXX / $XXX / $XXX',
      description: 'Smooth, heated basalt stones are placed on key points and used as massage tools to melt away tension. The therapeutic heat penetrates deep into muscles for profound relaxation.',
      benefits: [
        'Deep muscle relaxation',
        'Improved circulation',
        'Stress and anxiety relief',
        'Enhanced detoxification',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      imageAlt: 'Hot Stone Massage',
    },
    {
      title: 'Prenatal Massage',
      duration: '60 / 90 minutes',
      pricing: '$XXX / $XXX',
      description: 'Specially designed for expectant mothers, our prenatal massage eases pregnancy-related discomfort with safe, nurturing techniques. Our therapists are trained in prenatal care.',
      benefits: [
        'Reduces pregnancy discomfort',
        'Decreases swelling',
        'Improves sleep quality',
        'Reduces stress hormones',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
      imageAlt: 'Prenatal Massage',
    },
    {
      title: 'Sports Massage',
      duration: '60 / 90 / 120 minutes',
      pricing: '$XXX / $XXX / $XXX',
      description: 'Performance-focused therapy designed for athletes before or after events. Combines stretching, compression, and targeted work to enhance performance and speed recovery.',
      benefits: [
        'Prevents injuries',
        'Enhances flexibility',
        'Speeds up recovery',
        'Improves performance',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      imageAlt: 'Sports Massage Therapy',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-serif font-light text-cream mb-8 tracking-wide">
              Massage Services
            </h1>
            <p className="text-base text-cream/70 leading-relaxed mb-12 max-w-2xl mx-auto">
              Certified therapists bringing spa-quality treatments to your space throughout South Florida
            </p>
            <CTAButton href="/contact" variant="primary">
              Reserve
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="px-4 py-1 bg-gold-300/10 border-l-2 border-gold-300 text-gold-300 text-xs font-medium tracking-wide">
                      {service.duration}
                    </div>
                    {service.pricing && (
                      <div className="px-4 py-1 bg-gold-300/10 border-l-2 border-gold-300 text-gold-300 text-xs font-medium tracking-wide">
                        {service.pricing}
                      </div>
                    )}
                  </div>
                  <h2 className="text-4xl font-serif font-light text-cream mb-6 tracking-wide">
                    {service.title}
                  </h2>
                  <p className="text-base text-cream/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-gold-300 mb-4 tracking-wide uppercase">
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-gold-300 mr-3 flex-shrink-0 mt-0.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-cream/70 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CTAButton href="/contact" variant="secondary">
                    Book
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-light text-cream mb-6 tracking-wide">
              Enhancements
            </h2>
            <p className="text-base text-cream/70 max-w-xl mx-auto">
              Available additions for any treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-charcoal border-l-2 border-gold-300/30 p-10 text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold-300">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-cream mb-3 tracking-wide">
                Aromatherapy
              </h3>
              <p className="text-cream/70 text-sm">
                Essential oil blends tailored to your needs
              </p>
            </div>

            <div className="bg-charcoal border-l-2 border-gold-300/30 p-10 text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold-300">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-cream mb-3 tracking-wide">
                CBD Oil
              </h3>
              <p className="text-cream/70 text-sm">
                Therapeutic CBD-infused treatment
              </p>
            </div>

            <div className="bg-charcoal border-l-2 border-gold-300/30 p-10 text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold-300">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-cream mb-3 tracking-wide">
                Extended Time
              </h3>
              <p className="text-cream/70 text-sm">
                Additional 30 minutes of focused work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-cream mb-8 tracking-wide">
            Reserve Your Session
          </h2>
          <p className="text-base text-cream/70 mb-12 max-w-lg mx-auto">
            Delray Beach to Miami
          </p>
          <CTAButton href="/contact" variant="primary">
            Book Now
          </CTAButton>
        </div>
      </section>
    </>
  );
}
