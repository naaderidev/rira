/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lalezar: "Lalezar",
        VazirRegular: "Vazir Regular",
        VazirMedium: "Vazir Medium",
      },
      letterSpacing: {
        tightest: "-.065em",
      },
      boxShadow: {
        custom: "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      screens: {
        xxs: "360px",
        xs: "480px",
      },
      colors: {
        blue: "#2A628F",
        green: "#7FB800",
        gold: "#FFA400",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
