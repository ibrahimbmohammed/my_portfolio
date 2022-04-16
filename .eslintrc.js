module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:react/jsx-runtime'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
                peerDependencies: true,
            },
        ],
    },
    overrides: [
        {
            files: ['pages/**/*.tsx', 'stories/**/*.tsx'],
            rules: {
                'react/jsx-props-no-spreading': 'off',
                'react/function-component-definition': 'off',
                'import/no-unresolved': 'off',
                'import/extensions': 'off',
                'react/require-default-props': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: '18.0.0',
        },
    },
};
