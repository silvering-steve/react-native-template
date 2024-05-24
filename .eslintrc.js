module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'testing-library',
    'react-prefer-function-component',
    'react-hooks'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-manual-cleanup': 'warn',
    'testing-library/prefer-explicit-assert': 'error',
    'react/prop-types': 'error'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'max-lines-per-function': 'off'
      }
    }
  ]
};
