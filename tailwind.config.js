import { keyframes } from '@emotion/react'
import { transform } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        custom_breathing: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px) scale(115%)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        custom_breathing: 'custom_breathing 3s ease-in-out infinite backwards',
      },
    },
  },
  plugins: [],
}

