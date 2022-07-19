module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'vue', 'html',
  ],
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
