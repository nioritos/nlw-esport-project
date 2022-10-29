/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaxyBackground' : "url(../public/Fundo.png)" 
      },
      backgroundGradient: {
        'gradientBackground' : "linear-gradient(90deg, rgba(149,114,252,1) 0%, rgba(67,231,173,1) 48%, rgba(226,212,92,1) 100%)"
      },
      gradient: {
        'duoWord': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)'
      },
    },
    
   
  plugins: [],
}
}
