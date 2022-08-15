/*
 * @Author: chenroaming
 * @Date: 2022-08-15 13:38:53
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-15 17:06:19
 * @FilePath: src\router\pages\tarbar.ts
 * @Description: 底部导航栏页面写在此文件中
 */

import { RouteRecordRaw } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const tabBarPage1 = () => import('@/views/tabBarPage1/index.vue')
const tabBarPage2 = () => import('@/views/tabBarPage2/index.vue')
const tabBarPage3 = () => import('@/views/tabBarPage3/index.vue')
const tabBarPage4 = () => import('@/views/tabBarPage4/index.vue')

const tarbarRoutes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'tabBar1',
    component: HomeView,
    meta: { icon: 'home-o' },
    children: [
      {
        path: '/',
        name: 'tabBarPage1',
        component: tabBarPage1,
        meta: { title: 'tabBar_1' }
      }
    ]
  },
  {
    path: '/tabBar2',
    name: 'tabBar2',
    component: HomeView,
    meta: { icon: 'search' },
    children: [
      {
        path: '/tabBar2',
        name: 'tabBarPage2',
        component: tabBarPage2,
        meta: { title: 'tabBar_2' }
      }
    ]
  },
  {
    path: '/tabBar3',
    name: 'tabBar3',
    component: HomeView,
    meta: { icon: 'friends-o' },
    children: [
      {
        path: '/tabBar3',
        name: 'tabBarPage3',
        component: tabBarPage3,
        meta: { title: 'tabBar_3' }
      }
    ]
  },
  {
    path: '/tabBar4',
    name: 'tabBar4',
    component: HomeView,
    meta: { icon: 'setting-o' },
    children: [
      {
        path: '/tabBar4',
        name: 'tabBarPage4',
        component: tabBarPage4,
        meta: { title: 'tabBar_4' }
      }
    ]
  }
]

export default tarbarRoutes
