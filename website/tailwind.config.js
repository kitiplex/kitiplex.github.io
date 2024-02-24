/** @type {import('tailwindcss').Config} */
export const corePlugins = {
  preflight: false, // disable Tailwind reset to avoid overriding Docusaurus styles
};
export const darkMode = ['class', '[data-theme="dark"]'];
export const content = ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}",];
export const colors = {
  white: "#fff",
  primary: {
    300: "#6ac1f6",
    400: "#43b1f4",
    500: "#37acf3",
    600: "#1da1f2",
    default: "#1da1f2",
    700: "#0d94e7",
    800: "#0d8cda",
    900: "#0a73b3",
  },
  secondary: {
    300: "#ededed",
    400: "#d4d4d4",
    500: "#adadad",
    600: "#878787",
    default: "#878787",
    700: "#616161",
    800: "#141414",
    900: "#0d0d0d",
  },
  success: "#0d8d4f",
  warning: "#f4b400",
  danger: "#db4437",
};
export const theme = {
  extend: {},
};
export const plugins = [];

