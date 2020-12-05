module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'vue/require-prop-types': 'off',
    // // allow async-await
    // // 'generator-star-spacing': 'off',
    // // allow debugger during development
    // 'quotes': ['warn', 'double', { 'allowTemplateLiterals': true }],
    // 'comma-dangle': ['warn', 'ignore'],
    // 'no-trailing-spaces': 'warn',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'vue/max-attributes-per-line': 'off',
    // // 'no-console': 'off',
    'linebreak-style': ['error', 'unix'],  // changes the file to LF

  },
};
