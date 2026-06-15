/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1868DB',
          hover: '#1558BC',
          light: '#EED7FC',
        },
        text: {
          main: '#101214',
          muted: '#505258',
          light: '#FFFFFF',
        },
        bg: {
          light: '#F8F8F8',
          accent: '#1C2B42',
        },
        border: {
          light: '#DDDEE1',
        }
      },
      fontFamily: {
        charlieText: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        charlieDisplay: ["Sora", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        Novoz: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'button': '4px',
        'card': '20px',
      },
    },
  },
  plugins: [],
}
