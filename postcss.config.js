// 单独的文件用来配置postcss插件配置，避免webpack报错
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.includes('vant') ? 37.5 : 75
      },
      propList: ['*'],
      selectorBlackList: ['van']
    }
  }
}
