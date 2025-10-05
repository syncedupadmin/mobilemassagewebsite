import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxurious black and gold palette
        black: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          medium: '#0a0a0a',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#E6C84F',  // Matching logo gold
          500: '#D4AF37',  // Classic gold
          600: '#B8923F',
          700: '#9A7C35',
          800: '#7A6229',
          900: '#5C491F',
        },
        // Warm accent colors
        cream: {
          50: '#FFFCF9',
          100: '#FFF8F0',
          200: '#FAF9F6',
        },
        bronze: {
          400: '#CD7F32',
          500: '#B87333',
          600: '#996515',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E6C84F 100%)',
        'black-gradient': 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
