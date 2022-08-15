/*
 * @Author: chenroaming
 * @Date: 2022-08-15 13:38:53
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-15 16:36:42
 * @FilePath: src\router\pages\tarbar.ts
 * @Description: 底部导航栏页面写在此文件中
 */

import { RouteRecordRaw } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const SearchPage = () => import('@/views/search/index.vue')
const FriendsPage = () => import('@/views/friends/index.vue')
const MinePage = () => import('@/views/mine/index.vue')
const HomePage = () => import('@/views/home/index.vue')

const tarbarRoutes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'homePage',
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
  }
]

export default tarbarRoutes
