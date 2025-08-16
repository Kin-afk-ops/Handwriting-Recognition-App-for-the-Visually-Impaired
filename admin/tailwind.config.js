import lineClamp from "@tailwindcss/line-clamp";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // rất quan trọng để Tailwind quét đúng
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};
