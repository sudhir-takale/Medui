/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [require("@tailwindcss/forms"), nextui()];
