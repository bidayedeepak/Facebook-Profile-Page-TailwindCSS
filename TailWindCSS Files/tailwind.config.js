/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xs: "400px",
      // => @media (min-width:400px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        iconBg: "url('/images/coupleprofile.jpg')",
        iconBg1: "url('/images/coupleprofile1.jpg')",
        iconBg2: "url('/images/coupleprofile2.jpg')",
        iconBg3: "url('/images/coupleprofile3.jpg')",
        iconBg4: "url('/images/coupleprofile4.jpg')",
        iconBg5: "url('/images/coupleprofile5.jpg')",
        iconBg6: "url('/images/coupleprofile6.jpg')",
        iconBg7: "url('/images/coupleprofile7.jpg')",
        iconBg8: "url('/images/coupleprofile8.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
