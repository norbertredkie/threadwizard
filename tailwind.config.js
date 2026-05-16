/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
        },
        cyan: {
          500: '#06B6D4',
          600: '#0891B2',
        },
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
      },
      backgroundColor: {
        dark: '#000000',
        'dark-card': '#1E293B',
      },
      textColor: {
        light: '#FFFFFF',
        muted: '#94A3B8',
      },
      borderColor: {
        'light-border': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
