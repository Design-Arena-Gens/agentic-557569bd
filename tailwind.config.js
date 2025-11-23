/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e1eeff',
          200: '#bddaff',
          300: '#8dbbff',
          400: '#5892ff',
          500: '#2f6dff',
          600: '#1e55db',
          700: '#1843ac',
          800: '#153b8a',
          900: '#12336f',
        },
        accent: {
          500: '#34c759',
          600: '#2fb24f',
          700: '#279744'
        }
      },
      boxShadow: {
        subtle: '0 6px 24px -8px rgba(20, 50, 90, 0.25)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms ease-out both'
      }
    },
  },
  plugins: [],
}
