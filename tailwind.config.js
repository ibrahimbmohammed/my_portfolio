/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/hoc/**/*.{js,ts,jsx,tsx}',
        './lib/layout/**/*.{js,ts,jsx,tsx}',
        './lib/hooks/**/*.{js,ts,jsx,tsx}',
        './lib/utils/**/*.{js,ts,jsx,tsx}',
        './stories/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gray: {
                900: '#202225',
                800: '#2f3136',
                700: '#36393f',
                600: '#4f545c',
                400: '#d4d7dc',
                300: '#e3e5e8',
                200: '#ebedef',
                100: '#f2f3f5',
            },
            gGray: {
                0: '#F9F2F0',
                100: '#F9F2F0',
            },
            animation: {
                fade: 'fadeIn  .5s ease-in-out',
                fadeOut: 'fadeOut  .5s ease-out',
                motionSafe: 'motion-safe',
            },
            keyframes: (theme) => ({
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
            }),
            spacing: {
                25: '6.25rem',
                88: '22rem',
                98: '24.5 rem',
                100: '25rem',
                104: '26rem',
                106: '28rem',
                108: '30rem',
                110: '34rem',
            },
            screens: {
                '1xl': '1440px',
                '1.5xl': '1500px',
                '3xl': '1700px',
            },
        },
        fontFamily: {
            theme: "'Montserrat', sans-serif",
            Theme: 'var(--font-name), var(--font-family)',
            fans: "'Fascinate', 'cursive' ",
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
        require('./plugins/verticalText'),
        require('./plugins/moonBig'),
    ],
};
