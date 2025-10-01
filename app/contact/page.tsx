import type { Metadata } from 'next';
import BookingCalendar from '@/components/BookingCalendar';

export const metadata: Metadata = {
  title: 'Book Your Mobile Massage | Contact [Your Brand]',
  description: 'Schedule your luxury massage today. Fill out our quick form or call us to bring the spa to your door in South Florida.',
  keywords: 'book in-home massage, mobile massage appointments, massage service near me',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-900 mb-6">
              Book Your Massage Today
            </h1>
            <p className="text-xl text-charcoal-900/70 leading-relaxed mb-4">
              Your escape from stress is just one click away. Select your preferred service, date, and time below, and we'll bring the luxury spa experience directly to you.
            </p>
            <p className="text-lg text-gold-600 font-semibold">
              Serving South Florida from Delray Beach to Miami
            </p>
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <BookingCalendar />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">
                Prefer to Talk?
              </h2>
              <p className="text-lg text-charcoal-900/70">
                We're here to answer questions and help you choose the perfect service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Call Us</h3>
                <a
                  href="tel:+15615551234"
                  className="text-gold-600 hover:text-gold-700 font-medium text-lg"
                >
                  (561) 555-1234
                </a>
                <p className="text-sm text-charcoal-900/60 mt-2">Mon-Sun: 8am-10pm</p>
              </div>

              {/* Email */}
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Email Us</h3>
                <a
                  href="mailto:info@yourbrand.com"
                  className="text-gold-600 hover:text-gold-700 font-medium break-all"
                >
                  info@yourbrand.com
                </a>
                <p className="text-sm text-charcoal-900/60 mt-2">24-hour response time</p>
              </div>

              {/* Text */}
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Text Us</h3>
                <a
                  href="sms:+15615551234"
                  className="text-gold-600 hover:text-gold-700 font-medium text-lg"
                >
                  (561) 555-1234
                </a>
                <p className="text-sm text-charcoal-900/60 mt-2">Fast replies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">
                Booking Questions?
              </h2>
              <p className="text-lg text-charcoal-900/70">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  How far in advance should I book?
                </h3>
                <p className="text-charcoal-900/70">
                  We recommend booking at least 48 hours in advance for optimal availability. Same-day appointments may be available—call us to check!
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  What do I need to prepare at home?
                </h3>
                <p className="text-charcoal-900/70">
                  Nothing! We bring everything: massage table, linens, oils, music, and all equipment. Just provide a quiet space approximately 8x10 feet.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  Do you travel to hotels and offices?
                </h3>
                <p className="text-charcoal-900/70">
                  Absolutely! We serve homes, hotels, resorts, offices, and special event venues throughout South Florida.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  What's your cancellation policy?
                </h3>
                <p className="text-charcoal-900/70">
                  We require 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  How do I pay?
                </h3>
                <p className="text-charcoal-900/70">
                  We accept all major credit cards, cash, Venmo, and Zelle. Payment is collected at the time of service.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  Are gratuities included?
                </h3>
                <p className="text-charcoal-900/70">
                  Gratuities are not included but always appreciated for exceptional service. Most clients tip 15-20%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-16 bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              We Come to You
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Proudly serving the entire South Florida region
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
                <div className="py-2">Delray Beach</div>
                <div className="py-2">Boca Raton</div>
                <div className="py-2">Pompano Beach</div>
                <div className="py-2">Fort Lauderdale</div>
                <div className="py-2">Hollywood</div>
                <div className="py-2">Aventura</div>
                <div className="py-2">Miami Beach</div>
                <div className="py-2">Coral Gables</div>
                <div className="py-2">Coconut Grove</div>
                <div className="py-2">Sunny Isles</div>
                <div className="py-2">Deerfield Beach</div>
                <div className="py-2">Downtown Miami</div>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              Don't see your location? Contact us—we often accommodate special requests!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
