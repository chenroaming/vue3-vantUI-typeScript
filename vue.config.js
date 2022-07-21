const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue: 75, // 设置根字体大小，这里将设计稿都固定为750px的宽度，具体可以依据设计图尺寸写
  //           propList: ['*'], // 属性的选择器，*表示通用
  //           selectorBlackList: ['van'] // 过滤van开头的类名，不进行rem转换
  //         })
  //       ]
  //     }
  //   }
  // },
  transpileDependencies: true,
  productionSourceMap: false
})
