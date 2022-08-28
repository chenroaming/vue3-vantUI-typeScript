import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 自适应各种分辨率屏幕
import installVantUI from './libs/vant'
import './router/permission'
import '@/style/index.scss'
import 'animate.css'
// 手动引入样式，参见：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
import 'vant/es/dialog/style'
import 'vant/es/toast/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
const app = createApp(App)
app.use(store)
app.use(router)
// 按需加载vant组件
installVantUI(app)
// 按需加载echarts组件
app.mount('#app')
