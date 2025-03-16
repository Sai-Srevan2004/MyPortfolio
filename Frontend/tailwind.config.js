/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        waveSlide: "waveSlide 1.5s ease-in-out forwards",
        waveSlideDelay: "waveSlide 1.5s ease-in-out 0.3s forwards",
        waveSlideDelay2: "waveSlide 1.5s ease-in-out 0.6s forwards",
        waveSlideDelay3: "waveSlide 1.5s ease-in-out 0.9s forwards",
        waveSlideDelay4: "waveSlide 1.5s ease-in-out 1.2s forwards",
        revealCenter: "revealCenter 2s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        waveSlide: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "50%": { opacity: 0.5, transform: "translateX(0px)" },
          "100%": { opacity: 1, transform: "translateX(10px)" },
        },
        revealCenter: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
