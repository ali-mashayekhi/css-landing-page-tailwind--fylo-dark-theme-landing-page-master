/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Open Sans'"],
        header: ["'Raleway'"],
      },

      colors: {
        cyan: { custom: "hsl(176, 68%, 64%)" },
        blue: { custom: "hsl(198, 60%, 50%)" },
        red: { custom: "hsl(0, 100%, 63%)" },
        darkBlue: {
          "bg-intro": "hsl(217, 28%, 15%)",
          "bg-main": "hsl(218, 28%, 13%)",
          "bg-footer": "hsl(216, 53%, 9%)",
          "bg-testimonials": "hsl(219, 30%, 18%)",
        },
        white: { base: "#fff", custom: "hsl(0, 0%, 100%)" },
      },

      backgroundImage: {
        "intro-mobile-pattern": "url('../images/bg-curvy-mobile.svg')",
      },

      fontSize: {
        "2xs": "11px",
        "3xs": "9px",
      },

      translate: {
        "3/5": "60%",
      },

      gridTemplateColumns: {
        "2-auto": "auto 1fr",
        "4-auto": "auto 1fr auto 1fr",
        footer: "6fr 1fr 1fr 1fr",
        16: "repeat(16,1fr)",
        36: "repeat(36,1fr)",
      },

      borderWidth: {
        1: "1px",
      },

      padding: {
        18: "4.5rem",
      },

      spacing: {
        18: "4.5rem",
      },

      boxShadow: {
        custom: "5px 5px 10px",
      },

      boxShadowColor: {
        darkBlue: { custom: "rgba(32, 42, 60, 0.3)" },
        black: {
          transparent: "rgba(0,0,0,0.2)",
        },
      },

      maxWidth: {
        "5.5xl": "68rem",
      },
    },
  },
  plugins: [],
};
