/* eslint-disable func-names */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(() => {
    return function ({ addUtilities }) {
        addUtilities({
            '.horizontal-tb': {
                writingMode: 'horizontal-tb',
            },
            '.vertical-rl': {
                writingMode: 'vertical-rl',
            },
            '.vertical-lr': {
                writingMode: 'vertical-lr',
            },
            '.text-orientation': {
                textOrientation: 'upright',
            },
            '.text-gradient': {
                background: 'linear - gradient(to right, #30CFD0 0 %, #330867 100 %)',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
            },
            '.content-area': {
                height: `calc(100vh - 4rem)`,
            },
        });
    };
});

// module.exports = {
//   plugins: [
//     plugin(function({ addUtilities, addComponents, e, prefix, config }) {
//         const newUtilities = {
//           '.horizontal-tb': {
//             writingMode: 'horizontal-tb',
//           },
//           '.vertical-rl': {
//             writingMode: 'vertical-rl'
//           },
//           '.vertical-lr': {
//             writingMode: 'vertical-lr'
//           }
//         }
//         addUtilities(newUtilities)
//       })
//   ]
// }
