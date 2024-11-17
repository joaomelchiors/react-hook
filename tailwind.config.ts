import type { Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-xs', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl',
    'h-9', 'h-11', 'h-14', 'h-16', 'h-20', 'h-24',
    'w-9', 'w-11', 'w-14', 'w-16', 'w-20', 'w-24',
    'gap-0.25', 'gap-0.5', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8',
    'gap-9', 'gap-10', 'gap-11', 'gap-12', 'gap-14', 'gap-16', 'gap-20', 'gap-24', 'gap-28', 'gap-32',
    'bg-purple-500', 'bg-yellow-600', 'bg-red-400', 'text-blue-400' 

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    scrollbar,
  ],
};
export default config;
