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
        cream: {
          50: '#FFFCF9',
          100: '#FFF8F0',
          200: '#FAF9F6',
        },
        gold: {
          400: '#D4AF37',
          500: '#C9A961',
          600: '#B8923F',
        },
        terracotta: {
          400: '#B87863',
          500: '#A0614D',
          600: '#8B4513',
        },
        charcoal: {
          900: '#2C2C2C',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
