module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'prefer-destructuring': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['error', { code: 100 }],
  },
};
