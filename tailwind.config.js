export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        russo: ['"Russo One"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              '@apply block mt-6 text-base font-bold mb-3 font-russo uppercase text-[#0d0d0d]': {},
            },
            p: {
              '@apply block text-base': {},
            },
            ol: {
              listStyleType: 'decimal',
              listStylePosition: 'outside',
              paddingLeft: '1.5rem',
              fontSize: '1rem',
              lineHeight: '1.4',
            },
            ul: {
              listStyleType: 'disc',
              listStylePosition: 'outside',
              paddingLeft: '1.5rem',
              fontSize: '1rem',
              lineHeight: '1.4',
            },
            li: {
              display: 'list-item', 
              fontSize: '1rem',
              paddingTop: '0',
              paddingBottom: '0',
            },
          },
        },
      },
    },
  },
   plugins: [require('@tailwindcss/typography')],
}
