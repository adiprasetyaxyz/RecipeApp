/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "#BFD1FF",
        "my-pink": "#EE8B8B",
        secondary: "#F7C979",
        primary: "#F9EBC9",
        main: "#FAF9FB",
        accent: "F7C97A",
      },
    },
  },
  plugins: [],
};
