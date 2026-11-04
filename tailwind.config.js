/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F17',
        },
        obsidian: {
          950: '#07090E',
          900: '#0D1117',
          850: '#121721',
          800: '#181F2C',
          750: '#20293A',
        },
        metallic: {
          shimmer: '#E8EDF5',
          platinum: '#DCE2EC',
          sterling: '#C4CCD8',
          chrome: '#AAB5C6',
          antique: '#7D8899',
        },
        royal: {
          gold: '#D4AF37',
          amber: '#F59E0B',
          ruby: '#991B1B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(135deg, #ffffff 0%, #d8e0ea 45%, #9faec2 70%, #d8e0ea 100%)',
        'silver-sheen': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'dark-metallic': 'radial-gradient(ellipse at top, #1E293B 0%, #0D1117 70%, #07090E 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

