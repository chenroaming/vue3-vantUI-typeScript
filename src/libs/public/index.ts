/*
 * @Description: 示例复用函数，类似vue2.x中的mixins
 * @Author: chenroaming
 * @Date: 2022-08-29 16:22:40
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-29 17:27:58
 */

import { computed, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

/**
 * @description: 获取当前路由来源页面，即上一个页面
 * @return {string}
 * @author: chenroaming
 */
export function getSource () {
  const $route:RouteLocationNormalizedLoaded = useRoute()
  const source = computed(() => $route.params.source)
  return source
}

/**
 * @description: 获取当前路由页面名称
 * @return {string}
 * @author: chenroaming
 */
export function getCurrentPagesName () {
  const $route:RouteLocationNormalizedLoaded = useRoute()
  const pagesName = computed(() => $route.meta.title)
  return pagesName
}

/**
 * @description: 公用onActivated方法
 * @return {*}
 * @author: chenroaming
 */
export function onShow () {
  const $route:RouteLocationNormalizedLoaded = useRoute()
  onActivated(():void => {
    // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
    console.log(`${$route.name as string} is activated!!!`)
  })
}
