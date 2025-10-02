import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Luxury Mobile Massage at Home | Ivory & Stone",
  description: "Spa-quality massage in the comfort of your home, hotel, or office. Certified therapists, premium oils, and luxury treatments delivered to you in South Florida.",
  keywords: "luxury mobile massage, in-home massage South Florida, spa at home, mobile massage Delray to Miami",
  openGraph: {
    title: "Luxury Mobile Massage at Home | Ivory & Stone",
    description: "Spa-quality massage in the comfort of your home, hotel, or office.",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ivory & Stone Mobile Massage",
  "image": "https://yourdomain.com/logo.png",
  "@id": "",
  "url": "https://www.yourdomain.com",
  "telephone": "+1-561-XXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Serving South Florida",
    "addressLocality": "Delray Beach",
    "addressRegion": "FL",
    "postalCode": "33444",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.4615",
    "longitude": "-80.0728"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "26.1224",
      "longitude": "-80.1373"
    },
    "geoRadius": "80000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/[YourPage]",
    "https://www.instagram.com/[YourPage]"
  ],
  "serviceOffer": [
    {
      "@type": "Service",
      "name": "Swedish Massage",
      "description": "Gentle, flowing strokes to release tension and restore balance.",
      "areaServed": "South Florida from Delray Beach to Miami"
    },
    {
      "@type": "Service",
      "name": "Deep Tissue Massage",
      "description": "Targeted therapy for athletes or chronic pain relief.",
      "areaServed": "South Florida from Delray Beach to Miami"
    },
    {
      "@type": "Service",
      "name": "Back-to-Back Couples Massage",
      "description": "One therapist provides sequential massages for both partners in your home or hotel.",
      "areaServed": "South Florida from Delray Beach to Miami"
    },
    {
      "@type": "Service",
      "name": "Hot Stone Massage",
      "description": "Smooth, heated stones to melt away stress and soothe muscles.",
      "areaServed": "South Florida from Delray Beach to Miami"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "128"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emily R."
      },
      "datePublished": "2024-07-10",
      "reviewBody": "Absolutely amazing experience! Felt like a luxury spa came to my home. Highly recommend their couples massage.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David L."
      },
      "datePublished": "2024-08-14",
      "reviewBody": "Professional, on-time, and the best deep tissue massage I've had outside a resort. Worth every penny.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
