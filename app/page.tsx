import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const services = [
    {
      title: 'Swedish Massage',
      description: 'Gentle, flowing strokes for stress relief and relaxation. Perfect for unwinding after a long day.',
      imageSrc: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      imageAlt: 'Swedish Massage',
    },
    {
      title: 'Deep Tissue',
      description: 'Targeted therapy for pain relief and athletes. Releases chronic muscle tension and knots.',
      imageSrc: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
      imageAlt: 'Deep Tissue Massage',
    },
    {
      title: 'Back-to-Back Couples Massage',
      description: 'Sequential massages for two. Share the experience with someone special in the comfort of your home.',
      imageSrc: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80',
      imageAlt: 'Back-to-Back Couples Massage',
    },
    {
      title: 'Hot Stone',
      description: 'Heated stones to melt away stress. Deep relaxation through therapeutic heat.',
      imageSrc: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      imageAlt: 'Hot Stone Massage',
    },
  ];

  const testimonials = [
    {
      name: 'Emily R.',
      text: 'Absolutely amazing experience! Felt like a luxury spa came to my home. Highly recommend their couples massage.',
      rating: 5,
    },
    {
      name: 'David L.',
      text: 'Professional, on-time, and the best deep tissue massage I\'ve had outside a resort. Worth every penny.',
      rating: 5,
    },
    {
      name: 'Sarah M.',
      text: 'The hot stone massage was pure bliss. My therapist was skilled and the entire experience was seamless.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=80"
            alt="Luxury massage therapy"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-cream mb-8 animate-fade-in tracking-wide">
            Luxury Massage<br />
            <span className="text-gold-300 font-normal">At Your Door</span>
          </h1>
          <p className="text-lg sm:text-xl text-cream/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Certified therapists. Premium oils. Your sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="/contact" variant="primary">
              Reserve
            </CTAButton>
            <CTAButton href="/services" variant="outline">
              Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-cream mb-6 tracking-wide">
              Signature Services
            </h2>
            <p className="text-base text-cream/70 max-w-xl mx-auto">
              Curated treatments designed for complete relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <CTAButton href="/services" variant="secondary">
              All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-cream mb-6 tracking-wide">
              Our Approach
            </h2>
            <p className="text-base text-cream/70 max-w-xl mx-auto">
              Luxury and convenience, delivered with care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold-300">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-cream mb-4 tracking-wide">
                Certified Therapists
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Licensed professionals with years of spa experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold-300">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-cream mb-4 tracking-wide">
                Premium Products
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Organic oils and luxury linens for complete comfort
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold-300">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-cream mb-4 tracking-wide">
                Your Space
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Home, hotel, or office—wherever you're most comfortable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black-light">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-cream mb-6 tracking-wide">
              Client Experience
            </h2>
            <p className="text-base text-cream/70 max-w-xl mx-auto">
              Trusted by discerning clients across South Florida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-cream mb-8 tracking-wide">
            Experience Destiny Eden
          </h2>
          <p className="text-base text-cream/70 mb-12 max-w-lg mx-auto">
            Serving South Florida from Delray Beach to Miami
          </p>
          <CTAButton href="/contact" variant="primary">
            Book Now
          </CTAButton>
        </div>
      </section>
    </>
  );
}
