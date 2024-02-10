/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      backgroundImage: {
        'banner-home': "url('/src/assets/background/Home.jpg')",
        'linear-top-black-0.5': "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0))",
        'linear-top-black-0.75': "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.0))",
        'linear-top-black-0.9': "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0))",
        'linear-top-black-1': "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0))",
        'linear-top-white-0.25': "linear-gradient(to top, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.0))",
        'linear-top-white-0.5': "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.0))",
        'linear-top-white-0.75': "linear-gradient(to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.0))",
        'linear-top-white-0.9': "linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.0))",
        'linear-top-white-1': "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.0))",
      },
      width: {
        100: "100px",
        150: "150px",
        200: "200px",
        225: "225px",
        250: "250px",
        300: "300px",
        350: "350px",
        375: "375px",
        400: "400px",
        450: "450px",
        520: "520px",
        1040: "1040px",
        1085: "1085px",
      },
      height: {
        0.75: "3px",
        100: "100px",
        150: "150px",
        200: "200px",
        225: "225px",
        250: "250px",
        300: "300px",
        350: "350px",
        375: "375px",
        400: "400px",
        450: "450px",
        "banner-lg": "720px",
        520: "520px",
        550: "550px",
        1040: "1040px",
      },
      padding: {
        '50': "50px",
        '100': "100px",
        '120': "120px",
        '150': "150px",
      },
      colors: {
        red: "#FE170F",
        gray: "#4E4E4E",
        yellow: "#FCC21B",
        soft: {
          white: "#D9D9D9",
        },
        black: {
          0.25: 'rgba(0, 0, 0, 0.25)',
          0.5: 'rgba(0, 0, 0, 0.5)',
          0.75: 'rgba(0, 0, 0, 0.75)',
          0.85: 'rgba(0, 0, 0, 0.85)',
          1: 'rgba(0, 0, 0, 1)',
        },
        white: {
          0.25: 'rgba(255, 255, 255, 0.25)',
          0.5: 'rgba(255, 255, 255, 0.5)',
          0.75: 'rgba(255, 255, 255, 0.75)',
          0.85: 'rgba(255, 255, 255, 0.85)',
          1: 'rgba(255, 255, 255, 1)',
        },
      },
      borderRadius: {
        10: "10px",
        15: "15px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        'loading': '0px 0px 50px 2px #FE170F',
        'default': '0px 0px 5px 5px rgba(0, 0, 0, 0.25)',
        'y-axis': '0px 5px 5px 0px rgba(0, 0, 0, 0.5)',
        'spread': '-4px 4px 10px 5px rgba(0, 0, 0, 0.35)',
        'spread-2': '-4px 4px 10px 5px rgba(0, 0, 0, 0.6)',
      },
      translate: {
        '7/5': '140%',
      },
      animation: {
        'grow': 'grow 1.75s ease-in-out infinite',
        'scale-110': 'scale-110 8s ease-in-out forwards',
        'slide-to-right': 'slide-to-right 0.3s ease-in-out forwards',
        'slide-to-left': 'slide-to-left 0.3s ease-in-out forwards',
        'navbar-hide': 'hide 0.3s ease-in-out forwards',
      },
      keyframes: {
        'hide': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'grow': {
          '0%': { transform: 'scale(0.3)' },
          '20%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(0.3)' },
          '100%': { transform: 'scale(0.3)' },
        },
        'scale-110': {
          '0%': { backgroundSize: '100%' },
          '20%': { backgroundSize: '115%' },
          '100%': { backgroundSize: '100%' },
        },
        'slide-to-right': {
          '0%': { left: '0px' },
          '100%': { right: '0px' },
        },
        'slide-to-left': {
          '0%': { right: '0px' },
          '100%': { left: '0px' },
        },
      },
      gap: {
        0.75: "3px",
      },
    },
  },
  plugins: [],
}

