/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class", content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"], // 끄기
  corePlugins: {
    preflight: true
  }, theme: {}
};
