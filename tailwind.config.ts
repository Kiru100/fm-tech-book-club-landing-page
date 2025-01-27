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
        "tcp-neutral-900": "var(--tcp-neutral-900)",
        "tcp-neutral-700": "var(--tcp-neutral-700)",
        "tcp-neutral-200": "var(--tcp-neutral-200)",
        "tcp-neutral-100": "var(--tcp-neutral-100)",
        "tcp-neutral-0": "var(--tcp-neutral-0)",
        "--light-salmon": "var(--light-salmon)",
        "--light-salmon-100": "var(--light-salmon-100)",
        "--light-salmon-50": "var(--light-salmon-50)",
        "--text-gradient": "var(--text-gradient)",
        "--base-gradient": "var(--base-gradient)",
      },
    },
  },
  plugins: [],
} satisfies Config;
