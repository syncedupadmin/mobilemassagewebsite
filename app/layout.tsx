import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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
  metadataBase: new URL('https://destinyedenmobilemassage.vercel.app'),
  title: "Luxury Mobile Massage South Florida | Destiny Eden Spa",
  description: "Award-winning mobile massage bringing 5-star spa experiences to your South Florida home, hotel, or office. Certified LMTs, organic oils, same-day available.",
  keywords: "luxury mobile massage, in-home massage South Florida, spa at home, mobile massage Miami, mobile massage Delray Beach, mobile massage Boca Raton, Destiny Eden",
  openGraph: {
    title: "Luxury Mobile Massage South Florida | Destiny Eden Spa",
    description: "Award-winning mobile massage bringing 5-star spa experiences to your South Florida home, hotel, or office. Certified LMTs, organic oils, same-day available.",
    type: "website",
    images: [
      {
        url: "/images/destiny-eden-logo.png",
        width: 1200,
        height: 1200,
        alt: "Destiny Eden Mobile Massage Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Mobile Massage South Florida | Destiny Eden Spa",
    description: "Award-winning mobile massage bringing 5-star spa experiences to your South Florida home, hotel, or office.",
    images: ["/images/destiny-eden-logo.png"],
  },
  icons: {
    icon: "/images/destiny-eden-logo.png",
    apple: "/images/destiny-eden-logo.png",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Destiny Eden Mobile Massage",
  "image": "https://destinyedenmobilemassage.vercel.app/images/destiny-eden-logo.png",
  "@id": "https://destinyedenmobilemassage.vercel.app/#organization",
  "url": "https://destinyedenmobilemassage.vercel.app",
  "telephone": "+1-561-555-1234",
  "email": "info@destinyedenmobilemassage.com",
  "priceRange": "$$-$$$",
  "paymentAccepted": "Cash, Credit Card, Venmo, Zelle",
  "currenciesAccepted": "USD",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mobile Service - We Come To You",
    "addressLocality": "Delray Beach",
    "addressRegion": "FL",
    "postalCode": "33444",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.4615,
    "longitude": -80.0728
  },
  "areaServed": [
    {"@type": "City", "name": "Delray Beach, FL"},
    {"@type": "City", "name": "Boca Raton, FL"},
    {"@type": "City", "name": "Pompano Beach, FL"},
    {"@type": "City", "name": "Fort Lauderdale, FL"},
    {"@type": "City", "name": "Hollywood, FL"},
    {"@type": "City", "name": "Aventura, FL"},
    {"@type": "City", "name": "Miami Beach, FL"},
    {"@type": "City", "name": "Coral Gables, FL"},
    {"@type": "City", "name": "Downtown Miami, FL"}
  ],
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
    "https://www.facebook.com/destinyedenmassage",
    "https://www.instagram.com/destinyedenspa"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Massage Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Swedish Massage",
          "description": "Gentle, flowing strokes to release tension and restore balance."
        },
        "price": "150-290",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Tissue Massage",
          "description": "Targeted therapy for athletes or chronic pain relief."
        },
        "price": "170-330",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Back-to-Back Couples Massage",
          "description": "One therapist provides sequential massages for both partners."
        },
        "price": "320-480",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hot Stone Massage",
          "description": "Smooth, heated stones to melt away stress and soothe muscles."
        },
        "price": "185-355",
        "priceCurrency": "USD"
      }
    ]
  },
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
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
