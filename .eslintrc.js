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
        'import/no-unresolved': [2, { caseSensitive: false }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
                peerDependencies: true,
            },
        ],
        'arrow-body-style': ['error', 'as-needed'],
    },
    overrides: [
        {
            files: [
                'pages/**/*.tsx',
                'pages/api/*.ts',
                'pages/api/**/*.ts',
                'stories/**/*.tsx',
                'components/**/*.tsx',
                'lib/**/**/*.tsx',
                'lib/layout/**/**/*.tsx',
                'store/**/*.tsx',
            ],
            rules: {
                'import/no-unresolved': 'off',
                'react/jsx-props-no-spreading': 'off',
                'react/function-component-definition': 'off',
                'import/extensions': 'off',
                'react/require-default-props': 'off',
                'no-undef': 'off',
                'arrow-body-style': 'off',
                'import/extensions ': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: '18.0.0',
        },
    },
};
