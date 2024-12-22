/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: {
          primary: "#5046e4",
          secondary: "#e0e6fe",
          text: "#5450ae",
        },
        body: {
          bg: "#f9fbfc",
        },
        card: {
          text: "#21262a",
          tags: "#594fc3",
          border: "#e5e7e7",
        },
        logo: {
          bg: "#5e52b7",
        },
        sidebar: {
          text: "#8a8e94",
          h1: "#0e1820",
          border: "#eaeced",
          icon: "#575e68",
        },
        modal: {
          bg: "#00000033",
        },
        auth: {
          bg: "#6466f0",
        },
      },
    },
  },
  plugins: [],
};
