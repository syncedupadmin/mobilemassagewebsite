'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Log form data to console for now
      console.log('Form submitted:', data);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, you would send this to your email service API:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Swedish Massage',
    'Deep Tissue Massage',
    'Back-to-Back Couples Massage',
    'Hot Stone Massage',
    'Prenatal Massage',
    'Sports Massage',
    'Package/Custom Service',
  ];

  return (
    <div className="bg-black border border-gold-500/20 rounded-lg shadow-lg shadow-gold-500/10 p-8">
      <h2 className="text-3xl font-serif font-bold text-white mb-6 text-center">
        Contact Us
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-green-800 font-semibold">Message Sent!</h3>
              <p className="text-green-700 text-sm">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-red-800 font-semibold">Error</h3>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gold-200 mb-2">
            Name <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
            className={`w-full px-4 py-3 bg-black-light border rounded-md text-white placeholder-gold-300/50 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${
              errors.name ? 'border-red-500' : 'border-gold-500/30'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gold-200 mb-2">
            Email <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={`w-full px-4 py-3 bg-black-light border rounded-md text-white placeholder-gold-300/50 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${
              errors.email ? 'border-red-500' : 'border-gold-500/30'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gold-200 mb-2">
            Phone <span className="text-gold-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[\d\s\-\(\)]+$/,
                message: 'Invalid phone number format',
              },
              minLength: {
                value: 10,
                message: 'Phone number must be at least 10 digits',
              },
            })}
            className={`w-full px-4 py-3 bg-black-light border rounded-md text-white placeholder-gold-300/50 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gold-500/30'
            }`}
            placeholder="(561) 555-1234"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Service Interest Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gold-200 mb-2">
            Service Interest <span className="text-gold-400">*</span>
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-4 py-3 bg-black-light border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${
              errors.service ? 'border-red-500' : 'border-gold-500/30'
            }`}
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
          )}
        </div>

        {/* Preferred Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-sm font-medium text-gold-200 mb-2"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              {...register('preferredDate')}
              className="w-full px-4 py-3 bg-black-light border border-gold-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="preferredTime"
              className="block text-sm font-medium text-gold-200 mb-2"
            >
              Preferred Time
            </label>
            <select
              id="preferredTime"
              {...register('preferredTime')}
              className="w-full px-4 py-3 bg-black-light border border-gold-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
            >
              <option value="">Select time...</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 10pm)</option>
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gold-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 bg-black-light border border-gold-500/30 rounded-md text-white placeholder-gold-300/50 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors resize-none"
            placeholder="Tell us more about what you're looking for..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gold-gradient text-black px-8 py-4 rounded-md font-semibold transition-all duration-300 ${
            isSubmitting
              ? 'opacity-50 cursor-not-allowed'
              : 'shadow-lg shadow-gold-500/50 hover:shadow-xl hover:shadow-gold-500/70 hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        <p className="text-sm text-center text-gold-300">
          <span className="text-gold-400">*</span> Required fields
        </p>
      </form>
    </div>
  );
}
