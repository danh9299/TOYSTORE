// tailwind.config.js
export default {
  files: {
    include: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#F9FAFB",
      },
      fontFamily: {
        nunito: ['"Nunito"', "ui-sans-serif", "system-ui"],
      },
    },
  },
};
