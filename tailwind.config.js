/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './hoc/**/*.{js,ts,jsx,tsx}',
        './stories/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#18D8C8', // this is Peddlesoft primary green colour
                primaryColor: 'var(--color-primaryColor)',
                secondaryColor: 'var(--color-secondaryColor)',
                primaryText: 'var(--color-primaryText)',
                secondaryText: 'var(--color-secondaryText)',
                primaryBtn: 'var(--color-primaryBtn)',
                secondaryBtn: 'var(--color-secondaryBtn)',
                backgroundPrimary: 'var(--color-backgroundPrimary)',
                backgroundSecondary: 'var(--color-backgroundSecondary)',
                sky: colors.sky,
                cyan: colors.cyan,
            },

            spacing: {
                25: '6.25rem',
                98: '24.5 rem',
                100: '25rem',
                104: '26rem',
                120: '30rem',
                140: '35rem',
            },
            screens: {
                '1xl': '1440px',
            },
        },
        fontFamily: {
            Poppins: ['Poppins, sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar-hide'),
    ],
};
