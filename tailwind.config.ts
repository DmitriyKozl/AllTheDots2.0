import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         light: '#3a5cdb', // Lighter variation
  //         DEFAULT: '#2e4fca', // Base blue
  //         dark: '#233d9e',   // Darker blue with black touch
  //       },
  //       secondary: {
  //         light: '#e33d5d', // Lighter variation
  //         DEFAULT: '#df264b', // Base red
  //         dark: '#b31e3c',   // Darker red with black touch
  //       },
  //       gradient: {
  //         light: 'rgba(235, 238, 250, 1)',
  //         medium: 'rgba(211, 217, 244, 1)',
  //         pink: 'rgba(214, 169, 199, 1)',
  //       }
  //     },
  //     animation: {
  //       'gradient-shift': 'gradient-shift 8s ease infinite',
  //       'float': 'float 6s ease-in-out infinite',
  //       'glass-shine': 'glass-shine 8s ease-in-out infinite',
  //     },
  //     keyframes: {
  //       'gradient-shift': {
  //         '0%, 100%': {
  //           'background-size': '200% 200%',
  //           'background-position': 'left center'
  //         },
  //         '50%': {
  //           'background-size': '200% 200%',
  //           'background-position': 'right center'
  //         },
  //       },
  //       'float': {
  //         '0%, 100%': { transform: 'translateY(0)' },
  //         '50%': { transform: 'translateY(-20px)' },
  //       },
  //       'glass-shine': {
  //         '0%': { backdropFilter: 'blur(8px) brightness(100%)' },
  //         '50%': { backdropFilter: 'blur(8px) brightness(120%)' },
  //         '100%': { backdropFilter: 'blur(8px) brightness(100%)' },
  //       }
  //     },
  //   },
  // }, 
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2e4fca',
          red: '#df264b',
        },
        gradient: {
          light: 'rgba(235, 238, 250, 1)',
          medium: 'rgba(211, 217, 244, 1)',
          pink: 'rgba(214, 169, 199, 1)',
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glass-shine': 'glass-shine 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glass-shine': {
          '0%': { backdropFilter: 'blur(8px) brightness(100%)' },
          '50%': { backdropFilter: 'blur(8px) brightness(120%)' },
          '100%': { backdropFilter: 'blur(8px) brightness(100%)' },
        }
      },
      backdropFilter: {
        'glass': 'blur(8px)',
      },
    },
  },
  plugins: [],
} satisfies Config

