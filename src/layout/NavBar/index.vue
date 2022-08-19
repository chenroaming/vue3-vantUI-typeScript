<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabBar.children"
      :key="item.name"
      replace
      :to="item.path"
      route
      :name="item.name"
      :icon="item.meta.icon || ''">{{ item.name }}</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import tarbarRoutes from '@/router/pages/tabBar'
import type { routeRaw } from '@/types'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'tabbarList',
  setup () {
    const $route = useRoute()
    const active = ref<string>('tabBar1')
    const [tarbarRoute] = tarbarRoutes
    const tabBar = ref(tarbarRoute) as unknown as routeRaw
    // 刷新页面时，获取当前的路由名称，然后激活标签栏相应的标签
    active.value = $route.name as string // 类型断言为string格式，避免报错
    return {
      active,
      tabBar
    }
  }
})
</script>
