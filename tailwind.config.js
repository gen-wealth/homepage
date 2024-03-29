module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0px)" },
          "20%, 60%": { transform: "translateX(6px)" },
          "40%, 80%": { transform: "translateX(-6px)" },
        },
      },
      animation: {
        wiggle: "wiggle 500ms linear",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // "business",
      // "synthwave",

      {
        moon: {
          primary: "#2e1065", // violet-950
          secondary: "#e0d0f0",
          accent: "#e8b2ee",
          neutral: "#180733",

          "base-100": "#1a103d",

          info: "#9964b0",
          success: "#71ead2",
          warning: "#eacc30",
          error: "#e24056",
        },
      },

      {
        sun: {
          primary: "#2e1065", // violet-950
          secondary: "#efdfff",
          accent: "#f1f0f2",
          neutral: "#220b4a",

          "base-100": "#707693",

          info: "#9b66b2",
          success: "#71ead2",
          warning: "#eacc30",
          error: "#e24056",
        },
      },
    ],

    darkTheme: "moon", // "synthwave",
  },
};
