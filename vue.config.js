const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const port = 80 // 端口
module.exports = defineConfig({
  // 自动按需引入插件，减少vant打包后的体积
  // 参见：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  lintOnSave: process.env.NODE_ENV === 'development',
  transpileDependencies: true,
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    proxy: {
      // 详情参阅: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        // 这里以天天基金网的接口为示例
        target: 'https://api.fund.eastmoney.com',
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 重写路由路径
          ['^' + process.env.VUE_APP_BASE_API]: ''
        },
        headers: {
          Host: 'api.fund.eastmoney.com',
          Referer: 'https://fundf10.eastmoney.com/'
        }
      }
    }
  },
  chainWebpack: config => {
    // 引入ts文件时，不需要添加ts或者tsx后缀
    config.resolve.extensions
      .add('ts')
      .add('tsx')
  }
})
