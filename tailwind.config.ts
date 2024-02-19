import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xl: ['3rem', '3.625rem'],
      lg: ['1.5rem', '2rem'],
      md: ['1.125rem', '1.75rem'],
      sm: ['0.875rem', '1.125rem'],
    },
    fontWeight: {
      bold: '700',
      semibold: '600',
      medium: '500',
      reg: '400',
    },
    borderRadius: {
      xxl: '24px',
      xl: '16px',
      lg: '12px',
      md: '8px',
      sm: '4px',
      full: '9990px',
    },
    boxShadow: {
      lg: 'var(--shadow-lg)',
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
