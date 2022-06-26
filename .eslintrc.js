module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    //......
    // 解决函数前空格问题
    "space-before-function-paren": "off",
    // 解决eslint某行报错
    "vue/no-mutating-props": "off",
  },
  parserOptions: {
    // .......
    //解决打开文件 eslint第一行报错问题
    requireConfigFile: false,
  },
};
