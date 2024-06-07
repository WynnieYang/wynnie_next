import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black': '#323232',
        'D0B8AC': '#D0B8AC',
        'F3D8C7': '#F3D8C7',
        'EFE5DC': '#EFE5DC',
        'FBFEFB': '#FBFEFB',
        'white': '#FFF',
        'blue-c7d7e6': '#c7d7e6',
        'green-dce5e2': '#dce5e2',
        'gray': '##787D8A'
      },
      flex: {
        '1': '1 1 0%',
        '2': '2 2 0%',
      }
    },
  },
  plugins: [],
}
export default config
