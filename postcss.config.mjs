/** @type {import('postcss').Config} */
const config = {
  plugins: {
    'tailwindcss': {}, // <-- Ini adalah plugin v3 yang benar
    'autoprefixer': {},
  },
};

export default config;