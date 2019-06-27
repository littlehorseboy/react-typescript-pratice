module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'linebreak-style': [
      'error',
      'windows',
    ],
    '@typescript-eslint/indent': ['error', 2]
  },
};
