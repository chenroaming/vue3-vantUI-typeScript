/*
 * @Author: chenroaming
 * @Date: 2022-08-15 13:38:53
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-24 18:08:55
 * @FilePath: src\router\pages\tarbar.ts
 * @Description: 底部导航栏页面写在此文件中
 */

import type { CustomRouteRecordRaw } from '@/types'
const HomeView = () => import('@/views/HomeView.vue')
const tabBarPage1 = () => import('@/views/tabBarPage1/index.vue')
const tabBarPage2 = () => import('@/views/tabBarPage2/index.vue')
const tabBarPage3 = () => import('@/views/tabBarPage3/index.vue')
const tabBarPage4 = () => import('@/views/tabBarPage4/index.vue')

const tarbarRoutes:CustomRouteRecordRaw = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'tabBarPage1',
        component: tabBarPage1,
        meta: { title: 'tabBar_1', icon: 'home-o' }
      },
      {
        path: '/tabBar2',
        name: 'tabBarPage2',
        component: tabBarPage2,
        meta: { title: 'tabBar_2', icon: 'search' }
      },
      {
        path: '/tabBar3',
        name: 'tabBarPage3',
        component: tabBarPage3,
        meta: { title: 'tabBar_3', icon: 'friends-o' }
      },
      {
        path: '/tabBar4',
        name: 'tabBarPage4',
        component: tabBarPage4,
        meta: { title: 'tabBar_4', icon: 'setting-o' }
      }
    ]
  }
]

export default tarbarRoutes
