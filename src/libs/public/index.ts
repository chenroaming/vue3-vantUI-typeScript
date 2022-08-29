/*
 * @Description: 示例复用函数，类似vue2.x中的mixins
 * @Author: chenroaming
 * @Date: 2022-08-29 16:22:40
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-29 16:27:58
 */

import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function getSource () {
  const $route = useRoute()
  const source = computed(() => $route.params.source as string)
  return source
}
