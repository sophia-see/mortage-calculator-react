/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"]
    },
    extend: {
      fontSize: {
        // desktop
        'desktop/preset-1': ['56px', {
          lineHeight: '125%',
          letterSpacing: '0',
          fontWeight: 'bold',
        }],
        'desktop/preset-2': ['24px', {
          lineHeight: '125%',
          letterSpacing: '0',
          fontWeight: 'bold',
        }],
        'desktop/preset-3': ['18px', {
          lineHeight: '125%',
          letterSpacing: '0',
          fontWeight: 'bold',
        }],
        'desktop/preset-4': ['16px', {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: 'medium',
        }],
        'desktop/preset-5': ['14px', {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: 'medium',
        }],

        // mobile
        'mobile/preset-1': ['40px', {
          lineHeight: 'auto',
          letterSpacing: '0',
          fontWeight: 'bold',
        }],
      },
      colors: {
        "c-lime": "#D8DB2F",
        "c-lime-15": "#F9FAE0",

        "c-dark-slate": "#0E2431",
        "c-light-slate": "#304A5A",
        "c-slate-900": "#133041",
        "c-slate-700": "#4E6E7E",
        "c-slate-500": "#6B94A8",
        "c-slate-300": "#9ABED5",
        "c-slate-100": "#E4F4FD",

        "c-red": "#D73328"
      }
    },
  },
  plugins: [],
}

