/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "Ayo_Belajar.html", "Profil.html", "Berita_terkini.html", "Lokasi.html", "comingsoon.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#CF0A0A",
        secondary: "#000000",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
