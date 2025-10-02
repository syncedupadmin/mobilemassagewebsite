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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=80"
            alt="Luxury massage therapy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 to-charcoal-900/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            Luxury Massage, <br />
            <span className="text-gold-400">Delivered to Your Door</span>
          </h1>
          <p className="text-xl sm:text-2xl text-cream-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Spa-quality relaxation with certified therapists and premium oils—all without leaving home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Book Your Escape
            </CTAButton>
            <CTAButton href="/services" variant="outline">
              Explore Services
            </CTAButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gold-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-charcoal-900/70 max-w-2xl mx-auto">
              Discover our curated selection of luxury massage treatments, each designed to transport you to a state of pure relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/services" variant="primary">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-4">
              The Ivory & Stone Difference
            </h2>
            <p className="text-lg text-charcoal-900/70 max-w-2xl mx-auto">
              Experience the pinnacle of luxury and convenience with our mobile spa service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">
                Certified Therapists
              </h3>
              <p className="text-charcoal-900/70">
                All our therapists are licensed, insured, and bring years of professional spa experience.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">
                Premium Products
              </h3>
              <p className="text-charcoal-900/70">
                We use only the finest organic oils, hot stones, and luxury linens for your comfort.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">
                Your Sanctuary
              </h3>
              <p className="text-charcoal-900/70">
                Enjoy luxury spa treatments in the privacy and comfort of your home, hotel, or office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-charcoal-900/70 max-w-2xl mx-auto">
              Don't just take our word for it—hear from those who've experienced the luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Relax?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your luxury massage experience today and discover why South Florida trusts us for in-home relaxation.
          </p>
          <CTAButton href="/contact" variant="outline" className="bg-white text-terracotta-600 hover:bg-cream-100 border-white">
            Schedule Now
          </CTAButton>
        </div>
      </section>
    </>
  );
}
