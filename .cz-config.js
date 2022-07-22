module.exports = {
	types: [
		{
			value: ':sparkles: feat',
			name: '✨ 新功能'
		},
		{
			value: ':bug: fix',
			name: '🐛 修复bug'
		},
		{
			value: ':memo: docs',
			name: '📝 文档变更'
		},
		{
			value: ':lipstick: style',
			name: '💄 代码风格变更'
    },
    {
      value: ':construction: WIP',
      name: '🚧 工作进行中'
    },
		{
			value: ':hammer: refactor',
			name: '🔨 重构'
		},
    {
      value: ':zap: perf',
      name: '⚡ 性能优化'
    },
    {
      value: ':white_check_mark: test',
      name: '✅ 测试'
    },
    {
      value: ':rewind: revert',
      name: '⏪️ 回退'
    },
    {
      value: ':package: build',
      name: '📦 打包构建'
    },
    {
      value: ':rocket: chore',
      name: '🚀 构建/工程依赖/工具'
    },
    {
      value: ':construction_worker: ci',
      name: '👷 CI 配置变更'
    }
	],
	scopes: [],
	scopeOverrides: {
		':wrench: docs': [
			{ name: ':wrench: docs' },
			{ name: ':bulb: docs_code' }
		]
	},
	// override the messages, defaults are as follows
	messages: {
		type: "请选择提交类型(必填):",
		scope: '请输入文件修改范围(可选):',
		// used if allowCustomScopes is true
		customScope: '请输入文件修改范围(可选):',
		subject: '请简要描述提交(必填):\n',
		breaking: '列出所有BREAKING CHANGES(可选):\n',
		confirmCommit: '确定提交此说明吗？'
	},
	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix']
};
