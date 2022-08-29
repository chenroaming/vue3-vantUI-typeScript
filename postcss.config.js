// 单独的文件用来配置postcss插件配置，避免webpack报错
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        const exclude = ['node_modules\\vant'] // 此文件目录下的样式维持37.5的根元素大小
        return exclude.some(el => file.includes(el)) ? 37.5 : 75
      },
      // 可以从 px 更改为 rem 的属性，这里使用通配符代表所有属性都要转化
      propList: ['*']
    }
  }
}
