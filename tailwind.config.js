/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand FlorenceEGI
        gold: {
          DEFAULT: '#D4AF37',
          light: '#D4A574',
        },
        'algo-blue': '#1B365D',
        'mecenate-green': '#2D5016',
        // Background (Dark Theme)
        dark: {
          DEFAULT: '#0F0F0F',
          card: '#1A1A1A',
          elevated: '#242424',
        },
        // Pages
        'epp-green': '#16A34A',
        'wp-emerald': '#047857',
        'pa-blue': '#1E3A8A',
        'artist-purple': '#7C3AED',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
