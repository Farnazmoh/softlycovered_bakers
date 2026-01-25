import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdfb',
          100: '#fef9f3',
          200: '#fef3e7',
          300: '#f9e6cf',
          400: '#f3d5a8',
          500: '#e8be7a',
        },
        brown: {
          50: '#f8f5f2',
          100: '#e8dfd4',
          200: '#d4c3b0',
          300: '#b89b7f',
          400: '#9d7a5a',
          500: '#8b6649',
          600: '#71503a',
          700: '#5d4230',
          800: '#4a3426',
          900: '#3a2a1f',
        },
        gold: {
          400: '#e8c170',
          500: '#d4a547',
          600: '#b8882f',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
