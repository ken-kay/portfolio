// import type { Config } from 'tailwindcss'

// const config: Config = 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        bounce: 
        'bounce 0.5s alternate cubic-bezier(0.95,0.05,0.795,0.035) infinite'
      },
      keyframes: {
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
      colors: {
        'pinky': '#FF0069',
        'sky': '#69BADD',
        'manilla': '#F7DCA9',
        'moon': '#30333E',
        'sun': '#FFF9FB'

      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
// export default config
