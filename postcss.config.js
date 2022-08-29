// 单独的文件用来配置postcss插件配置，避免webpack报错
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      // 如果是vant类型的文件，则以37.5作为基准值，否则设为75
      rootValue ({ file }) {
        return file.includes('vant') ? 37.5 : 75
      },
      // 代表转换所有css属性
      propList: ['*'],
      selectorBlackList: ['van-']
    }
  }
}
