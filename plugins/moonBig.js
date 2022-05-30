/* eslint-disable func-names */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

// module.exports = {
//   plugins: [
//     plugin(function({ addComponents, theme }) {
//       const moons = {
//         '.moon': {
//             background: 'linear-gradient(233.67deg, #EBEBEB 10.84%, rgba(83, 82, 82, 0.552083) 42.38%, rgba(235, 235, 235, 0.08) 74.58%)',
//             opacity: '0.31',
//             boxShadow: '-3.914px 5.803px 5.656px rgba(0, 0, 0, 0.24)',
//             transform: 'rotate(6.82deg)'
//         },
//         '.moon-indigo': {
//           backgroundColor: theme('colors.indigo.500'),
//           color: theme('colors.white'),
//           '&:hover': {
//             backgroundColor: theme('colors.indigo.600')
//           },
//         },
//       }

//       addComponents(moons)
//     })
//   ]
// }

module.exports = plugin.withOptions(() => {
    return function ({ addComponents }) {
        addComponents({
            '.moon': {
                background:
                    'linear-gradient(233.67deg, #EBEBEB 10.84%, rgba(83, 82, 82, 0.552083) 42.38%, rgba(235, 235, 235, 0.08) 74.58%)',
                opacity: '0.31',
                boxShadow: '-3.914px 5.803px 5.656px rgba(0, 0, 0, 0.24)',
                transform: 'rotate(6.82deg)',
                borderRadius: '50%',
                aspectRatio: '1/1',
            },
            '.moon-bg': {
                background:
                    'linear-gradient(233.67deg, #EBEBEB 10.84%, rgba(83, 82, 82, 0.552083) 42.38%, rgba(235, 235, 235, 0.08) 74.58%)',
                opacity: '0.15',
                boxShadow: '-3.914px 5.803px 5.656px rgba(0, 0, 0, 0.24)',
                transform: 'rotate(-121.74deg)',
                borderRadius: '50%',
                aspectRatio: '1/1',
            },
            '.moon-bg2': {
                background:
                    'linear-gradient(233.67deg, #EBEBEB 10.84%, rgba(83, 82, 82, 0.552083) 42.38%, rgba(235, 235, 235, 0.08) 74.58%)',
                opacity: '0.15',
                boxShadow: '-3.914px 5.803px 5.656px rgba(0, 0, 0, 0.24)',
                transform: 'rotate(4.23deg)',
                borderRadius: '50%',
                aspectRatio: '1/1',
            },
            '.moon-op': {
                background:
                    'linear-gradient(233.67deg, #EBEBEB 10.84%, rgba(83, 82, 82, 0.552083) 42.38%, rgba(235, 235, 235, 0.08) 74.58%)',
                opacity: '0.31',
                boxShadow: '-3.914px 5.803px 5.656px rgba(0, 0, 0, 0.24)',
                transform: 'rotate(-6.38deg)',
                borderRadius: '50%',
                aspectRatio: '1/1',
            },
            '.shape': {
                background: 'rgba(235, 235, 235, 0.15)',
                opacity: '0.31',
                boxShadow: '-3.914px 5.803px 5.656px rgba(0, 0, 0, 0.24)',
                borderRadius: '10%',
                // aspectRatio: '1/1',
                '&:before': {
                    content: '"."',
                    width: '0',
                    height: '0',
                    borderTop: '100px solid black',
                    borderRight: '100px solid transparent',
                    position: 'absolute',
                },
                '&:after': {
                    content: '"."',
                    width: '0',
                    // height: '0',
                    // height: '240px',
                    borderBottom: '100px solid black',
                    borderLeft: '100px solid transparent',
                    position: 'absolute',
                    marginLeft: '87px',
                    marginTop: '127px',
                },
            },

            '.design': {
                borderLeft: '.2rem solid #fff',
                '&:before': {
                    content: '".aa"',
                    position: 'relative',
                    top: '-1rem',
                    left: '-0.7rem',
                    height: '5rem',
                    width: '7rem',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                },
                '&:after': {
                    content: '".aa"',
                    position: 'relative',
                    top: '-17rem',
                    left: '-0.7rem',
                    height: '2rem',
                    width: '2rem',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                },
            },
            '.box': {
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
        });
    };
});
