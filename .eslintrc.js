/**
 * 配置参数：
 * rules: {
 *   "规则名": [规则值, 规则配置]
 * }
 * 
 * 规则值：
 * "off"或者0    //关闭规则关闭
 * "warn"或者1    //在打开的规则作为警告（不影响退出代码）
 * "error"或者2    //把规则作为一个错误（退出代码触发时为1）
**/
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 没有声明的未被使用的变量或参数：级别(警告)、
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
    // 使用分号结尾：级别(警告)、配置(总是使用分号)
    "semi": [1, "always"],
    // 大括号风格：级别(错误)、
    "brace-style": [2, "1tbs", {
        // 允许块的开始和结束括号位于同一行
        "allowSingleLine": true
    }],
    // 禁止所有标签：级别(关闭)、配置(允许使用 tab)
    "no-tabs": [0, true],
    // 禁止混用 tab 和空格：级别(关闭)
    "no-mixed-spaces-and-tabs": [0],    
    // 缩进风格：级别(警告)、配置(使用 tab 键缩进)
    "indent": [1, "tab"],        
  }
}
