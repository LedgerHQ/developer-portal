/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-2": ["68px", "88px"],
        "heading-3": ["50px", "56px"],
        "heading-4": ["38px", "48px"],
        "heading-5": ["32px", "42px"],
        "heading-6": ["24px", "34px"],
        "heading-7": ["18px", "25px"],
        "p": ["16px", "21px"],
        "p-highlight": ["16px", "28px"],
        "p-emphasis": ["21px", "29px"],
        "p-emphasis-mobile": ["18px", "28px"],
        "p-tag": ["14px", "18px"],
        "p-caption": ["13px", "22px"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF5300",
          "dark": "#4D1900",
        },
        purple: {
          DEFAULT: "#D4A0FF",
          "light": "#C988FF",
          "dark": "#7F6099",
        },
        green: {
          "nft": {
            DEFAULT: "#9D9F64",
            "dark": "#3F4028"
          }
        },
        grey: {
          200: "#F1F1F1",
          300: "#E5E5E5",
          400: "#C3C3C3",
          500: "#949494",
          600: "#6A6A6A",
          700: "#3C3B3B",
          800: "#171717",
          900: "#090909",
        }
      },
      backgroundImage: {
        "hero-background": "url(/homepage/hero-background.png)",
        "purple-radial-gradient": "radial-gradient(61.07% 61.05% at 50.8% 98.5%, #4F3167 0%, #000 100%)",
        "nano-background": "linear-gradient(103deg, #000 42.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
        "nano-background-mobile": "linear-gradient(103deg, #000 42.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
        "nano-background-lg": "linear-gradient(103deg, #000 52.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
        "nano-background-xl": "linear-gradient(103deg, #000 57.94%, rgba(0, 0, 0, 0.00) 69.62%), url('/homepage/nano-background.png')",
        "nano-background-2xl": "linear-gradient(103deg, #000 72.94%, rgba(0, 0, 0, 0.00) 79.62%), url('/homepage/nano-background.png')",
        "black-gradient-left": "linear-gradient(90deg, #000 0%, rgba(10, 10, 10, 0.00) 100%)",
        "black-gradient-right": "linear-gradient(90deg, rgba(10, 10, 10, 0.00) 0%, #000 100%)",
        "black-gradient-bottom": "linear-gradient(180deg, rgba(10, 10, 10, 0.00) 0%, #000 100%)"
      },
      screens: {
        "phone": "425px",
      },
      animation: {
        "carousel-part1": "slide1 20s linear infinite",
        "carousel-part2": "slide2 20s linear infinite",
        "carousel-part3": "slide3 20s linear infinite",
      },
      keyframes: {
        slide1: {
          "0%": { left: "0" },
          "100%": { left: "-2160px" },
        },
        slide2: {
          "0%": { left: "2160px" },
          "100%": { left: "0" },
        },
        slide3: {
          "0%": { left: "4320px" },
          "100%": { left: "2160px" },
        }
      },
      letterSpacing: {
        "tight-1": "-1.08px",
        "tight-2": "-1.44px",
        "tight-3": "-2.25px",
        "tight-4": "-3.06px",
        
      }
    },
  },
  plugins: [],
}