/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "#FFF8F8",
      },
      fontFamily: {
        Benzin_bold: ["Benzin_bold"],
      },
      boxShadow: {
        btnBlackBackground: "0px 3px 24px 0px #00000014",
      },
      keyframes: {
        "move-bottom-up": {
          "0%": { left: "-10px" },
          "100%": { left: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        "text-move-bottom-up": "move-bottom-up .5s infinite",
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      fontSize: {
        28: ["28px", { lineHeight: "35.42px" }],
        18: ["18px", { lineHeight: "22.77px" }],
        16: ["16px", { lineHeight: "20.24px" }],
        12: ["12px", { lineHeight: "18px" }],
        20: ["20px", { lineHeight: "25.3px" }],
        26: ["26px", { lineHeight: "32.89px" }],
        22: ["22px", { lineHeight: "27.83px" }],
        15: ["15px", { lineHeight: "22.5px" }],
        40: ["40px", { lineHeight: "50.6px" }],
        32: ["32px", { lineHeight: "40.48px" }],
      },
      fontWeight: {
        "bold-450": "450",
      },
    },
  },
  plugins: [],
};
