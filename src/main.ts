import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 自适应各种分辨率屏幕
import installVantUI from './libs/vant'
import './router/permission'
import '@/style/index.scss'
const app = createApp(App)
app.use(store)
app.use(router)
// 按需加载vant组件
installVantUI(app)
// 按需加载echarts组件
app.mount('#app')
