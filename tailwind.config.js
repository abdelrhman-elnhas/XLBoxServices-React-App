/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#8cc63f",
        "secondary-color": "#000000",
        "third-color": "#ffffff",
      },
      fontFamily: {
        arabic: ['"Cairo"', "sans-serif"], // Arabic font
        english: ['"Gotham"', "sans-serif"], // English font
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero.webp')",
        "hero-tex": "url('/images/hero-tex.png')",
      },
      backgroundPosition: {
        center_top_10px: "center 50px",
      },
      screens: {
        xs: "430px",
        sm: "640px", // For small screens, set the max-width for container
        md: "768px", // For medium screens
        lg: "1024px", // For large screens
        xl: "1280px", // For extra-large screens
      },
      dropShadow: {
        "custom-shadow": "7px 7px 5px rgba(80, 153, 68, 0.1)",
      },
      listStyleType: {
        checkmark: 'url("/images/checkmark.svg")',
      },
    },
  },
  plugins: [],
};
