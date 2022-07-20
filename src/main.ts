import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button
} from 'vant'
import 'amfe-flexible' // 自适应各种分辨率屏幕

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Button)
app.mount('#app')
