/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '40px',
      '7xl': '62px',
      '8xl': '90px',
      '9xl': '112px',
    }
  },
  plugins: [],
};
