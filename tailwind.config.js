/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        slow: "1s", // Adjust the duration as needed
      },
      transitionTimingFunction: {
        "ease-slow": "cubic-bezier(0.87, 0, 0.13, 1)", // Adjust the easing function as needed
      },
    },
  },
  plugins: [],
};
