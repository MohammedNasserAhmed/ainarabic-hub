/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
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
        // Semantic additions
        success: '#10B981',
        warning: '#FBBF24',
        danger: '#EF4444',
        info: '#3B82F6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 6px -1px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 6px 18px -4px rgba(0,0,0,0.25)',
        'focus-ring': '0 0 0 3px rgba(245,158,11,0.5)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        pill: '999px'
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(.4,0,.2,1)'
      }
    },
  },
  plugins: [],
}
