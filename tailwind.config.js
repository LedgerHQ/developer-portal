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
        "heading-5": ["32px", "42px"],
        "heading-6": ["24px", "34px"],
        "p": ["16px", "21px"],
        "p-highlight": ["16px", "28px"],
        "p-emphasis": ["21px", "29px"],
        "p-tag": ["14px", "18px"],
        "p-caption": ["13px", "22px"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF5300",
          "dark": "#993200",
        },
        purple: {
          DEFAULT: "#D4A0FF",
          "dark": "#603087",
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
        }
      },
      backgroundImage: {
        "purple-radial-gradient": "radial-gradient(61.07% 61.05% at 50.8% 98.5%, #4F3167 0%, #000 100%)",
        "nano-background": "linear-gradient(103deg, #000 42.94%, rgba(0, 0, 0, 0.00) 59.62%), url('/homepage/nano-background.png')",
      },
    },
  },
  plugins: [],
}