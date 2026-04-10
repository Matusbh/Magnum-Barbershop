/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Magnum
        fondo: '#0a0a0a',
        rojo: '#FF1F1F',
        blanco: '#F0EDE6',
        grisOscuro: '#111111',
        grisCard: '#161616',
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        cuerpo: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neonRojo: '0 0 20px rgba(255, 31, 31, 0.6), 0 0 60px rgba(255, 31, 31, 0.2)',
        neonRojoSutil: '0 0 8px rgba(255, 31, 31, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
