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
  lintOnSave: process.env.NODE_ENV === 'development',
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 引入ts文件时，不需要添加ts或者tsx后缀
    config.resolve.extensions
      .add('ts')
      .add('tsx')
  }
})
