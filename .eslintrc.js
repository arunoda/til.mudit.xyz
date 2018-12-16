module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'all', argsIgnorePattern: '^_' }
    ]
  }
}