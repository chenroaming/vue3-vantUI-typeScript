/*
 * @Author: chenroaming
 * @Date: 2022-08-15 13:38:53
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-26 15:32:17
 * @FilePath: src\router\pages\pages.ts
 * @Description: 将二级及二级以下页面的路由写在此文件中
 */

import type { RouteRecordRaw } from 'vue-router'
const pagesContainer = () => import('@/views/OtherPage.vue')
const Menu1 = () => import('@/views/menu1/index.vue')
const Menu2 = () => import('@/views/menu2/index.vue')
const Menu3 = () => import('@/views/menu3/index.vue')
const Menu4 = () => import('@/views/menu4/index.vue')
const Menu5 = () => import('@/views/menu5/index.vue')

const pagesRoutes:Array<RouteRecordRaw> = [
  {
    path: '/menu1',
    name: 'menu1',
    component: pagesContainer,
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
    component: pagesContainer,
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
    component: pagesContainer,
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
    component: pagesContainer,
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
    component: pagesContainer,
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

export default pagesRoutes
