import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'btn-col': '#724dff',
      'txt-col-hov': '#fafafa',
      'grey': '#ededed',
      'gray-light': '#d3dce6',
      'gray-dark': '#808080',
      'white-shade': '#FAFAFA',
      'white': '#ffffff',
      'green': '#abe423',
      'black': '#000000',
    },
    dropShadow: {
      '4xl': '0 0 5px rgba(114, 77, 255, 0.82)'
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
