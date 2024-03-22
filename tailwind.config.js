/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": {
            transfrom: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
            "transfrom-origin": "50% 0%",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            transfrom: "translateY(0) scaleY(1) scaleX(1)",
            "transfrom-origin": "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        slideDown: "slideDown 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      },
      colors: {
        "primary-bg": "#011627",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
  experimental: { optimizeUniversalDefaults: true },
};
