module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['jsx-a11y', 'react', 'prettier', 'react-hooks'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [2, { trailingComma: 'es5' }],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
