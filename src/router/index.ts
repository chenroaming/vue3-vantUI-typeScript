import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const SearchPage = () => import('@/views/search/index.vue')
const FriendsPage = () => import('@/views/friends/index.vue')
const MinePage = () => import('@/views/mine/index.vue')
const HomePage = () => import('@/views/home/index.vue')
const OtherPage = () => import('@/views/OtherPage.vue')
const Menu1 = () => import('@/views/menu1/index.vue')
const Menu2 = () => import('@/views/menu2/index.vue')
const Menu3 = () => import('@/views/menu3/index.vue')
const Menu4 = () => import('@/views/menu4/index.vue')
const Menu5 = () => import('@/views/menu5/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'homeIndex',
        component: HomePage,
        meta: { title: '首页' }
      }
    ]
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
  },
  {
    path: '/menu1',
    name: 'menu1',
    component: OtherPage,
    children: [
      {
        path: '/menu1',
        name: 'Menu1Index',
        component: Menu1,
        meta: { title: '示例菜单1' }
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: OtherPage,
    children: [
      {
        path: '/menu2',
        name: 'Menu2Index',
        component: Menu2,
        meta: { title: '示例菜单2' }
      }
    ]
  },
  {
    path: '/menu3',
    name: 'menu3',
    component: OtherPage,
    children: [
      {
        path: '/menu3',
        name: 'Menu3Index',
        component: Menu3,
        meta: { title: '示例菜单3' }
      }
    ]
  },
  {
    path: '/menu4',
    name: 'menu4',
    component: OtherPage,
    children: [
      {
        path: '/menu4',
        name: 'Menu4Index',
        component: Menu4,
        meta: { title: '示例菜单4' }
      }
    ]
  },
  {
    path: '/menu5',
    name: 'menu5',
    component: OtherPage,
    children: [
      {
        path: '/menu5',
        name: 'Menu5Index',
        component: Menu5,
        meta: { title: '示例菜单5' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
