/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "tbc-neutral-900": "var(--tbc-neutral-900)",
        "tbc-neutral-700": "var(--tbc-neutral-700)",
        "tbc-neutral-200": "var(--tbc-neutral-200)",
        "tbc-neutral-100": "var(--tbc-neutral-100)",
        "tbc-neutral-0": "var(--tbc-neutral-0)",
        "light-salmon": "var(--light-salmon)",
        "light-salmon-100": "var(--light-salmon-100)",
        "light-salmon-50": "var(--light-salmon-50)",
        "text-gradient": "var(--text-gradient)",
        "base-gradient": "var(--base-gradient)",
      },
      fontFamily: {
        "geist": "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
        "inter": ["Inter", "sans-serif"],
        "martian-mono": "var(--font-martian-mono)",
        "martian-mono-normal": "var(--font-martian-mono-normal)",
        "martian-mono-bold": "var(--font-martian-mono-bold)",
        "martian-mono-semibold": "var(--font-martian-mono-semibold)",
        "martian-mono-medium": "var(--font-martian-mono-medium)",
        "martian-mono-light": "var(--font-martian-mono-light)",
        "inter-normal": "var(--font-inter-normal)",
      },
      backgroundImage: {
        "text-gradient": "var(--text-gradient)",
        "square-background" : "url('../public/images/pattern-light-bg.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
