import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const SearchPage = () => import('@/views/search/index.vue')
const FriendsPage = () => import('@/views/friends/index.vue')
const MinePage = () => import('@/views/mine/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: HomeView,
    children: [
      {
        path: '/search',
        name: 'searchIndex',
        component: SearchPage,
        meta: { title: '搜索页面' }
      }
    ]
  },
  {
    path: '/friends',
    name: 'friends',
    component: HomeView,
    children: [
      {
        path: '/friends',
        name: 'friendsIndex',
        component: FriendsPage,
        meta: { title: '伙伴页面' }
      }
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    component: HomeView,
    children: [
      {
        path: '/mine',
        name: 'mineIndex',
        component: MinePage,
        meta: { title: '个人中心页面' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
