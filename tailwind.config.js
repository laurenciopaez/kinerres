/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        sm: "0.38rem",
        md: "1rem",
        xl: "1.25rem",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        Verde: '#3A5A42',
        AzulMarino: '#080357',
        Celeste: '#80CED7',
      },
      backgroundColor: {
        'serif-mint-light': '#BEE4E6',
        'seri-mint-breakpoint': '#F2EFD0',
        'serif-mint-dark': '#A8D1AD',
      },
      fontFamily: {
        serif: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
