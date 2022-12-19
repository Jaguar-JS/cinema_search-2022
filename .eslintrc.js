module.exports = {
    extends: [
        'eslint:recommended',
    ],
        rules: {
        semi: 'off',
        camelcase: 'off',
    },
    settings: {
        'import/resolver':
        {
            node: {
                paths: ['src'],
                extensions:
                ['.js'],
            },
        },
    },
}