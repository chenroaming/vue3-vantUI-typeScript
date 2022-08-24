<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabBar"
      :key="item.name"
      replace
      route
      v-bind="item">{{ item.name }}</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import tarbarRoutes from '@/router/pages/tabBar'
import type { routeRaw } from '@/types'
import { useRoute } from 'vue-router'
import type { TabbarItemProps } from 'vant'
/**
 * @description: 将路由类型转换为tarbarItemProps类型，避免warning
 * @param {*} obj
 * @param {*} to
 * @return {*}
 * @author: yaofei
 */
const getVanTabItemProps = (obj:routeRaw):Pick<TabbarItemProps, 'to' | 'name' | 'icon'> => {
  const { name, path, meta } = obj
  return {
    name: name as string,
    to: path,
    icon: meta.icon
  }
}
export default defineComponent({
  name: 'tabbarList',
  setup () {
    const $route = useRoute()
    const active = ref<string>('tabBar1')
    const [tarbarRoute] = tarbarRoutes
    const tabBar = ref(tarbarRoute.children?.map((el:routeRaw) => getVanTabItemProps(el)))
    // 刷新页面时，获取当前的路由名称，然后激活标签栏相应的标签
    active.value = $route.name as string // 类型断言为string格式，避免报错
    return {
      active,
      tabBar
    }
  }
})
</script>
