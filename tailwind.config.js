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
        "hero-background": "linear-gradient(269deg, #000 7.78%, rgba(0, 0, 0, 0.00) 15.8%), linear-gradient(96deg, rgba(0, 0, 0, 0.80) 36.2%, rgba(0, 0, 0, 0.80) 36.2%, rgba(0, 0, 0, 0.00) 53.12%), url(/homepage/hero-desktop.png)",
        "purple-radial-gradient": "radial-gradient(61.07% 61.05% at 50.8% 98.5%, #4F3167 0%, #000 100%)",
        "nano-background": "linear-gradient(103deg, #000 42.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
        "nano-background-mobile": "linear-gradient(103deg, #000 42.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
        "nano-background-lg": "linear-gradient(103deg, #000 52.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
        "nano-background-xl": "linear-gradient(103deg, #000 57.94%, rgba(0, 0, 0, 0.00) 69.62%), url('/homepage/nano-background.png')",
        "nano-background-2xl": "linear-gradient(103deg, #000 72.94%, rgba(0, 0, 0, 0.00) 79.62%), url('/homepage/nano-background.png')",
      },
      screens: {
        "phone": "425px",
      },
    },
  },
  plugins: [],
}