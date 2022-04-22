const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../components/**/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    // When you have splitted your css over multiple files
                    // and use @import('./other-styles.css')
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    // When using postCSS 8
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
        return config;
    },
};
