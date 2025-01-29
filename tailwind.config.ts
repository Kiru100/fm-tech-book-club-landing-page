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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
} satisfies Config;
