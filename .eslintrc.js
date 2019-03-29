module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  // 自定义的config TODO: 后面可以抽成 eslint-config 插件
  rules: {
    // don't require .vue extension when importing
    'import/extensions': 'off',
    'no-debugger': 'warn',
    'class-methods-use-this': ['off'],
    'no-param-reassign': ['off'],
    'no-plusplus': 'off',
    'no-console': ['warn', { 'allow': ['warn', 'error', 'log'] }],
    'global-require': 'off',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'error',
    'no-prototype-builtins': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-syntax':'warn',
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['off', 'as-needed'],
    'arrow-spacing': 'error',
    'no-trailing-spaces': ['error', { skipBlankLines: true }]
  }
};
