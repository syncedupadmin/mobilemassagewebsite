'use client';

import { useEffect } from 'react';
import CTAButton from '@/components/CTAButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-terracotta-100 mb-6">
            <svg
              className="w-12 h-12 text-terracotta-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-xl text-charcoal-900/70 mb-8">
            We encountered an unexpected error. Please try again or contact us if the problem persists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="inline-block px-8 py-4 rounded-md font-medium transition-all duration-300 text-center bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          <CTAButton href="/" variant="outline">
            Return Home
          </CTAButton>
        </div>

        {process.env.NODE_ENV === 'development' && error.digest && (
          <div className="bg-white rounded-lg p-6 shadow-md text-left">
            <h3 className="text-sm font-semibold text-charcoal-900 mb-2">
              Error Details (Development Only)
            </h3>
            <p className="text-xs text-charcoal-900/70 font-mono">
              Digest: {error.digest}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
