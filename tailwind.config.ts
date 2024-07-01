import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bobble: {
          '0%': { borderRadius: '50% 20% / 10% 60%' },
          '50%': { borderRadius: '20% 50% / 60% 10%' },
          '100%': { borderRadius: '50% 20% / 10% 60%' },
        },
        icons: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-23%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        bobble: 'bobble 17s infinite',
        icons: 'icons 50s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
