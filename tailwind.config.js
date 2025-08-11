/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-primary': 'var(--light-primary)',
        'light-secondary': 'var(--light-secondary)',
        'light-text-primary': 'var(--light-text-primary)',
        'light-text-secondary': 'var(--light-text-secondary)',
        'light-accent': 'var(--light-accent)',
        'light-accent-hover': 'var(--light-accent-hover)',

        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-text-primary': 'var(--dark-text-primary)',
        'dark-text-secondary': 'var(--dark-text-secondary)',
        'dark-accent': 'var(--dark-accent)',
        'dark-accent-hover': 'var(--dark-accent-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
