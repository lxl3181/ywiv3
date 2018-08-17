module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //eslint规则：必须使用单引号
    'quotes': ['error', 'single'],
    //eslint规则：结尾不加分号';'
    'semi': ['error', 'never'],
    // 修改prettier默认配置项
    'prettier/prettier': ['error', {
      // 必须单引号
      'singleQuote': true,
      //不使用分号
      'semi': false
    }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}