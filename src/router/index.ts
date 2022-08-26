import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const NotFound = () => import('@/views/notFound.vue')
type route = RouteRecordRaw[]
// 自动批量引入pages文件夹里的路由信息
const pages = require.context('./pages/', false, /\.ts$/)
// 将路由信息添加到路由表中
// const routes: Array<RouteRecordRaw> = pages.keys().map((el:string) => {
//   const route:Array<RouteRecordRaw> = pages(el).default
//   return route
// }).flat(1)

const routes: route = pages
  .keys()
  .reduce((pre:route, cur:string):route => {
    return [...pre, ...pages(cur).default]
  }, [{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }])

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
