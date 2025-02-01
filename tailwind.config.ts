import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme:{
      fontFamily:{
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
    extend: {
      backgroundImage:{
        'hero-image': "url('/images/hero-bg.png)",
      },
      fontFamily:{
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
