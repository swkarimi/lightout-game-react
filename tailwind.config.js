/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Laila: ['Laila', 'sans-serif'],
      },
      boxShadow: {
        onLamp: [
          '0 0 10px 0 rgba(255, 255, 0, 1)',
          '0 0 20px 0 rgba(255, 255, 0, 1)',
        ],
      },
    },
  },
  plugins: [],
};
