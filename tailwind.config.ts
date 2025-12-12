import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D7263D',
        primaryDark: '#8B1B2A',
        primarySoft: '#FFE4E7',
        accent: '#FF4D5A',
        bgDark: '#050608',
        bg: '#0F1013',
        bgLight: '#F7F7F9',
        textMain: '#111827',
        textMuted: '#6B7280',
        borderSubtle: '#E5E7EB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-noto-serif-jp)', 'ui-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-delayed': 'float 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

