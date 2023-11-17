import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pink: "#FF2768",
      darkPink: "#C92254",
      lightPink: "#FF417A",
      darkerPink: "#822440",
      white: "#ffffff",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
export default config;
