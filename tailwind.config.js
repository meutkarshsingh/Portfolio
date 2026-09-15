/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0f',
        card: '#12121a',
        border: '#1e1e2e',
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
      },
    },
  },
  plugins: [],
}
