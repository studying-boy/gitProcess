module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
     type: {
      description: '选择你要提交的类型:',
      enum: {
       feat: {
        description: '新功能',
        title: 'Features',
        emoji: '✨'
       },
       fix: {
        description: '修复相关bug',
        title: 'Bug Fixes',
        emoji: '🐛'
       },
       docs: {
        description: '文档更改',
        title: 'Documentation',
        emoji: '📚'
       }
      }
     }
    }
   }
 }