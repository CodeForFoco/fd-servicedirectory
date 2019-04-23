module.exports = {
	env: {
    browser: true,
    es6: true,
		jest: true,
	}
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['jsx-a11y', 'react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': [2, { trailingComma: 'es5' }],
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
  },
};
