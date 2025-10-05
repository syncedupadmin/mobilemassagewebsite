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
        // Refined luxury palette - sophisticated and understated
        black: {
          DEFAULT: '#000000',
          light: '#1A1A1A',
          medium: '#0D0D0D',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          light: '#3A3A3A',
          dark: '#1A1A1A',
        },
        // Deeper, richer gold tones - champagne and old gold
        gold: {
          50: '#F8F6F3',
          100: '#EDE8E0',
          200: '#D4C9B8',
          300: '#C4A574',  // Champagne gold - primary accent
          400: '#B8996B',  // Old gold
          500: '#A8956B',  // Deep champagne
          600: '#8A7A5C',
          700: '#6B5E47',
          800: '#4D4336',
          900: '#332D24',
        },
        // Warm neutrals for sophistication
        cream: {
          DEFAULT: '#F8F6F3',
          light: '#FDFCFB',
          dark: '#F0EDE8',
        },
        bronze: {
          400: '#A67C52',
          500: '#8B6F47',
          600: '#6B5339',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.05em',
        'wide': '0.025em',
      },
      backgroundImage: {
        // Single subtle gradient for very limited use
        'champagne-subtle': 'linear-gradient(135deg, #C4A574 0%, #B8996B 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
