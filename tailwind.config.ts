import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['.65rem', '.9rem'],
      sm: ['.95rem', '1.1rem'],
      base: ['1.1rem', '1.4rem'],
      md: ['1.45rem', '1.9rem'],
      lg: ['1.9rem', '2.55rem'],
      xl: ['2.55rem', '3.45rem'],
    },
    extend: {
      backgroundImage: {
        mountain: '/mountain_01.svg'
      },
      colors: {
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        support: 'rgb(var(--color-support) / <alpha-value>)',
        disabled: 'rgb(var(--color-disabled) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
      },
      dropShadow: {
        glow: [
          "0 0px 3px rgba(207, 244, 230, 0.25)",
          "0 0px 3px rgba(207, 244, 230, 0.25)"
        ],
        dark: [
          "0 5px 5px rgba(8, 17, 26, 0.5)",
          "0 5px 5px rgba(8, 17, 26, 0.5)"
        ]
      }
    },
  },
  plugins: [],
};
export default config;