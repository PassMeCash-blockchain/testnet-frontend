/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      'primaryColor': '#874CF6',
      'secondaryColor': '#0B011D',
      'inputColor': '#F5F5F5',
      'warningColor': '#F3AF0A',
      'dangerColor': '#EA4335',
      'processingColor': '#4564D6',
      'greenColor': '#0AC18E',
        'greyColor': '#E5D8FD',
      'edgeColor':'#FCFCFC',
      'verify':'#EBEBEB'
    },
    },
  },
  plugins: [],
}
