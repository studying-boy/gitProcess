module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    node: true,
    browser: true,
    jquery: true,
  },
  extends: [
    'standard',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'vue', 'html',
  ],
  globals: {
    __PUBLISH_ENV__: true,
    __VERSION__: true,
    __API_HOST__: true,
    __SSO_HOST__: true,
    __DOMAIN__: true,
    __PRODUCT_ID__: true,
    __ENABLE_LOCAL_LOGIN__: true,
    __AGILEBI_TITLE__: true,
    __ENABLE_RC__: true,
    __ENABLE_DASHBOARD_SCREENSHOT__: true,
    __ENABLE_DP__: true,
    __ENABLE_FEEDBACK__: true,
    __ENABLE_EXT_WIDGET__: true,
    __ENABLE_PUBLISH__: true,
    describe: true,
    it: true,
    expect: true,
  },
  rules: {
    // 不属于standard的规定
    // 多行时强制要求添加尾逗号。
    'comma-dangle': ['error', 'always-multiline'],
    // 禁止使用info、warn和error之外的console
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    // 禁用未声明的变量
    'no-undef': 'error',
    // require semicolons at the end of statements
    semi: ['error', 'always'],
    // require default cases in switch statements
    'default-case': 'error',
    // 注释前后的空行
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: false,
        beforeLineComment: false,
      },
    ],
    // disallows unnecessary semicolons
    'no-extra-semi': 'error',
    'node/no-callback-literal': 'off',

    // vue 编写规范
    // 历史问题太多，暂时只能把该规则设置为off状态，等所有风格处理好再打开或者设置为warn状态
    'vue/no-mutating-props': 'off',
    // error 规则
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-use-v-if-with-v-for': ['error', { allowUsingIterationVar: true }],
    'no-async-promise-executor': 'off',
    'prefer-regex-literals': 'off',
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
  },
};
