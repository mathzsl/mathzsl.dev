import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        title: 'var(--font-montserrat)',
      },
      colors: {
        gray: {
          100: '#EBECF3',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },

        green: {
          200: '#0AFF9D',
          300: '#08E68B',
          400: '#049462',
        },
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
}
export default config
